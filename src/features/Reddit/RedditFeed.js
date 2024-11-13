import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRedditPosts } from './redditSlice';
import Feed from '../../components/Feed/Feed';

const RedditFeed = ({ searchTerm, subreddit }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.reddit.posts);
    const status = useSelector((state) => state.reddit.status);
    const error = useSelector((state) => state.reddit.error);

    useEffect(() => {
          dispatch(fetchRedditPosts({ subreddit, searchTerm}));
      }, [dispatch, subreddit, searchTerm]);

    return (
        <div>
            {status === 'loading' && <h1>Loading posts...</h1>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && <Feed posts={posts} />}
        </div>
    )
}

export default RedditFeed;