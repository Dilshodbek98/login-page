import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Context from './components/context';
import Root from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Root/>
    </Context>
  </React.StrictMode>
);
