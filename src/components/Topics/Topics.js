import React from 'react';
import styles from './Topics.module.css';

const Topics = ({ onSubredditSelect}) => {

    const popularSubreddits = ['funny', 'AskReddit', 'gaming', 'worldnews', 'todayilearned', 'aww', 'Music', 'memes', 'movies', 'science', 'pics'];

    return (
        <div className={styles.topics}>
            <ul>
                {popularSubreddits.map((subreddit) => (
                    <li key={subreddit} onClick={() => onSubredditSelect(subreddit)}>
                        {subreddit}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Topics;