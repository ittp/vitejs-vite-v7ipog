import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css' from 'shelljs'


import { Row } from 'antd'

import DataTable from 'antd-data-table'

function runCommand() {
  // let getDomain = 'show acme';

  console.log("command: ")


  return ""
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Router</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Connect {count}
        </button>
        <p>
          Router <code>de5d5265eac3a0c2128af63f</code> management
        </p>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
          Status
        </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
