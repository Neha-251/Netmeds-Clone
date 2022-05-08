
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UserContext=createContext();
export const UserContextProvider=({children})=>{
    const [gotoHome,setGotoHome]=useState("no")
    const [alldetails,setAllDetails]=useState(false)
    const [singleperson,setSingleperson]=useState("")
    const [payment,setPayment]=useState(false)

    
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
    if(payment==true){
        cartFetch()
    }
    async function cartFetch(){
        const userID=JSON.parse(localStorage.getItem("users"));
        console.log(userID)
        const cart=await fetch("https://netmedback.herokuapp.com/carts");
        const res= await cart.json();
        console.log("res",res);
        const cartArr=res.cart;
        for(var i=0;i<cartArr.length;i++){
            if(userID._id===cartArr[i].user_id){
                console.log("yes")
                const remove=removeCart(cartArr[i]._id);
                setPayment(remove);
                
            }   
        } 
    }
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
       }).then(()=>{setGotoHome("yes");setAllDetails(false);localStorage.setItem("users",JSON.stringify(details))})
      
    }
    const afterPayment=(x)=>{
        setPayment(x)
    }
    const singleUser=(user)=>{
        setSingleperson(user)
    }
    function removeCart(id){
        axios.delete(`https://netmedback.herokuapp.com/carts/${id}`);
        return false;
    }
    return <UserContext.Provider value={{handleDetails,alldetails,gotoHome,singleUser,singleperson,details,payment,afterPayment}}>{children}</UserContext.Provider>
}