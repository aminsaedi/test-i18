import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from './store/configStore';

import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.lang.lang);

  const [count, setCount] = useState(0);

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
            id="oOgH6W"
            defaultMessage="Edit {filename} and save to reload."
            description="The message to display when the user edits the file"
            values={{ filename: <code>src/App.js</code> }}
          />
        </p>
        <p>
          <FormattedMessage
            id="sN4pDg"
            defaultMessage="Learn React"
            description="The message to display when the user edits the file"
          />
          <br />
        </p>
        <p>
          <button type="button" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button type="button" onClick={() => setCount(count - 1)}>
            -
          </button>
          <br />
          <FormattedMessage
            id="2itry7"
            defaultMessage="You have {count, plural, =0 {no messages} one {1 message} other {{count} messages}}"
            description="The message to display when the user edits the file"
            values={{ count }}
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
