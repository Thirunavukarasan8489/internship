import './App.css';
import { useState } from "react"

function Car(){
    const [mycar, setMycar] = useState("Select");

    const handleSubmit = (event) => {
        setMycar(event.target.value)
    }
    return(
       <select value={mycar} onChange={handleSubmit}>
        <option value="Select">--Select</option>
         <option value="Volvo">Volvo</option>
         <option value="Fiat">Fiat</option>
         <option value="BMW">BMW</option>
         <option value="Ford">Ford</option>
         <option value="Renult">Renult</option>
         <option value="Tata">Tata</option>
       </select>
    );
}
export default Car;