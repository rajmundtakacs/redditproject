import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/Posts/postSlice';
import styles from './PostDetail.module.css';
import Comments from '../../features/Comments/Comments';

const PostDetail = ({ subreddit }) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const post = useSelector(state => state.posts.posts.find(post => post.id === id));
    const status = useSelector((state) => state.posts.status);

    useEffect(() => {
        if (!post && status !== 'loading') {
            dispatch(fetchPosts({ subreddit, searchTerm: ""}));
        }
    }, [dispatch, post, status, subreddit]);

    if (status === 'loading') {
        return <h2 className ={styles.loading}>Loading post details...</h2>;
    }

    if (!post) {
        return <p>Post not found.</p>
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

    