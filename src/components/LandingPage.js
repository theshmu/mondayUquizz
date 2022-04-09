import React, { useState} from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import App from "../App";
import { Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

const LandingPage = () => {

    const [quizLength, setQuizLength] = useState(10);
    const [difficulty, setDifficulty] = useState('any')
    const [API_URL, setAPI_URL] = useState('https://opentdb.com/api.php?amount=50');

    const handleNewGame = (length, level) => {
        console.log(level);
        return (
            ReactDOM.createRoot(
                document.getElementById('root'))
                .render(<App quizLength={length} difficulty={level} API_URL={API_URL}/>
                )
        )
    }

    const changeSelection = (diff) => {
        setDifficulty(diff);
        console.log(difficulty)
        updateURL();
    }

    const updateURL = () => {
        setAPI_URL('https://opentdb.com/api.php?amount=100' + '&' + difficulty);
    }

    return (
        <div>
            <h1
                className='text-4xl text-white font-bold '>
                Welcome to the MondayU assignment Quiz!
            </h1>
            <div className='flex text-white rounded-circle text-center my-10'>
                <h2 className={'font-semibold'}>Please select how many questions you'd like to play:</h2>
                <Slider className={'mx-4 my-4'}
                min={1}
                max={50}
                step={1}
                value={quizLength}
                startPoint={10}
                onChange={
                    value => {
                        setQuizLength(value);
                    }
                }
                />
                <h5 className={'my-2.5'}>{quizLength}</h5>
            </div>
            <div>
                <label for={'difficulty'} className={'text-white font-semibold mx-4'}>Please select a difficulty:</label>
                <select
                    name={'difficulty'}
                    className={'rounded shadow-2xl'}
                    onChange={diff => changeSelection(diff.target.value)} value={difficulty}>
                    <option value={'any'} className={'font-semibold'}>Any Difficulty</option>
                    <option value={'easy'} className={'font-semibold'}>Easy</option>
                    <option value={'medium'} className={'font-semibold'}>Medium</option>
                    <option value={'hard'} className={'font-semibold'}>Hard</option>
                </select>
            </div>
            <p className={'my-32'}></p>
            <div className={'text-center my-4'}>
                <button
                    className={'hover:bg-blue-800 hover:shadow-xl rounded bg-blue-400 w-5/12 mx-auto text-white font-semibold p-5'}
                    onClick={() => handleNewGame(quizLength, difficulty, API_URL)}
                >
                    New Game
                </button>
            </div>
            <div>
                <h6 className={'text-center pt-16 text-white font-semibold'}>Created by Shmuel Cohen</h6>
            </div>
        </div>
    )
}

export default LandingPage;