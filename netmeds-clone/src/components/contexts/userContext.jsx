
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext=createContext();
export const UserContextProvider=({children})=>{
    const [gotoHome,setGotoHome]=useState("no")
    const [alldetails,setAllDetails]=useState(false)
    const [singleperson,setSingleperson]=useState("")
    console.log(singleperson)
    const [details,setDetails]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        number:""
    }); 
    useEffect(()=>{
        if(alldetails==true){
            addData(details);
        }
    })
    const handleDetails=(data)=>{
        if(data.firstName=="" || data.lastName=="" || data.email==""){
            alert ("Fill all the data")
        }
        else{
            setDetails({
                ...details,
                firstName:data.firstName,
                lastName:data.lastName,
                email:data.email,
                password:"1234",
                number:singleperson
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
       }).then(()=>{setGotoHome("yes");localStorage.setItem("users",JSON.stringify(details))})
      
    }
    const singleUser=(user)=>{
        setSingleperson(user)
    }
    
    return <UserContext.Provider value={{handleDetails,alldetails,gotoHome,singleUser,singleperson,details}}>{children}</UserContext.Provider>
}