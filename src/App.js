import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import Log from './login';

import { useContext,useEffect, useState } from 'react';
import AutoContext from './context';
const dummy=[];
function App() {
  const [labelFlag,setLabelFlag]=useState(false);
 
 const cnt=useContext(AutoContext)
  console.log('app');
  
    
  useEffect(()=>{
    if(cnt.appFlag){

        dummy.push({logintime:cnt.userinfo.logedtime,logouttime:cnt.userinfo.logedout})
       console.log(dummy)
       setLabelFlag(true);
         
       
    }
  },[cnt.appFlag])
  
               
  return (
<div className='st'>
<Clock></Clock>
{ labelFlag  && <ul>{dummy.map((value,ind,arr)=>{
  return <li key={ind}>{arr[ind].logintime +""+arr[ind].logouttime }</li>
})}</ul>}

</div>
    
 
  );
}

export default App;
