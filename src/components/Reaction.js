// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
function TestStates (){
    const [count, setCount] = useState(0);
    // const [loaded, setLoaded] = useState (false);

    // useEffect(() => {
    //     alert('hello')
    // })
   const  [fruit, setFruit]= useState('banana');
   
   const [inputValue, setInputValue] = useState('ELizabeth');
   let changeValue = (event)=>{
    const newValue = event.target.value;
    setInputValue(newValue);
    };
   return(
        <div>
            <h2>Basic Hooks</h2>
            <p>{count}</p>
        <button onClick={ ()=>setCount(count+1) } >
            counter
        </button>
        <p>My best fruit is {fruit}</p>
        <button onClick={()=>setFruit('Apple') }>{fruit}fruit</button>
        <div>
            <p>{inputValue}</p>
            <input placeholder="enter value" onChange={changeValue} >
            
            </input>
        </div>
        </div>
    );
}
export default TestStates;