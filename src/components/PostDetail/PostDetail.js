import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import styles from './PostDetail.module.css';
import Comments from '../../features/Comments/Comments';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const selectedPost = useSelector(state => state.posts.posts.find(post => post.id === id));

    useEffect(() => {
        if (selectedPost) {
            setPost(selectedPost);
        }
    }, [id, selectedPost]);

    if (!post) {
        return <p>Loading post details...</p>;
    }

    return (
        <div className={styles.detailbox}>
            <h2>{post.title}</h2>
            {post.selftext && <p>{post.selftext}</p>}
            {post.url && post.url.match(/\.(jpeg|jpg|gif|png)$/) ? (
                <img src={post.url} alt={post.title} />
            ) : null}
            <p>Posted by: {post.author}</p>
            <Comments postId={id}/>
        </div>
    );
}

export default PostDetail;

    