import axios from 'axios/dist/axios';
import { useEffect, useState } from 'react';

function GkQuestionBox() {

  const [question, setQuestion] = useState('');

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios({
        url: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy',
        method: 'get',
      });
      let questionFix = result.data.results[0].question;
      if (questionFix.search("&quot;") !== -1 || questionFix.search("&#039;") !== -1) {
        questionFix = result.data.results[0].question.replace(/&quot;/g, "\"");
        questionFix = result.data.results[0].question.replace(/&#039;/g, "\'");
      }
      console.log(result);
      setQuestion(questionFix);
    }
    fetchData();
  }, []);

  return (
    <div class="columns is-centered">
      <div class="card column is-half">
        <header class="card-header">
          <p class="card-header-title is-centered">
            {question}
          </p>
        </header>
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder Image"></img>
          </figure>
        </div>

        <div class="card-content">
          <div class="content">
            content
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
export default GkQuestionBox;
