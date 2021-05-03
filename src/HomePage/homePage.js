import React from 'react';
import ReactDOM from 'react-dom';
import readyImage from './../images/areyouready.jpeg';
import GkQuestionBox from './../GkQuestionBox/gkQuestionBox';
import AnimalQuestionBox from './../AnimalQuestionBox/animalQuestionBox';
import MathQuestionBox from './../MathQuestionBox/mathQuestionBox';
import FilmQuestionBox from './../FilmQuestionBox/filmQuestionBox';
import GeographyQuestionBox from './../GeographyQuestionBox/geographyQuestionBox';
import TitlePane from './../TitlePane/titlePane';

function HomePage() {
    return (
        <section class="section">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-half">
                        <div class="box has-text-centered">
                            <h1 class="title is-1">Welcome to Trivia!</h1>
                            <h3 class="subtitle is-4">
                                Choose a category and answer the questions in it. 
                                If you finish answering all the questions in all the categories you win the game!
                            </h3>
                            <figure class="image is-3by2">
                                <img src={readyImage} alt="homepage"/>
                            </figure>
                            <br></br>
                            <h4 class="title is-4">Choose your category:</h4>
                            <div class="columns">
                                <div class="column">
                                    <div class="columns is-offset-6">
                                        <div class="column">
                                            <button class="button is-dark" id="gk" onClick={handleButtonPress}>
                                                General Knowledge
                                            </button>
                                        </div>
                                        <div class="column">
                                            <button class="button is-dark" id="animals" onClick={handleButtonPress}>
                                                Animals
                                            </button>
                                        </div>
                                        <div class="column">
                                            <button class="button is-dark" id="mathematics" onClick={handleButtonPress}>
                                                Mathematics
                                            </button>
                                        </div>
                                        <div class="column">
                                            <button class="button is-dark" id="film" onClick={handleButtonPress}>
                                                Film
                                            </button>
                                        </div>
                                        <div class="column">
                                            <button class="button is-dark" id="geography" onClick={handleButtonPress}>
                                                Geography
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function handleButtonPress(event) {
    let buttonType = event.target.getAttribute('id');
    if(buttonType === "gk") {
        ReactDOM.render(
            <React.StrictMode>
                <br></br>
                <TitlePane />
                <br></br>
                <GkQuestionBox />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "animals") {
        ReactDOM.render(
            <React.StrictMode>
                <br></br>
                <TitlePane />
                <br></br>
                <AnimalQuestionBox />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "mathematics") {
        ReactDOM.render(
            <React.StrictMode>
                <br></br>
                <TitlePane />
                <br></br>
                <MathQuestionBox />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "film") {
        ReactDOM.render(
            <React.StrictMode>
                <br></br>
                <TitlePane />
                <br></br>
                <FilmQuestionBox />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "geography") {
        ReactDOM.render(
            <React.StrictMode>
                <br></br>
                <TitlePane />
                <br></br>
                <GeographyQuestionBox />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
}

export default HomePage;