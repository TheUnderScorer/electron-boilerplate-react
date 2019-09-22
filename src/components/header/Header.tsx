import * as React from 'react';
import { FC, useCallback, useEffect, useState } from 'react';
import { AppBar, Button, ButtonGroup, Toolbar } from '@material-ui/core';
import { Close, CropSquare, FilterNone, Minimize } from '@material-ui/icons'
import styled from 'styled-components';
import {
    addEventListener,
    closeApp,
    isMaximized as windowIsMaximized,
    maximiseApp,
    minimizeApp,
    removeEventListener
} from '../../electron/windowHandlers';

const DraggableToolBar = styled( Toolbar )`
    -webkit-app-region: drag;
    height: 70px;
    
    .button-group {
        height: 100%;
        
        button {
            border: none;
        }
    }
    
    .no-drag {
        -webkit-app-region: no-drag
    }
    
    .placeholder {
        flex-grow: 1;
    }
    
    .close {
        &:hover {
            background-color: ${ props => props.theme.palette.error.main };
            svg {
                color: ${ props => props.theme.palette.common.white };
            }
        }
    }
    
    .minimize {
        svg {
            position: relative;
            bottom: 6px;
        }
    }
`;

const Header: FC = () =>
{
    const [ isMaximised, setIsMaximised ] = useState( windowIsMaximized() );
    const handleResize = useCallback( () => setIsMaximised( windowIsMaximized ), [] );

    const handleMaximize = useCallback( () =>
    {
        maximiseApp();
        handleResize();
    }, [ isMaximised ] );

    useEffect( () =>
    {
        addEventListener( 'resize', handleResize );

        return () =>
        {
            removeEventListener( 'resize', handleResize );
        }
    } );

    return (
        <AppBar position="static">
            <DraggableToolBar disableGutters>
                <div className="placeholder"/>
                <ButtonGroup className="button-group">
                    <Button className="no-drag minimize" onClick={ minimizeApp }>
                        <Minimize/>
                    </Button>
                    <Button className="no-drag" onClick={ handleMaximize }>
                        {
                            isMaximised ? <FilterNone/> : <CropSquare/>
                        }
                    </Button>
                    <Button className="no-drag close">
                        <Close onClick={ closeApp }/>
                    </Button>
                </ButtonGroup>
            </DraggableToolBar>
        </AppBar>
    )
};

export default Header;
