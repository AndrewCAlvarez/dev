import react from 'react';


class Clock extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            time : new Date(),
        }

    }

    tick(){
        window.alert("TICK");
    }

    render(){
        this.tick();
        return <div>
            <h1>{this.state.time.toLocaleTimeString()}</h1>
            <h2>tick tock</h2>
        </div>;
    }
}

export default Clock;