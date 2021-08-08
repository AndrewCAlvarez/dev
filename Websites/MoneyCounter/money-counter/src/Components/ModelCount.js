import react from 'react';

class ModelCount extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            something: "something",
        }
    }

    render(){
        return (
            <div>
                <form>
                    <input type='text' placeholder='Ballistics Skills'></input>
                </form>
            </div>
            
        )
    }
}

export default ModelCount;