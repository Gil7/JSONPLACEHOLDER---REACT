import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Posts from './Posts'
class Navigation extends Component {
    render () {
        return (
            <div>
                <NavLink className="btn" to="/">HOME</NavLink>
                <NavLink className="btn" to="/posts">Posts </NavLink>
            </div>
        )
    }
}
export default Navigation;