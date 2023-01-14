import React from 'react';
import { FormattedMessage } from 'react-intl';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage
            id="app.edit"
            defaultMessage="Edit {filename} and save to reload."
            description="The message to display when the user edits the file"
            values={{ filename: <code>src/App.js</code> }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
