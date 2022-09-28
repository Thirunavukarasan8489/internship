import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import UserContext from './context';
import { useContext } from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
  const ctx = useContext(UserContext)
  const[name,setName] = useState("")
  const[password, setPassword] = useState("")
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // onSubmit: (values) => {
    //   if (!values.name);
    //   if (!values.email);
    //   if (!values.password);
      alert(`The name you entered was: ${name} `);

      ctx.users.push({
        name : name,
        // email : email,
        password : password
      });
    // }
    // var data = `The Name is : ${name}<br/> The Passwor is : ${password}`
    // document.getElementById('root').innerHTML = data;
  }

  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label> Enter Your Name : 
       <br/><input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </label><br/>  
      <label> Enter Password : 
       <br/><input 
        type="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </label><br/>  
      <input type="submit"></input>
    </form>
    </>
  );
}

export default Form;
