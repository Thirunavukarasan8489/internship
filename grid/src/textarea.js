import './App.css';
import { useState } from "react"

function Text(){
    const [textarea, setTextarea] = useState(" This is textarea ");
    const handleSubmit = (event) => {
        setTextarea(event.target.value)
    }
    return(
        <form>
            <textarea value={textarea} onChange={handleSubmit}></textarea>
        </form>
    );
}
export default Text;