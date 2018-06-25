import React, {Component} from 'react'

class PostDetails extends Component {
    constructor(props){
        super(props)
    }
    state = {
        post : {}
    }
    render(){
        return (
            <div>
                {this.props.params}
            </div>
        )
    }
}

export default PostDetails;