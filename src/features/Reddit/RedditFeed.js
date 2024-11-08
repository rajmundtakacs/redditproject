import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRedditPosts } from './redditSlice';
import Feed from '../../components/Feed/Feed';

const RedditFeed = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.reddit.posts);
    const status = useSelector((state) => state.reddit.status);
    const error = useSelector((state) => state.reddit.error);
    const [subreddit, setSubreddit] = useState('javascript');

    useEffect(() => {
          dispatch(fetchRedditPosts(subreddit));
      }, [dispatch]);

    return (
        <div>
            {status === 'loading' && <p>Loading posts...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && <Feed posts={posts} />}
        </div>
    )
}

export default RedditFeed;