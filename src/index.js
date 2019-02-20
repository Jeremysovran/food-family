/**
 * import : npm
 */
import '@babel/polyfill';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setCurrentUser } from 'src/store/reducers/menu-reducer';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from 'src/utils/setAuthorizationToken';
/**
 * import : local
 */
import store from 'src/store';
import App from 'src/components/App';

/**
 * Render - Rendu d'un composant React dans le DOM
 */

const rootComponent = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
const target = document.getElementById('root');
// 1 - Le composant à rendre
// 2 - La cible dans le DOM
render(rootComponent, target);


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
