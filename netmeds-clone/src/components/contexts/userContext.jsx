
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext=createContext();
export const UserContextProvider=({children})=>{
    const [gotoHome,setGotoHome]=useState("no")
    const [alldetails,setAllDetails]=useState(false)
    const [res,setRes]=useState("");
    const [singleperson,setSingleperson]=useState("")
    const [details,setDetails]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        number:""
    }); 
    const [num,setNum]=useState("")
    useEffect(()=>{
        if(alldetails==true){
            addData(details);
        }
    })
    const handleNumber=(value)=>{
       
        console.log("value",value.num)
        console.log(value.res);
        setNum(value.num);
        setRes(value.response)
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
                password:"1234",
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
    const handleExisting=(response)=>{
        setRes(response)
    }
    const singleUser=(user)=>{
        setSingleperson(user)
    }
    
    return <UserContext.Provider value={{handleNumber,handleDetails,alldetails,gotoHome,res,handleExisting,singleUser,singleperson}}>{children}</UserContext.Provider>
}