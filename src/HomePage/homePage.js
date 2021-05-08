import React from 'react';
import ReactDOM from 'react-dom';
import readyImage from './../images/areyouready.jpeg';
import GkPage from '../GkPage/gkPage';
import AnimalPage from '../AnimalPage/animalPage';
import MathPage from '../MathPage/mathPage';
import FilmPage from '../FilmPage/filmPage';
import GeographyPage from '../GeographyPage/geographyPage';
import './homePage.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../theme';
import { useDarkMode } from './../useDarkMode';
import { GlobalStyles } from './../global';
import LightDarkToggle from './../LightDarkToggle/lightDarkToggle';

function HomePage() {

    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
            <section class="section">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-7">
                            <div class="box has-text-centered">
                                <h1 class="title is-1">Welcome to Trivia!</h1>
                                <h3 class="subtitle is-4">
                                    Choose a category and answer the questions in it. 
                                    If you finish answering 10 questions in any category, you win the game! 
                                    Try and get a perfect score in all the categories! If you get tired of trivia, 
                                    and feel like learning something new, check out the random fun fact generator, or if you're 
                                    in the mood for a silly joke check out the joke generator for some good laughs.
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
                    <div class="topright">
                        <LightDarkToggle onChange={toggleTheme} />
                    </div>
                </div>
            </section>
    </ThemeProvider>
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

export default HomePage;