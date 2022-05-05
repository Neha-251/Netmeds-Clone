
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext=createContext();
export const UserContextProvider=({children})=>{
    const [gotoHome,setGotoHome]=useState("no")
    const [alldetails,setAllDetails]=useState(false)
    const [details,setDetails]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        number:""
    }); 
    const [valid,setValid]=useState("");
    const [num,setNum]=useState("")
    
    useEffect(()=>{
        if(alldetails==true){
            addData(details);
        }
    })
    const handleNumber=(value)=>{
       
        console.log("value",value)
        
        if(value.length==0){
        setValid("empty");
        }
        else if(value.length>0 && value.length<10){
        setValid("invalid");
        }
        else{
            setValid("valid");
            setNum(value)
        
        }
  }
    const handleDetails=(data)=>{
        if(num=="" || data.firstName=="" || data.lastName=="" || data.email==""){
            alert ("Fill all the data")
        }
        else{
            setDetails({
                ...details,
                firstName:data.firstName,
                lastName:data.lastName,
                email:data.email,
                password:1234,
                number:num
            })
            setAllDetails(true)
        }
    }
    const addData=(details)=>{
        console.log(details)
        
        fetch("https://netmedback.herokuapp.com/register",{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(details)
       }).then(()=>setGotoHome("yes"))
      
    }
    
    return <UserContext.Provider value={{handleNumber,valid,handleDetails,alldetails,gotoHome}}>{children}</UserContext.Provider>
}