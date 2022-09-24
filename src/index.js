import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//  USER FEEDBACK REDUCER
//
//  ADD_USER_INPUT -> Updates the store of user feedback
//  CLEAR_DATA -> Clears the store data for a new set of inputs
const userFeedback = (state = [], action) => {
    if(action.type === 'ADD_USER_INPUT') {
        return [...state, action.payload];
    }   //  end if
    else if(action.type === 'CLEAR_DATA') {
        return [];
    }   //  end else if
    return state;
}

const storeInstance = createStore(
    combineReducers({
        userFeedback,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
    registerServiceWorker();
