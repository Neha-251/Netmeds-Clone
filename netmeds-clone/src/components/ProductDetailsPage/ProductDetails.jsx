import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./ProductDetails.css"
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";


function ProductDetails() {
    const [product,setProduct]=useState({})
    const [userandproduct,setUserandproduct]=useState({
        product_id:"",
        user_id:""
    })
    const [cart,setCart]=useState(0);
    const {id}=useParams();
    useEffect(()=>{
        getData()
        if(cart!==0){
            postData()
        }
    },[cart])
    const getData=async()=>{
        const data=await fetch(`https://netmedback.herokuapp.com/products/${id}`);
        const res=await data.json();
        console.log(res.product)
        setProduct(res.product)
    }
    const userID=JSON.parse(localStorage.getItem("users"));
    const navigate=useNavigate()
    const addToCart=()=>{
        if(userID==null){
            alert("Sign in first");
            navigate("/account/login")
        }
        else{
            setUserandproduct({
                product_id:id,
                user_id:userID._id
            })
            setCart(cart+1);
        }
    }
    function postData(){
        console.log("hi")
        fetch("https://netmedback.herokuapp.com/carts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userandproduct)
        })
    }
  return (

    <>
    <Navbar />
    <Navbar1 />
    <Nav_Menu />


    <div className='product-details'>
        <div className='details-container'>
            <div className='image-part'>
                <img src={product.img}></img>
            </div>
            <div className='details-part'>
                <p className='heading'>{product.name}</p>
                <div className='tag'>{product.main}</div>
                <hr></hr>
                <div className='price'>Best Price*<span className='red-price'>₹ {product.price}</span></div>
                <p className='samll-text'>(Inclusive of all taxes)</p>
                <p className='samll-text italic'>* Mkt: <span>{product.mkt}</span></p>
                <p className='samll-text italic'>* Country of Origin: India</p>
                <p className='samll-text italic'>* Delivery charges if applicable will be applied at checkout</p>
                <button onClick={()=>{
                    addToCart();
                }} className='add-button' >ADD TO CART</button>
                <hr></hr>
                <p className='avail'>Check Availability & Expiry</p>
                <div className='pin'>PINCODE:<input></input></div>
                <div className='line'></div>
            </div>
        </div>
    </div>
    </>
  )
}

export {ProductDetails};