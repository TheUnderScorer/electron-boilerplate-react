import * as React from 'react';
import { FC } from 'react';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
    container: {
        marginTop: theme.spacing( 1 )
    }
} ) );

const MainContainer: FC = ( { children } ) =>
{
    const classes = useStyles();

    return (
        <Container className={ classes.container } fixed>
            { children }
        </Container>
    )
};

export default MainContainer;
