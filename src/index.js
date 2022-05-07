import React from 'react';
import ReactDOM from 'react-dom/client';
import { QuizDataProvider } from 'providers';
import App from 'pages/App';
import reportWebVitals from './reportWebVitals';

import 'styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizDataProvider>
      <App />
    </QuizDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
