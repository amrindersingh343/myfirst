import React, { useContext, useState } from "react";
import AutoContext from "./context";
import './App.css';

 const Log = props=>{
     const [toggleButton,setButton]=useState(true);
    
     const cnt=useContext(AutoContext)
     const userArr=[];
    
     
    function loginHandler(){
         cnt.login(props.loglabel)
         setButton(false);


    }
    function logoutHandler(){
        cnt.logout(props.loglabel)
         setButton(true);
       
                    }
return(
    <>
    <button className="button" disabled={!toggleButton} onClick={loginHandler}>LogIn</button>
    <button className="button" onClick={logoutHandler} disabled={toggleButton}>LogOut</button>
    
    </>
);
}
export default Log;