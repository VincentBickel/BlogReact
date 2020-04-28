import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        const {post} = this.props
        return(
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <button onClick={this.handleDelete}>supprimer</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.postId, 10);
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => {
            dispatch({ type: 'DELETE_POST', id: id })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);
