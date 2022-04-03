import React, {useState, useEffect} from "react";
import { Questionaire } from './components'

const API_URL = 'https://opentdb.com/api.php?amount=100';
const quizLength = 10;


function App() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState((0));
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then((data) => {
                setQuestions(data.results);
                const questions = data.results.map((question) =>
                    ({
                       ...question, answers: [question.correct_answer, ...question.incorrect_answers]
                            .sort(() => Math.random() - 0.5)
                    }))

                setQuestions(questions);
            });
    }, []);

    const handleAnswer = (answer) => {
        if(!showAnswers) {
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1);
            }
        }
        setShowAnswers(true);

        // check for the answer
        // show another question
        // change score if correct
    };

    const handleNextQuestion = () => {
        setShowAnswers(false);

        setCurrentIndex(currentIndex + 1);
    }

  return questions.length > 0 ? (
      <div className='container'>
          {currentIndex >= quizLength ? (
      <h1 className={'text-3xl text-white font-bold'}>Game Over! Your score was: {score/quizLength*100}%</h1>
      ) : (
              <Questionaire data={questions[currentIndex]}
                            handleNextQuestion={handleNextQuestion}
                            handleAnswer={handleAnswer}
                            showAnswers={showAnswers}/>
          )}
      </div>
     ) : (
        <h2 className={'text-2xl text-white font-bold'}>Loading...</h2>

     );
}

export default App;
