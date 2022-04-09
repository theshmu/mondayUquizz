import React, {Component} from "react";
import {Button} from "react-bootstrap";

export class AnswerButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
                onClick={() => {
                    if(!this.props.clicked) {
                        this.props.setButtonIndex(this.props.index);
                    }
                    this.props.handleAnswer(this.props.answer);
                    clearInterval(this.props.interval);
                }}
                className={this.props.index === this.props.buttonIndex ?
                    `bg-white ${this.props.textColor} p-4 border-4 border-black font-semibold rounded hover:bg-blue-100`
                : `bg-white ${this.props.textColor} p-4 border-0 font-semibold rounded hover:bg-blue-100`}
                dangerouslySetInnerHTML={{__html: this.props.answer}}/>
        );
    }
}

export default AnswerButton;