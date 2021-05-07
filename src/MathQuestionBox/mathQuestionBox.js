import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/dist/axios';
import { useEffect, useState } from 'react';
import './mathQuestionBox.css';

let answers = {};

function GkQuestionBox() {
  const [questionObjects, setQuestionObjects] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios({
        url: 'https://opentdb.com/api.php?amount=10&category=19&difficulty=easy',
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

  console.log(questionObjects);
  return (
    <div class="columns is-centered">
      <div class="column is-half">
          <form class="box">
          <h1 class="title is-1 has-text-centered">Welcome to General Knowledge Trivia!</h1>
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
          <button class="button is-black" onClick={handleSubmitButtonPress}>Submit</button>
        </div>
      </div>
    </div>
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

function handleSubmitButtonPress(event) {
  let radioButtons = [];
  let answersEntered = {};
  radioButtons = document.getElementsByClassName('radioButton');
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      let objIndex = radioButtons[i].getAttribute("objindex");
      answersEntered[''+objIndex] = radioButtons[i].getAttribute('option');
    }
  }
  let keys1 = Object.keys(answersEntered);
  let keys2 = Object.keys(answers);
  let incorrectAnswers = {};
  if(keys1.length === keys2.length) {
    for(let i = 0; i < keys1.length; i++) {
      if (answers[""+i] !== answersEntered[""+i]) {
        incorrectAnswers[""+i] = answersEntered[""+i];
      }
    }
  }
  console.log(incorrectAnswers);
  let incorrectKeys = Object.keys(incorrectAnswers);
  let printKeys = incorrectKeys.map(key => parseInt(key)+1);
  if (incorrectKeys.length !== 0) {
    alert("You lost! The following questions were wrong: "+printKeys);
  } else {
    alert("You won! Try out another category!");
  }
}

export default GkQuestionBox;
