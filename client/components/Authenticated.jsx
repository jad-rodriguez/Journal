import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0();
  // const Authenticated = useAuth0().isAuthenticated
  return isAuthenticated
}

export function IfAuthenticated ({ children }) {
  return isAuthenticated()
    ? <>{ children }</>
    : null
}

export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated()
    ? <>{ children }</>
    : null
}