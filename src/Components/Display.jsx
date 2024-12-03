import React from "react";
import { useState } from "react";
const Display = () => {
    const [show, setShow]=useState("true");
    const [visible, setVisible]= useState("false");
    const toggleVisibility=()=>{
        setVisible(!visible);
    }
  return (
    <div className="bg-red-400" >
      <button onClick={()=>setShow((show)=>!show

      )}>hide / show</button>
      {show ? <h1>welcome to react</h1> : null }
    <button onClick={toggleVisibility}>{visible ? null : <h1>hide me</h1> } click here to show me </button>
    </div>
  )
}

export default Display
