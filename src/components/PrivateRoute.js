import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import { useAuth } from '../contexts/Auth'

/*
export function PrivateRoute({ element: Component, ...rest }) {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        // Renders the page only if `user` is present (user is authenticated)
        // Otherwise, redirect to the login page
        return user ? <Component {...props} /> : <Navigate to="/login" />
      }}
    ></Route>
  )
}
*/

export function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  }