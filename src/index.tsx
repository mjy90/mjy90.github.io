import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";

import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
