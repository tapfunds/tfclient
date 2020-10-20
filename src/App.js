import React from 'react';
import './App.css';
import Link from './Link';

// get tgcloud inite link token
// use link token to open link 
// get that pub access token from Link auth
// on success send that pub access token on server
// that will return a permanent access token and item ID

function App() {
  


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link/>
        </div>
      </header>

    </div>
  );
}

export default App;
