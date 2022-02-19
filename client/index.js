import React from 'react'
import { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={'kahu-2022-jad.au.auth0.com'}
      clientId={'vdt0mCYhVdorJrAxuQncqiKsA69mXhRv'}
      redirectUri={window.location.origin}
      audience='https://journal/api'>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
