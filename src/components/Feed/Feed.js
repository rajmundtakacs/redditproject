import React from 'react';
import Post from '../Post/Post';

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