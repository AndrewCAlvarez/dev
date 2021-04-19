import React from "react";


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:0,
            hourlyRate: 40.0,
            moneyEarned: 0,
        };
    }

    componentDidMount(){
        this.TimerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.TimerID);
    }

    tick(){
        this.setState({
            time: this.state.time + 1,
            moneyEarned: ((this.state.hourlyRate/60)/60) * this.state.time,
        })
    }

    render(){
        return (
            <div>
                <h1>Seconds: {this.state.time}</h1>
                <h1>Money Earned: ${this.state.moneyEarned.toFixed(2) }</h1>
            </div>
        );
    }
}


export default Counter