import React from "react";

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
                <button className={'bg-white p-4 border-0 font-semibold rounded hover:bg-blue-100'}
                    id="button" onClick={this.props.startAnimation}>Start Confetti</button>
            </div>
        )
    }
}

export default ConfettiButton;