import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  let store
  if (window.currentUser) {
    const { currentUser } = window
    const preloadedState = {
      entities: {
        users: {
          [currentUser.id]: currentUser,
        },
      },
      session: {
        currentUserId: currentUser.id,
      },
    }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }
  const elem = document.getElementById('userScript')
  if (elem) document.body.removeChild(elem)

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})
