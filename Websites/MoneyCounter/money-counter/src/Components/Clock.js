import react from 'react';



class Clock extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            time : null,
        }
    }

    componentDidMount(){
        this.TimerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.TimerID);
    }

    tick(){
        let time = new Date();
        this.setState({
            time : time.toTimeString() ,
        })
    }

    render(){
        return (
        <div>
            <h1>{this.state.time}</h1>
        </div>
        );
        
    }
}

export default Clock;