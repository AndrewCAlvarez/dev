import react from 'react';

class CountUP extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            time : 0,
        }   
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000);
    }

    myFunction(){
        window.alert("FUNCTION WORKED");
    }

    render(){
        return (
            <div>
                {this.state.time}
            </div>
        )}
}

export default CountUP;