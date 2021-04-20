import react from 'react';

/*Create a timer that counts down until either 
the user presses the button or time runs out. */

class Buzzer extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            timeLimit : 5,
            isButtonPressed : false,
            IsGameOver : false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.TimerID = setInterval(() => 
            this.tick()
        , 1000);
    }

    componentWillUnmount(){
        clearInterval(this.TimerID);
    }

    /* Count down until zero, and freeze the coundown 
     if the button is pressed.*/
    Countdown(){
        if(this.state.isButtonPressed){
            //Do nothing. Stop counting down.
        }
        else if(this.state.timeLimit == 0){
            this.setState({
                timeLimit : 0
            })
        }
        else{
            this.setState({
                timeLimit : this.state.timeLimit - 1,
            })
        }
    }

    /* If the button is pressed before time runs out, or time runs out, the game is over.*/
    CheckIfGameIsOver(){
        let isButtonPressed = this.state.isButtonPressed;
        let timeLimit = this.state.timeLimit;

        if(isButtonPressed && timeLimit > 0){
            this.setState({
                IsGameOver : true
            })
        }
        if(timeLimit == 0){
            this.setState({
                IsGameOver : true
            })
        }
    }
    
    tick(){
        this.Countdown();
        this.CheckIfGameIsOver();
    }

    // Toggles the button press
    handleClick(){
        this.setState({
            isButtonPressed : !this.state.isButtonPressed
        })
    }

    render(){
        let isGameOver = this.state.IsGameOver;
        let isButtonPressed = this.state.isButtonPressed;


        if(isGameOver){
            return (
                <div>
                <h1>Well done! Try again?</h1>
                <button onClick={this.handleClick}>Play Again</button>
                <p>------------------------------------</p>
            </div>
            );
        }
        else if(this.state.timeLimit == 0){
            return (
                <div>
                <h1>Time's up! Try again?</h1>
                <button onClick={this.handleClick}>Try Again</button>
                <p>------------------------------------</p>
            </div>
            );
        }
        else{
            return (
                <div>
                    <h1>Press the button before time runs out.</h1>
                    <h2>{this.state.timeLimit} seconds left.</h2>
                    <button onClick={this.handleClick}>Press</button>
                    <p>------------------------------------</p>
                </div>
            );
        }
        
    }
}

export default Buzzer;