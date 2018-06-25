import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class PostDetails extends Component {
    constructor(props){
        super(props)
    }
    state = {
        post : {}
    }
    componentWillMount = () => {
        this.loadPost()
    }
    loadPost = () => {
        const id = this.props.match.params.id
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(post => {
            this.setState({
                post : post
            })
        })
    }
    render(){
        return (
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"> - {this.state.post.title}</span>
                        <p>{this.state.post.body}</p>
                    </div>
                    <div className="card-action">
                        <Link to="/"  className="btn red"> Regresar</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default PostDetails;