import { applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {legacy_createStore as createStore} from 'redux'
import userReducer, { restoreSessionAction } from './userDuck'
import charsReducer, { getCharactersAction } from './charsDuck'

export const reducers = {
    user: userReducer.reducer,
    characters: charsReducer.reducer
};

export default function configureStore(history, initialState) {
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}





