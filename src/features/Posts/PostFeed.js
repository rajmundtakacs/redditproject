import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';
import Feed from '../../components/Feed/Feed';
import styles from './PostFeed.module.css';

const PostFeed = ({ searchTerm, subreddit }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
          dispatch(fetchPosts({ subreddit, searchTerm}));
      }, [dispatch, subreddit, searchTerm]);

    return (
        <div>
            {status === 'loading' && <h1 className={styles.loading}>Loading posts...</h1>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && <Feed posts={posts} />}
        </div>
    )
}

export default PostFeed;