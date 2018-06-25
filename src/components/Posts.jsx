import React,  { Component} from 'react'
import { Link} from 'react-router-dom'
class Posts extends Component {
    constructor(props){
        super(props)
    }
    state = {
        posts: []
    }
    componentWillMount = () => {
        this.loadPosts()
    }
    loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            this.setState(
                {
                    posts : posts
                }
            )
        })
        .catch(err => console.log(err))
    }
    render(){
        const postsList = this.state.posts.map(post => {
            return (
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{post.title.substring(0,10)}</span>
                            <p>{post.body.substring(0,40)}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`posts/${post.id}`} params={post.id}>Read</Link>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="row">
                {postsList}
            </div>
        )
    }
 }
 export default Posts;