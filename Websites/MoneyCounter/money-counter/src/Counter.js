



function Counter(props){
    let dollarsPerSecond = (props.state.dollarsPerHour/60) / 60;
    let output = dollarsPerSecond * props.state.time;
    return (
        <div>
            <h1>Seconds: {props.state.time}</h1>
            <h1>Money Earned: { output.toPrecision(4) }</h1>
        </div>
    );
}

export default Counter