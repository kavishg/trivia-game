import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionBox from './QuestionBox/questionBox.js';
import TitlePane from './TitlePane/titlePane.js';
import HomePage from './HomePage/homePage.js';

ReactDOM.render(
  <React.StrictMode>
    {/* <HomePage/>  */}
    <br></br>
    <TitlePane />
    <br></br>
    <QuestionBox />
  </React.StrictMode>,
  document.getElementById('root')
);
