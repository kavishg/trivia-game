import readyImage from './../images/areyouready.jpeg';

function HomePage() {
    return (
        <section class="section">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-half">
                        <div class="box has-text-centered">
                            <h1 class="title is-1">Welcome to Trivia!</h1>
                            <h3 class="subtitle is-4">
                                Choose a difficulty level and answer as mnay as you can!
                                If you answer at least 10 questions from each difficulty level, you will win the game!
                            </h3>
                            <figure class="image is-3by2">
                                <img src={readyImage}/>
                            </figure>
                            <br></br>
                            <h4 class="title is-4">Choose your difficulty level:</h4>
                            <div class="columns">
                                <div class="column">
                                    <div class="columns is-offset-6">
                                        <div class="column">
                                            <button class="button is-dark">
                                                Easy
                                            </button>
                                        </div>
                                        <div class="column">
                                            <button class="button is-dark">
                                                Medium
                                            </button>
                                        </div>
                                        <div class="column">
                                            <button class="button is-dark">
                                                Hard
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

export default HomePage;