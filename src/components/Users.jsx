import React, { Component } from 'react'
import User from '.User'
class Users extends Component { 
    componentWillMount = () => {
        this.loadUsers()
    }
    render(){
        return (
            <div>
                <h2>Users created</h2>               
            </div>
        )
    }
}

export default Users;