import React from 'react'
import { NavLink } from 'react-router-dom'

export const Homepage = () => {
  return (
    <div>
        <h1>Homepage</h1>
        <NavLink to="/management/warehouses">Warehouses</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
        <br />
        <NavLink to="/register">Register</NavLink>
    </div>
  )
}
