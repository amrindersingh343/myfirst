import React, {useState,useEffect} from "react" 

const AutoContext= React.createContext({
    loginuser:'',
    logoutuser:'',
    login:(la)=>{},
    logout:(la)=>{},
    labelflag:'',
    appFlag:'',
    userinfo:[]

})
export const UserProvider=(props)=>{

    const [loginTime,setLoginTime]=useState('');
    const [logoutTime,setLogoutTime]=useState('');
    const [labelfl,setlabel]=useState(false);
    const [userinfo,setuserInfo]=useState([]);
    const[loginFlag,setloginFlag]=useState(false);
    const [appFl,setAppFlag]=useState(false);
    useEffect(()=>{
        
          if(loginFlag){
            console.log('contexteffe')
            setuserInfo({logedtime:loginTime,logedout:logoutTime})
            setAppFlag(true);
            
          }
    },[logoutTime])

    function loginHandler(loginuser){
        setAppFlag(false)
              setLoginTime(loginuser);
              
    }
    function logoutHandler(logoutuser){

             setLogoutTime(logoutuser);
             console.log(loginTime);
             setlabel(!labelfl);  
             setloginFlag(true)  
    }
    return(
        <AutoContext.Provider 
        value={{
            loginuser:loginTime,
            logoutuser:logoutTime,
            login:loginHandler,
            logout:logoutHandler,
            labelflag:labelfl,
            appFlag:appFl,
            userinfo:userinfo
        }}>
          {props.children}
        </AutoContext.Provider>
    );
}
export default AutoContext;