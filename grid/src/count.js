import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((e) => e + 1)
    }
    const decrement = () => {
        setCount((e) => e - 1)
    }
    return(
        <>
        <button onClick={increment}>+</button>&nbsp;
        Count : {count}&nbsp;
        <button onClick={decrement}>-</button>
        </>
    );
}