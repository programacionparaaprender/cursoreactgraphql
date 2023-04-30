//import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { combineReducers, compose, applyMiddleware } from 'redux'
import {legacy_createStore as createStore} from 'redux'
import userReducer, { restoreSessionAction } from './userDuck'
import charsReducer, { getCharactersAction } from './charsDuck'
import thunk from 'redux-thunk'

export const reducers = {
    user: userReducer,
    characters: charsReducer
};

let rootReducer = combineReducers({
    ...reducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    // consiuiendo los persojaes por primera vez
    getCharactersAction()(store.dispatch, store.getState)
    restoreSessionAction()(store.dispatch)
    return store
}
