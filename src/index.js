import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

let store = generateStore()

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let WithRouter = () => <BrowserRouter><App /></BrowserRouter>
let WithStore = () => <Provider store={store} ><WithRouter /></Provider>
let WithApollo = () => <ApolloProvider client={client} ><WithStore /></ApolloProvider>

ReactDOM.render(<WithApollo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// Create browser history to use in the Redux store
/* const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });


import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';


const store = configureStore(history);
const App2 = () => {
    return (
        <ConnectedRouter history={history}>
            <WithStore />
        </ConnectedRouter>
    );
  };

ReactDOM.render(
    <Provider store={store.store}>
        <App2 />
    </Provider>
    ,
    document.getElementById('root')); */

