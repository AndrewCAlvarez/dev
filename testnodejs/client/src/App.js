import './App.css';
import React, {useEffect, useState} from 'react';
import ExpenseInput from './Components/ExpenseInput';
import ExpenseData from './Components/ExpenseData';

function App() {
  //this is the state hook imported with useState for the API calls
  const [APIRes, setAPIRes] = useState({
    title: "",
    cost: "",
    category: ""
  })
  const [userInput, setUserInput] = useState({
    data: "Default"
  });
  const [inputExpense, setInputExpense] = useState(false);
  const url = 'http://localhost:9000/testAPI';

  async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    setAPIRes(data);
  }

  async function postData(){
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success: ', data);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
    fetchData(url);
  }

  async function deleteData(){
      fetch(url +'/delete', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: ""
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success: ', data);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
      fetchData(url);
  }
  
  useEffect(()=>{

    
    // There's a memory leak in useEffect that needs to be addressed.
    // Update: Added brackets. The brackets mean do this only once.
    fetchData(url);
    
}, []);

function updateInput(event){
    setUserInput({data:event.target.value});
}

function setInputExpenseBool(){
  setInputExpense(!inputExpense);
  fetchData(url);
}

if(inputExpense === true){
  return (
    <div className="App">
      <header className="App-header">
        <h1>{APIRes.title}</h1>
        {/* <h2>Button text: {userInput.data}</h2>
        <input value={userInput.data} onChange={updateInput}></input>
        <button onClick={postData}>Send Input</button>
        <button onClick={deleteData}>Delete Title</button> */}
        <ExpenseInput />
        <button onClick={setInputExpenseBool}>Return</button>
      </header>
    </div>
  );
}
else{
  return (
    <div className="App">
      <header className="App-header">
        <h1>{APIRes.title}</h1>
        <ExpenseData data={APIRes}/>
        {/* <h2>Button text: {userInput.data}</h2>
        <input value={userInput.data} onChange={updateInput}></input>
        <button onClick={postData}>Send Input</button>
        <button onClick={deleteData}>Delete Title</button> */}
        <button onClick={setInputExpenseBool}>Add Expense</button>
      </header>
    </div>
  );
}




}

export default App;
