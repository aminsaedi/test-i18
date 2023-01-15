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
          <FormattedPlural
            value={1}
            one="You have {count} message"
            other="You have {count} messages"
          />
          <br />
          <FormattedMessage
            id="VaqBdp"
            defaultMessage="You have {count} {count, plural, =0 {no messages} one {1 message} other {{count} messages}}"
            description="The message to display when the user edits the file"
            values={{ count: 1 }}
          />

          <FormattedMessage
            id="iuxffi"
            defaultMessage="the price is {p, number, customCurrency}"
            description="The message to display when the user edits the file"
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
