import './questionBox.css';

function QuestionBox() {
  return (
    <div class="columns is-centered">
      <div class="card column is-half">
        <header class="card-header">
          <p class="card-header-title is-centered">
            Card header
          </p>
        </header>
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
          </figure>
        </div>

        <div class="card-content">
          <div class="content">
            Hi this is the card content
          </div>
        </div>

        <footer class="card-footer">
            <button class="button card-footer-item">
              <span class="icon-text">
                <span class="icon">
                    <i class="fas fa-arrow-left"></i>
                </span>
                <span>Previous</span>
              </span>
            </button>
          <button class="button card-footer-item">
            <span class="icon-text">
              <span>Next</span>
                <span class="icon">
                  <i class="fas fa-arrow-right"></i>
                </span>
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default QuestionBox;
