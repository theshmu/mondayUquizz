import React, {useState} from "react";
import CountdownTimer from "./CountdownTimer";


const Questionaire = ({
                         handleNextQuestion,
                          showAnswers,
                          handleAnswer,
                          quizLength,
                          currentIndex,
                          score,
                          buttonBorder,
                          data: {question, correct_answer, answers },
}) => {


    return (
        <div className={'flex flex-col'}>
            <div className={'my-10'}>

                <h1 className={'text-white font-bold text-center text-2xl'}>Current Score: {score/quizLength*100}%</h1>
                <h1 className={'text-white font-bold text-center text-2xl'}>Progress: {currentIndex+1}/{quizLength}</h1>
            </div>
            <div className={'bg-white text-purple-800 p-10 rounded shadow-md'}>
                <h2 className='text-2xl'
                    dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className={'grid grid-cols-2 gap-6 mt-6'}>
                {answers.map((answer) => {
                    const textColor = showAnswers
                        ? answer === correct_answer
                            ? 'text-green-500'
                            : 'text-red-500'
                        : 'text-purple-700';
                    //const textColor = showAnswers ?
                        //'text-white' : 'text-purple-800';
                    return (
                        <button
                            className={
                                `bg-white ${textColor}  p-4 font-semibold rounded shadow hover:bg-blue-100`}
                            onClick={() => { handleAnswer(answer); } }
                            dangerouslySetInnerHTML={{__html: answer}}
                        />
                    );
                })}
            </div>
            {showAnswers && (
                <button
                    onClick={handleNextQuestion}
                    className={`ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6`}>
                    Next Question
                </button>
            )}

        </div>
    )
};



export default Questionaire;