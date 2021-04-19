import react from 'react';

function UserGreeting(){
    return (<h1>Welcome back!</h1>);
}

function GuestGreeting(){
    return (<h1>Please sign up.</h1>);
}


class Greeting extends react.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.isLoggedIn == true){
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
}

export default Greeting;