import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './../HomePage/homePage';
import GkPage from '../GkPage/gkPage';
import AnimalPage from '../AnimalPage/animalPage';
import MathPage from '../MathPage/mathPage';
import FilmPage from '../FilmPage/filmPage';
import GeographyPage from '../GeographyPage/geographyPage';

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
                        <h3 class="title is-4">Categories</h3>
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
                <GkPage />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "animals") {
        ReactDOM.render(
            <React.StrictMode>
                <AnimalPage />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "mathematics") {
        ReactDOM.render(
            <React.StrictMode>
                <MathPage />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "film") {
        ReactDOM.render(
            <React.StrictMode>
                <FilmPage />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    } else if (buttonType === "geography") {
        ReactDOM.render(
            <React.StrictMode>
                <GeographyPage />
                <br></br>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
}

export default TitlePane;