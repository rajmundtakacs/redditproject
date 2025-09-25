# Reddit Clone

Reddit Clone is a React + Redux application that mimics core Reddit features: browsing posts, filtering by topics, searching, and viewing post details with comments.
The app fetches data from the Reddit public JSON API to display posts, search results, and comments dynamically.
It was built as a portfolio project to practice **state management, responsive design, and API-driven development**.

---

## Live Demo
[Click here to try the live version on Netlify](https://mapadureddit.netlify.app)

---

## Tech Stack
- [React 18](https://react.dev/) with Create React App / Vite
- [Redux Toolkit](https://redux-toolkit.js.org/) for global state management
- [React Router](https://reactrouter.com/) for navigation
- Native Fetch API for data fetching
- Native responsive CSS (media queries, flexbox)
- Reddit JSON API as the data source

---

## Features
- **Post Feed** – browse a list of posts
- **Post Detail View** – open a post to see full content
- **Comments** – view comments under each post  
- **Topic Filtering** – browse posts by category/topic
- **Search** – find posts by keyword
- **Responsive Design** – fully mobile- and desktop-friendly  

---

## Requirements
- Node.js 18+  
- npm 9+

---

## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/rajmundtakacs/redditproject.git
cd redditproject
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will run at http://localhost:3000

## Deployment

Build a production bundle with:

```bash
npm run build
```

The build/ folder can be deployed to any static host (GitHub Pages, Netlify, Vercel, etc).

## Project Structure

```text
src/
  components/      # Reusable UI components (Feed, Post, Searchbar, etc.)
  features/        # Redux slices and logic (Comments, Posts)
  App.js           # Main app component
  store.js         # Redux store configutation
  index.js         # App entry point
```
## Testing
This project includes a few unit tests written with **Jest** and **React Testing Library** (for Redux slices and UI components).  
Run them with:

```bash
npm test
```

## Development Notes

Built with Create React App (react-scripts).

Uses Redux Toolkit slices for posts and comments.

Routing with React Router v6.

## License

This project is for learning and portfolio purposes.
Feel free to fork and adapt for your own use.
