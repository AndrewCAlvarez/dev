import React, {useState} from 'react';

function ExpenseData(props){

    return(
        <div>
            <p>{props.title} | {props.cost} | {props.category}</p>
        </div>
    )
}

export default ExpenseData;