import react from 'react';

class CSSComponent extends react.Component{
    /* This component is a card with a title and paragraph text. 
    The purpose is to better understand how CSS works with react.js */

    render(){
        return (
            <div class='CSSComponentCard'>
                <h1 class='CSSComponentTitle'>Title</h1>
                <p class='CSSComponentText'>This is some paragraph text. Isn't this exciting!?</p>
            </div>
        )
    }
}

export default CSSComponent;