import React from 'react';
import ReactDOM from 'react-dom';
//Importação do font-awesome, que para facilitar será processado como <i></i>
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Commom.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import produtosReducer from './store/reducers/produtos'
import paginationReducer from './store/reducers/pagination'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    prod: produtosReducer,
    pg: paginationReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({ trace: true }) : composeWithDevTools({});


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
