import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Topics.module.css';

const Topics = ({ onSubredditSelect}) => {

    const popularSubreddits = ['funny', 'AskReddit', 'gaming', 'worldnews', 'todayilearned', 'aww', 'Music', 'memes', 'movies', 'science', 'pics'];

    return (
        <div className={styles.topics}>
            <ul>
                {popularSubreddits.map((subreddit) => (
                    <li key={subreddit}>
                        <Link className={styles.topiclink} to ="/" onClick={() => onSubredditSelect(subreddit)} >
                        {subreddit}
                        </Link>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Topics;