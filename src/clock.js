import { useEffect, useState } from "react";
import Log from "./login";
import './App.css';

function Clock() {
    
    const [timer,setTimer]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
    let secinterval=    setInterval(() => {
            setTimer(new Date().toLocaleTimeString());
        }, 1000);
        return ()=>{clearInterval(secinterval)}
    },[])
//    let secinterval= setInterval(()=>{
//         setTimer(new Date().toLocaleTimeString());
//     },1000)
 
    
    return (
        <div>
         <label className="lab" >{timer}</label><br></br>
      <Log loglabel={timer}></Log>
        </div>
     
    );
  }
  
  export default Clock;