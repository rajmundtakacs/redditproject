import './App.css';
import RedditFeed from './features/Reddit/RedditFeed';
import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';

function App() {
  return (
    <div className="app">
      <Header />
      <RedditFeed />
      <Topics />
    </div>
  );
}

export default App;
