import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './content/content.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

//React component names must always start with a capital letter, while HTML tags must be lowercase.
// to commit change in git repositry we have to make following changes
// git add src/index.js
// git commit -m "we have to write any message"
// finally git push
reportWebVitals();
