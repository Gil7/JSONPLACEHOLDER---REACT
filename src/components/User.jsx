import React, { Component } from 'react'

class User extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.name}</span>
                        <p>Email: {this.props.email}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">See more details</a>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default User;