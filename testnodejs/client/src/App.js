import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  //this is the state hook imported with useState for the API calls
  const [APIRes, setAPIRes] = useState({})

  useEffect(()=>{
    const url = 'http://localhost:9000/testAPI';

    function fetchData(){
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if(APIRes === data){
          // do nothing
        }else{
          setAPIRes(data)
        }
      }).catch((e)=> {
        console.log("Error: ", e);
      })
    }
    // There's a memory leak in useEffect that needs to be addressed.
    setInterval(() => {
      fetchData();
    }, 10000);
    
});
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{APIRes.title}</h1>
        <p>Income : {APIRes.income}</p>
        <p>Expenses : {APIRes.expenses}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
