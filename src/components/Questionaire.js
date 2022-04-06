import React, {Component} from "react";
import CountdownTimer from "./CountdownTimer";
import AnswerButton from './AnswerButton';


export class Questionaire extends Component{
    constructor(props) {
        super(props);
        this.state = {
            timer:0,
            total:10,
            interval:null,
            tempIndex: props.currentIndex,
            border: 'border-0',
        };
    }

    startCountdown = () => {
        this.setState({interval: setInterval(this.countdown, 1000)});
    }
    countdown = () => {
        if (this.state.timer >= this.state.total) {
            this.props.setShowAnswers(true);
            clearInterval(this.state.interval);
            this.setState({timer:0});

        } else {
            this.setState({timer: this.state.timer + 1});
        }
    }

    componentDidMount() {
        this.setState({timer:0})
        this.startCountdown();
    }

    setNewQuestion(){
        this.setState({border: 'border-0',
                            clicked: false,});
    }

    render() {
        return (
            <div className={'flex flex-col'}>
                <div className={'my-10'}>
                    <CountdownTimer timer={this.state.timer} total={this.state.total}/>
                    <h1 className={'text-white font-bold text-center text-2xl'}>Current
                        Score: {Math.round(this.props.score / this.props.quizLength * 100)}%</h1>
                    <h1 className={'text-white font-bold text-center text-2xl'}>Progress: {this.props.currentIndex + 1}/{this.props.quizLength}</h1>
                </div>
                <div className={'bg-white text-purple-800 p-10 rounded shadow-md'}>
                    <h2 className='text-2xl'
                        dangerouslySetInnerHTML={{__html: this.props.data.question}}/>
                </div>
                <div className={'grid grid-cols-2 gap-6 mt-6'}>
                    {this.props.data.answers.map((answer, index) => {
                        const textColor = this.props.showAnswers
                            ? answer === this.props.data.correct_answer
                                ? 'text-green-500'
                                : 'text-red-500'
                            : 'text-purple-700';
                        //const textColor = showAnswers ?
                        //'text-white' : 'text-purple-800';
                        return (
                            //<button
                            //    key={index}
                            //    className={
                            //        `bg-white ${textColor} p-4 ${this.state.border} font-semibold rounded shadow hover:bg-blue-100`}
                            //    onClick={() => {
                            //        this.props.handleAnswer(answer);
                            //        clearInterval(this.state.interval);
                            //        //{this.setState({border: 'border-8'})};

                            //    }}
                            //    dangerouslySetInnerHTML={{__html: answer}}
                            ///>
                            <AnswerButton
                                index={index}
                                textColor={textColor}
                                handleAnswer={this.props.handleAnswer}
                                answer={answer}
                                interval={this.state.interval}
                                clicked={this.props.clicked}
                                setClicked={this.props.setClicked}
                                showAnswers={this.props.showAnswers}
                                setNewQuestion={this.setNewQuestion}
                                border={this.state.border}
                                buttonIndex={this.props.buttonIndex}
                                setButtonIndex={this.props.setButtonIndex}
                            />
                        );
                    })}
                </div>
                {this.props.showAnswers && (
                    <button
                        onClick={()=>{this.props.handleNextQuestion(); this.startCountdown(); this.setState({timer:0}); clearInterval(this.state.interval);}}
                        className={`ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6`}>
                        Next Question
                    </button>
                )}

            </div>
        )
    }
};


export default Questionaire;