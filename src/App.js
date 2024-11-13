import React, { useState } from 'react';
import './App.css';
import RedditFeed from './features/Reddit/RedditFeed';
import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [subreddit, setSubreddit] = useState("home");

  const handleSearch = (query) => {
    setSearchTerm(query);
  }

  const handleSubredditSelect = (subreddit) => {
    setSubreddit(subreddit);
  }

  return (
    <div className="app">

      <div className="header">
        <Header onSearch={handleSearch}/>
      </div>
  
      <div className="main">
        <div className="redditfeedbox">
          <RedditFeed searchTerm={searchTerm} subreddit={subreddit} />
        </div>
        <div className="topicsbox">
          <Topics onSubredditSelect={handleSubredditSelect} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
