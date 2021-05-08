import React from 'react';
import axios from 'axios/dist/axios';
import { useEffect, useState } from 'react';
import './animalPage.css';
import TitlePane from '../TitlePane/titlePane';
import SubmitModal from './../SubmitModal/submitModal';
import Modal from './../Modal/modal';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../theme';
import { useDarkMode } from './../useDarkMode';
import { GlobalStyles } from './../global';
import LightDarkToggle from './../LightDarkToggle/lightDarkToggle';

let answers = {};

function GkQuestionBox() {
  const [questionObjects, setQuestionObjects] = useState([]);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios({
        url: 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy',
        method: 'get',
      });

      let questionObjectsTemp = [];
      for (let i = 0; i<result.data.results.length; i++) {
        questionObjectsTemp.push(result.data.results[i]);
        answers[""+i] = result.data.results[i].correct_answer;
      }
      setQuestionObjects(questionObjectsTemp);
    }
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyles />
    <div>
      <br></br>
      <TitlePane />
      <br></br>
      <div class="right">
        <LightDarkToggle onChange={toggleTheme}/>
      </div>
      <div class="columns is-centered">
        <div class="column is-half">
            <form class="box">
            <h1 class="title is-1 has-text-centered">Welcome to Animal Trivia!</h1>
              {questionObjects.map((questionObj, index) => {
                let options = [...questionObj.incorrect_answers].concat(questionObj.correct_answer);
                shuffle(options);
                return (
                <div class="field" key={'question-'+index}>
                  <label class="label break_line">{decodeHtml(questionObj.question)}</label>
                  <div class="control" key={'options-'+index}>
                    {options.map((option, optionIndex) => (
                      <div class="control" key={'option-'+optionIndex}>
                        <label class="label break_line">
                          <input type="radio" name={"option"+index} class="radioButton" objindex={''+index} option={''+option}/>
                            {"  "+decodeHtml(option)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )})}
          </form>
          <div class="column is-offset-10">
            <SubmitModal answers={answers} />
          </div>
        </div>
      </div>
      <div class="right-below-mode">
          <Modal text="Get a Fun Fact!" id="factButton" header="Here's a fun fact for you!" type="fact"
          />
        </div>
        <div class="right-below-fact">
          <Modal text="Fancy a joke?" id="jokeButton" header="Here's a joke for you!" type="joke"/>
        </div>
    </div>
    </ThemeProvider>
  );
}

function decodeHtml(html) {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default GkQuestionBox;
