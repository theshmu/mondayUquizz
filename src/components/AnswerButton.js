import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

export class AnswerButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
                //key={this.props.key}
                onClick={() => {
                    console.log(this.props.buttonIndex);
                    if(!this.props.clicked) {
                        this.props.setButtonIndex(this.props.index);
                    }
                    this.props.handleAnswer(this.props.answer);
                    clearInterval(this.props.interval);
                    console.log(this.props.buttonIndex);
                }}
                className={this.props.index === this.props.buttonIndex ?
                    `bg-white ${this.props.textColor} p-4 border-8 border-black font-semibold rounded hover:bg-blue-100`
                : `bg-white ${this.props.textColor} p-4 border-0 font-semibold rounded hover:bg-blue-100`}
                dangerouslySetInnerHTML={{__html: this.props.answer}}/>
        );
    }
}

export default AnswerButton;