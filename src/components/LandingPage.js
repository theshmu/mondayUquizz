import React, {Component} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import App from "../App";
import ReactDOM from "react-dom/client";

/*
Landingpage.js allows selection of quiz parameters (amount of questions, difficulty and category) and then builds the
api url to be passed to App.js where the questions are fetched.
*/

class LandingPage extends Component{
    constructor() {
        super();
        this.state = {
            quizLength: 10,
            difficulty: '',
            category: '',
            API_URL: 'https://opentdb.com/api.php?amount=',
        }
    }

    componentDidMount() {
        this.setState({API_URL: this.state.API_URL + '10'})
    }

    handleNewGame = (length, level, api_URL) => {
        return (
            ReactDOM.createRoot(
                document.getElementById('root'))
                .render(<App quizLength={length} difficulty={level} API_URL={api_URL}/>
                )
        )
    }
    changeQuizLength = (event) => {
        const length = event;
        this.setState({quizLength: length}, () => {
           this.setState({API_URL: 'https://opentdb.com/api.php?amount=' + this.state.quizLength
                   + this.state.category + this.state.difficulty});
        });
    };


    changeDifficultySelection = (event) => {
        const new_diff = event.target.value;
        this.setState(
            {difficulty: new_diff},() => {
                this.setState({API_URL: 'https://opentdb.com/api.php?amount=' + this.state.quizLength
                        + this.state.category + this.state.difficulty});
            });
    }
    changeCategorySelection = (event) => {
        const new_cat = event.target.value;
        this.setState(
            {category: new_cat},() => {
                this.setState({API_URL: 'https://opentdb.com/api.php?amount=' + this.state.quizLength
                        + this.state.category + this.state.difficulty});
            });
    }

    render() {
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
                            value={this.state.quizLength}
                            startPoint={10}
                            onChange={
                                (event) => {
                                    this.changeQuizLength(event);
                                }
                            }
                    />
                    <h5 className={'my-2.5'}>{this.state.quizLength}</h5>
                </div>
                <div>
                    <label htmlFor={'difficulty'} className={'text-white font-semibold mx-4'}>Please select a
                        difficulty:</label>
                    <select
                        name={'difficulty'}
                        className={'rounded shadow-2xl p-2'}
                        id={'diff-dd'}
                        defaultValue={this.state.difficulty}
                        onChange={(event) => this.changeDifficultySelection(event)}>
                        <option value={''} className={'font-semibold'}>Any Difficulty</option>
                        <option value={'&difficulty=easy'} className={'font-semibold'}>Easy</option>
                        <option value={'&difficulty=medium'} className={'font-semibold'}>Medium</option>
                        <option value={'&difficulty=hard'} className={'font-semibold'}>Hard</option>
                    </select>
                </div>
                <div className={'my-4'}>
                    <label htmlFor={'category'} className={'text-white font-semibold mx-4'}>PLease select a
                        category:</label>
                    <select
                        name={'category'}
                        className={'rounded shadow-2xl p-2'}
                        id={'cat-dd'}
                        defaultValue={this.state.category}
                        onChange={(event => this.changeCategorySelection(event))}
                    >
                        <option value={''} className={'font-semibold'}>Any Category</option>
                        <option value={'&category=9'} className={'font-semibold'}>General Knowledge</option>
                        <option value={'&category=10'} className={'font-semibold'}>Books</option>
                        <option value={'&category=11'} className={'font-semibold'}>Film</option>
                        <option value={'&category=12'} className={'font-semibold'}>Music</option>
                        <option value={'&category=13'} className={'font-semibold'}>Musicals and Theaters</option>
                        <option value={'&category=14'} className={'font-semibold'}>Television</option>
                        <option value={'&category=15'} className={'font-semibold'}>Video Games</option>
                        <option value={'&category=16'} className={'font-semibold'}>Board Games</option>
                        <option value={'&category=17'} className={'font-semibold'}>Science and Nature</option>
                        <option value={'&category=18'} className={'font-semibold'}>Science: Computers</option>
                        <option value={'&category=19'} className={'font-semibold'}>Science: Mathematics</option>
                        <option value={'&category=20'} className={'font-semibold'}>Mythology</option>
                        <option value={'&category=21'} className={'font-semibold'}>Sports</option>
                        <option value={'&category=22'} className={'font-semibold'}>Geography</option>
                        <option value={'&category=23'} className={'font-semibold'}>History</option>
                        <option value={'&category=24'} className={'font-semibold'}>Politics</option>
                        <option value={'&category=25'} className={'font-semibold'}>Art</option>
                        <option value={'&category=26'} className={'font-semibold'}>Celebrities</option>
                        <option value={'&category=27'} className={'font-semibold'}>Animals</option>
                        <option value={'&category=28'} className={'font-semibold'}>Vehicles</option>
                        <option value={'&category=29'} className={'font-semibold'}>Comics</option>
                        <option value={'&category=30'} className={'font-semibold'}>Gadgets</option>
                        <option value={'&category=31'} className={'font-semibold'}>Japanese Anime and Manga</option>
                        <option value={'&category=32'} className={'font-semibold'}>Cartoon and Animations</option>
                    </select>
                </div>
                <p className={'my-32'}></p>
                <div className={'text-center my-4'}>
                    <button
                        className={'hover:bg-blue-800 hover:shadow-xl rounded bg-blue-400 w-5/12 mx-auto text-white font-semibold p-5'}
                        onClick={() => this.handleNewGame(this.state.quizLength, this.state.difficulty, this.state.API_URL)}
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
}

export default LandingPage;