import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './App.jsx';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'






//let store = createStore(toucanApp);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootElement = document.getElementById('MyApp');
//const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// le store est l'endroit qui détient l'état de l'application. Nous passons la propriété store à l'élément <Provider>. Ce dernier enveloppe notre composant <App/>
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
