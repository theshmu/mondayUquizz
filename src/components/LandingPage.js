import React, { useState} from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import App from "../App";
import { Route } from "react-router-dom";
import ReactDOM from "react-dom/client";


const handleNewGame = (value) => {
    console.log('click');
    return (
        ReactDOM.createRoot(
            document.getElementById('root'))
            .render(<App quizLength={value}/>
            )
    )
}

const LandingPage = () => {

    const [value, setValue] = useState(10);


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
                max={100}
                step={1}
                value={value}
                startPoint={10}
                onChange={
                    value => {
                        setValue(value);
                    }
                }
                />
                <h5 className={'my-2.5'}>{value}</h5>
            </div>
            <div className={'text-center'}>
                <button
                    className={'hover:bg-blue-800 hover:shadow-xl rounded bg-blue-400 w-5/12 mx-auto text-white font-semibold'}
                    onClick={() => handleNewGame(value)}
                >
                    New Game
                </button>
            </div>
        </div>
    )
}

export default LandingPage;