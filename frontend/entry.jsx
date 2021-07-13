import React from 'react'
import ReactDOM from "react-dom";
import Root from './components/Root';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session-actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const preloadedState = { 
      entities: {
        users: {
          [currentUser.id]: currentUser
        }
        // workspaces:
      },
      session: { 
        currentUserId: currentUser.id,
        // currentWorkspaceId
      }
    };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // Only for debugging purposes; remove for production
  window.currentUser = store.currentUser;
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
