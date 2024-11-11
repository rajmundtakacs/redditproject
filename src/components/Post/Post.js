import React from 'react';

const Post = ({ post }) => {
    const { title, author, url } = post;

    const isImage = url?.match(/\.(jpeg|jpg|gif|png)$/);

    return (
        <div className="post">
            <h2>{title}</h2>
            <p>Posted by: {author}</p>
            {isImage ? (
                <img src={url} alt={title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
            ) : (
                <p>No image available</p>
            )}
        </div>
    );
}

export default Post;
