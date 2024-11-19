import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.module.css';

const Post = ({ post }) => {
    const { title, url, id, selftext } = post;

    const isImage = url?.match(/\.(jpeg|jpg|gif|png)$/);

    return (
        <div className={styles.postbox}>
            <h2>{title}</h2>
            {selftext && <p>{selftext}</p>}
            {isImage ? <img src={url} alt={title} /> : null}
            <Link to={`/posts/${id}`} className={styles.details}>View details</Link>
        </div>
    );
}

export default Post;
