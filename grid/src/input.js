import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import ReactDOM from 'react-dom/client';

function Inputs() {
  const[input,setInput] = useState("")

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]:value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${input}`);
    var detail = `The name you entered was: ${input}`;
    document.getElementById('root').innerHTML = detail;
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label> Enter Your Name : 
       <br/><input 
        type="text" 
        name='username'
        value={input.username || ""}
        onChange={handlechange}
        />
      </label><br/> 
      <label> Enter Your Age : 
       <br/><input 
        type="text" 
        name='age'
        value={input.age || ""}
        onChange={handlechange}
        />
      </label><br/>  
      <input type="submit"></input>
    </form>
    </>
  );
}

export default Inputs;
