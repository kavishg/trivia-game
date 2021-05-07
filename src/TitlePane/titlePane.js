import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './../HomePage/homePage';
import GkQuestionBox from './../GkQuestionBox/gkQuestionBox';
import AnimalQuestionBox from './../AnimalQuestionBox/animalQuestionBox';
import MathQuestionBox from './../MathQuestionBox/mathQuestionBox';
import FilmQuestionBox from './../FilmQuestionBox/filmQuestionBox';
import GeographyQuestionBox from './../GeographyQuestionBox/geographyQuestionBox';

function TitlePane() {
    return (
        <div class="columns has-text-centered">
            <div class="column is-4">
                <button class="button is-dark" id="home" onClick={homeButtonPress}>
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fas fa-home"></i>
                        </span>
                        <span>Home</span>
                    </span>
                </button>
            </div>
            <div class="box columns ">
                <div class="column">
                    <span class="icon-text">
                        <span>Categories</span>
                        <span class="icon">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </span>
                </div>
                <div class="column">
                    <div class="columns">
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
    );
}

function homeButtonPress(event) {
    window.location.reload();
    ReactDOM.render(
        <React.StrictMode>
          <HomePage/> 
        </React.StrictMode>,
        document.getElementById('root')
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

export default TitlePane;