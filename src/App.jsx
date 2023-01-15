import React from 'react';
import { FormattedMessage, FormattedPlural } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from './store/configStore';

import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.lang.lang);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* dropdown to select lang */}
          <select
            value={locale}
            onChange={(e) => {
              dispatch(setLang(e.target.value));
            }}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="fa">Persian</option>
          </select>

        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage
            id="app.edit"
            defaultMessage="Edit {filename} and save to reload."
            description="The message to display when the user edits the file"
            values={{ filename: <code>src/App.js</code> }}
          />
        </p>
        <p>
          <FormattedMessage
            id="app.learn"
            defaultMessage="Learn React"
            description="The message to display when the user edits the file"
          />
        </p>
        <p>
          <FormattedPlural
            value={1}
            one="You have {count} message"
            other="You have {count} messages"
          />
          <FormattedMessage
            id="app.message"
            defaultMessage="You have {count, plural, one {message} other {messages}}"
            description="The message to display when the user edits the file"
            values={{ count: 1 }}
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
