import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the root component
import './styles.css'; // Import your custom styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Mount the App component to the root element
);
