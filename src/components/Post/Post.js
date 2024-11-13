import React from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
    const { title, author, url } = post;

    const isImage = url?.match(/\.(jpeg|jpg|gif|png)$/);

    return (
        <div className={styles.postbox}>
            <h2>{title}</h2>
            {isImage ? <img src={url} alt={title} /> : null}
            <p>{author}</p>
        </div>
    );
}

export default Post;
