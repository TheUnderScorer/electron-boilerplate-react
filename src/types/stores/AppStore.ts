import AppReducer from '../reducers/AppReducer';
import ThemeReducer from '../reducers/ThemeReducer';

export default interface AppStore
{
    app: AppReducer;
    theme: ThemeReducer;
}
