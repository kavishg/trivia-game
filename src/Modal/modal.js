import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios/dist/axios';
import "bulma/css/bulma.css";
import "./modal.css";
import {useState, useEffect} from 'react';

function Modal(props) {

    const [isActive, setActive] = useState(false);
    const [randomFact, setRandomFact] = useState('');
    const [joke, setJoke] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            if (props.type === 'mathFact') {
                document.getElementById("factButton").addEventListener('click', async () => {
                    const fact = await axios ({
                        url: "http://numbersapi.com/random/math",
                        method: 'get',
                    });
                    setRandomFact(fact.data);
                });
            } else if (props.type === 'fact') {
                document.getElementById("factButton").addEventListener('click', async () => {
                    const fact = await axios ({
                        url: "https://uselessfacts.jsph.pl/random.json?language=en",
                        method: 'get',
                    });
                    setRandomFact(fact.data.text);
                });
            } else if (props.type === 'joke') {
                document.getElementById("jokeButton").addEventListener('click', async() => {
                    const fetchJoke = await axios ({
                        url: 'https://official-joke-api.appspot.com/random_joke',
                        method: 'get',
                    });
                    setJoke(fetchJoke.data);
                });
            }
        }
        fetchData();
    }, []);

    function handleClick (event) {
        let buttonType = event.target.getAttribute('id');
        if (buttonType === 'okButton' || buttonType === 'closeButton') {
            setActive(false);
        } else if (buttonType === 'factButton' || buttonType === 'jokeButton') {
            setActive(true);
        } 
    };
    const active = isActive ? "is-active" : "";
    return(
        <div className="App">
        <div className={`modal ${active}`}>
            <div className="modal-background" />
            <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{props.header}</p>
                <button
                onClick={handleClick}
                className="delete"
                aria-label="close"
                id="closeButton"
                />
            </header>
            <section className="modal-card-body">
                <div>
                    <h4 class="title is-4">{ (props.type ==='fact') ? 
                        `${randomFact}` :  
                        <div>
                            <div>{joke.setup}</div>
                            <div>{joke.punchline}</div>
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

        <button onClick={handleClick} class="button is-black" id={props.id}>
            {props.text}
        </button>
        </div>
    );
}

export default Modal;

