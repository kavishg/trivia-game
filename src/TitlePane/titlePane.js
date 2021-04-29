
function TitlePane() {
    return (
        <div class="columns has-text-centered">
            <div class="column is-2">
                <button class="button is-dark">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fas fa-home"></i>
                        </span>
                        <span>Home</span>
                    </span>
                </button>
            </div>
            <div class="box column columns is-offset-6">
                <div class="column">
                    <span class="icon-text">
                        <span>Difficulty Level</span>
                        <span class="icon">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </span>
                </div>
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
    );
}

export default TitlePane;