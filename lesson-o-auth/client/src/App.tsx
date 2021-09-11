import React from 'react';
import './App.css';

const GITHUB_CLIENT_ID = "f3f6b47cb120839f2e9c";
const gitHubRedirectURL = "http://localhost:4000/api/auth/github";
const path = "/";

function App() {
  return (
    <div className="App">
      <a
          href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
      >
        LOGIN WITH GITHUB
      </a>
    </div>
  );
}

export default App;
