import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { userLogin, userLogout } from './actions/auth';
import { auth } from './firebase/auth';
import registerServiceWorker from './registerServiceWorker';

/*
* GLOBAL STYLES
*/
injectGlobal`
  *, :after, :before {
    box-sizing: border-box;
  }
  
  body {
    background-color: #fafafa;
    font-family: Helvetica, serif;
    font-size: 1.1rem;
    margin: 0;
  }
`;

const store = configureStore();

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(userLogin(user.uid, user.displayName));
  } else {
    store.dispatch(userLogout());
  }
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
