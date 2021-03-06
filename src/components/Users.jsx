import React, { Component } from 'react'
import User from './User'
class Users extends Component { 
    state = {
        users: []
    }
    componentWillMount = () => {
        this.loadUsers()
    }
    loadUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            this.setState(
                {
                    users: users
                }
            )
        })
        .catch(err => console.log(err))
    }
    render(){
        const usersList = this.state.users.map(user => {
            return (
                <User
                    email={user.email}
                    name={user.name}
                />
            )
        })
        return (
            <div>
                <h2>Users created</h2>  
                <div className="row">
                    {usersList}
                </div>             
                
            </div>
        )
    }
}

export default Users;