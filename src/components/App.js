
import React from "react";
import {useState} from 'react'
import './../styles/App.css';

const App = () => {
  const [input,setInput]=useState('')
  let handle=(e)=>{
    setInput(e.target.value);
  }
  return (
    <div>
        <div className="parent">
          <h1>Parent Component</h1>
          <p>{input}</p>

        </div>
        <div className="child">
          <h1>Child Component</h1>
          <input type="text" onChange={handle} value={input}/>
        </div>
    </div>
  )
}

export default App
