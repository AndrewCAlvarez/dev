import react from 'react';

let todaysDate = new Date().toLocaleDateString();
class TodaysDate extends react.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return <h1>{todaysDate}</h1>
    }
}

export default TodaysDate;