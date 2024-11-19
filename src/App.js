import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PostFeed from './features/Posts/PostFeed';
import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';
import PostDetail from './components/PostDetail/PostDetail';

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
    <Router>
      <div className="app">

        <div className="header">
          <Header onSearch={handleSearch}/>
        </div>
    
        <div className="main">
          <div className="redditfeedbox">
            <Routes>
              <Route path="/" element={<PostFeed searchTerm={searchTerm} subreddit={subreddit} />} />
              <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
          </div>
          <div className="topicsbox">
            <Topics onSubredditSelect={handleSubredditSelect} />
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
