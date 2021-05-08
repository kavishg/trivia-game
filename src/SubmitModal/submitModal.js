import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./submitModal.css";
import {useState} from 'react';

function SubmitModal(props) {

    const [isActive, setActive] = useState(false);
    const [score, setScore] = useState(0);
    const [printKeys, setPrintKeys] = useState([]);

    function handleClick (event) {
        let buttonType = event.target.getAttribute('id');
        if (buttonType === 'okButton' || buttonType === 'closeButton') {
            setActive(false);
        }
    };

    function handleSubmitButtonPress(event) {
        setActive(true);
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
        let keys2 = Object.keys(props.answers);
        let incorrectAnswers = {};
        if(keys1.length === keys2.length) {
          for(let i = 0; i < keys1.length; i++) {
            if (props.answers[""+i] !== answersEntered[""+i]) {
              incorrectAnswers[""+i] = answersEntered[""+i];
            }
          }
        }
        if (Object.keys(answersEntered).length === 0) {
            setScore(0);
        } else  {
            setScore(Object.keys(props.answers).length - Object.keys(incorrectAnswers).length);
        }
        let incorrectKeys = Object.keys(incorrectAnswers);
        setPrintKeys(incorrectKeys.map(key => parseInt(key)+1));
    };

    const active = isActive ? "is-active" : "";
    return(
        <div className="App">
        <div className={`modal ${active}`}>
            <div className="modal-background" />
            <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Results</p>
                <button
                onClick={handleClick}
                className="delete"
                aria-label="close"
                id="closeButton"
                />
            </header>
            <section className="modal-card-body">
                <div>
                    <h3 class="title is-3">Score: {score}/10</h3>
                    <h4 class="title is-4" id="wrongAnswers">{
                        (score !== 10) ? <div>
                            You got the following question(s) wrong: {
                                printKeys.map((key, index) => {
                                if (index === printKeys.length - 1) {
                                    return (<span>{key} </span>)
                                } else {
                                    return (<span>{key}, </span>);
                                }
                            })}
                        </div> :
                        <div>
                            Congratulations! You won! Try another category to test how smart you truly are!
                        </div>
                    }</h4>
                </div>
            </section>
            <footer className="modal-card-foot">
                <button class="button is-black" onClick={handleClick} id="okButton">
                    OK
                </button>
            </footer>
            </div> 
        </div>

        <button onClick={handleSubmitButtonPress} class=" modalButton button is-black" id="submitButton">
            Submit
        </button>
        </div>
    );
}

export default SubmitModal;

