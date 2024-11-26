import React from 'react';
import Post from '../Post/Post';
import styles from './Feed.module.css';
import Topics from '../Topics/Topics';

const Feed = ({ posts }) => {
    return (
        <>
        
        <div className="feed" >
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => <Post key={post.id} post={post} />)
            )}
        </div>
        </>
    );
};

export default Feed;