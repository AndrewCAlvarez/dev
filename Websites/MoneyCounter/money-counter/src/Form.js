import React from "react";



class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }));
        window.alert(props);
    }
    
    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this, "properties")}>{this.state.isToggleOn ? 'ON':'OFF'}</button>
            </div>
        );
    }

    
}

export default Form;