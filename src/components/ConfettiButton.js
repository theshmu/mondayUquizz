import React from "react";

/*
A button that autoclicks the 'start confetti' button upon load so by default confetti is on
 */

export class ConfettiButton extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.getElementById("button").click()
    }

    checkClick() {
        console.log("clicked!")
    }

    render() {
        return (
            <div>
                <button className={'bg-white text-xs p-1 py-1 border-0 font-semibold rounded hover:bg-blue-100'}
                    id="button" onClick={this.props.startAnimation}>Start Confetti</button>
            </div>
        )
    }
}

export default ConfettiButton;