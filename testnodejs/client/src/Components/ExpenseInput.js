import React, {useState} from 'react';

function ExpenseInput(){
    const [expense, setExpense] = useState({
        title: "",
        cost: 0,
        category: "Rent/Utilities"
    });

    const url = 'http://localhost:9000/testAPI';

    function setTitle(event){
        setExpense({
            title: event.target.value,
            cost: expense.cost,
            category: expense.category
        });
    }

    function setCost(event){
        setExpense({
            title: expense.title,
            cost: event.target.value,
            category: expense.category
        });
    }

    function setCategory(event){
        console.log(event.target.value);
        setExpense({
            title: expense.title,
            cost: expense.cost,
            category: event.target.value
        });
    }

    function postExpense(){
        fetch(url + '/addExpense',  {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(expense)
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success: ', data);
          })
          .catch(error => {
            console.log('Error: ', error);
          })
    }

    return(
        <div>
            <h2>New Expense</h2>
            <p>Title: <input onChange={setTitle}></input></p>
            <p>Cost: <input onChange={setCost}></input></p>
            <p>Category: 
                <select onChange={setCategory}>
                    <option>Rent/Utilities</option>
                    <option>Fun</option>
                    <option>Groceries</option>
                    <option>Dining</option>
                    <option>Other</option>
                </select>
            </p>
            <button onClick={postExpense}>Add</button>
        </div>
    )
}

export default ExpenseInput;