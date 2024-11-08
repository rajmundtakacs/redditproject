import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="post">
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.selftext}</p>
            <p>{post.ups}</p>
        </div>
    )
}

export default Post;