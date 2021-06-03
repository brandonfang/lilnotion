import React from 'react'
import ReactDOM from "react-dom";
import Root from './components/Root-temp';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session-actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = { 
      entitities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // Debugging 
  window.getState = store.getState
  window.dispatch = store.dispatch

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
