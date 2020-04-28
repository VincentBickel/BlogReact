import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Accueil extends Component {
    render() {
        const posts = this.props.posts;
        
        return(
            <div>
                {posts.map(post =>(
                    <div key={post.id}>
                        <Link to={"/" + post.id}>
                            <h3>{post.title}</h3>
                        </Link>
                        <p>{post.content}</p>
                    </div>  
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Accueil);