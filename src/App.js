import React, {useState, useEffect} from "react";
import { Questionaire } from './components'
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";
import Fireworks from "./components/Fireworks";
import Correct from './resources/Correct.mp3';
import Incorrect from './resources/Incorrect.mp3';

const correct = new Audio(Correct);
const incorrect = new Audio(Incorrect);
const default_API = 'https://opentdb.com/api.php?amount=50';

/*
App.js uses the api url from LandingPage.js to fetch the questions, then passes to questions and answers to
Questionaire.js where they displayed to the user. additionally, App.js handles the score and button logic.
*/

const App = ({ quizLength, API_URL } ) => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState((0));
    const [showAnswers, setShowAnswers] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonIndex, setButtonIndex] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then((data) => {
                if(data.response_code === 0){
                setQuestions(data.results);
                const questions = data.results.map((question) =>
                    ({
                       ...question, answers: [question.correct_answer, ...question.incorrect_answers]
                            .sort(() => Math.random() - 0.5)
                    }))

                setQuestions(questions);
            } else {
                 fetch(default_API).then(res => res.json()).then((data) => {
                     setQuestions(data.results);
                     const questions = data.results.map((question) =>
                         ({
                             ...question, answers: [question.correct_answer, ...question.incorrect_answers]
                                 .sort(() => Math.random() - 0.5)
                         }))

                     setQuestions(questions);
                 })
                }});

    }, []);




    const handleAnswer = (answer) => {
        if(!showAnswers) {
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1);
                correct.play();
            } else {
                incorrect.play();
            }
        }
        setShowAnswers(true);
        setClicked(true);

        // check for the answer
        // show another question
        // change score if correct
    };


    const handleNextQuestion = () => {
        //setTimer(0);
        setShowAnswers(false);
        setCurrentIndex(currentIndex + 1);
        //startCountdown();
        setButtonIndex(null);
        setClicked(false);
    }

    const handleRestart = () => {
        return(
            ReactDOM.createRoot(
                document.getElementById('root'))
                .render(<LandingPage />
                )
        );
    }

  return questions.length > 0 ? (
      <div className='container'>
          {currentIndex >= quizLength ? (
              <div className={'text-center'}>
                  <h1 className={'text-3xl text-white font-bold'}>Game Over! Your score was: {Math.round(score/quizLength*100)}%</h1>
                  <button
                  className={'hover:bg-blue-800 rounded bg-blue-400 text-white font-semibold rounded w-1/2 my-10 p-4'}
                  onClick={
                      () => handleRestart()
                  }
                  >
                      New Game
                  </button>
                  <div className={'align-baseline pt-40'}>
                      <Fireworks />
                  </div>

              </div>

      ) : (
          <div>
              <Questionaire data={questions[currentIndex]}
                            handleNextQuestion={handleNextQuestion}
                            handleAnswer={handleAnswer}
                            quizLength={quizLength}
                            score={score}
                            currentIndex={currentIndex}
                            showAnswers={showAnswers}
                            setShowAnswers={setShowAnswers}
                            clicked={clicked}
                            setClicked={setClicked}
                            buttonIndex={buttonIndex}
                            setButtonIndex={setButtonIndex}
              />


              </div>
          )}
      </div>
     ) : (
        <h2 className={'text-2xl text-white font-bold'}>Loading...</h2>

     );
}

export default App;
