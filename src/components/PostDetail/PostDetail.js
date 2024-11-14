import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import styles from './PostDetail.module.css';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const selectedPost = useSelector(state => state.reddit.posts.find(post => post.id === id));

    useEffect(() => {
        if (selectedPost) {
            setPost(selectedPost);
        }
    }, [id, selectedPost]);

    if (!post) {
        return <p>Loading post details...</p>;
    }

    return (
        <div className={styles.detailContainer}>
            <h2>{post.title}</h2>
            {post.selftext && <p>{post.selftext}</p>}
            {post.url && post.url.match(/\.(jpeg|jpg|gif|png)$/) ? (
                <img src={post.url} alt={post.title} />
            ) : (
                <a href={post.url} target="_blank" rel="noopener noreferrer">View Post on Reddit</a>
            )}
            <p>Posted by: {post.author}</p>
            {/* Add other post details here as needed */}
        </div>
    );
}

export default PostDetail;

    