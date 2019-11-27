import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';

//composeWithDevTools - use it to make redux extension work. 
// If not apply any middleware to use this extension it will not be able to work
import{composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

// Since we have a store and the store is connected and having all the updated states from Reducer.
// So we need to import Reducer and use it inside our Store.
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};

// To create a Store. Here, we can apply our users and our middleware, also the initial States
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;