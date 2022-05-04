import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetails.css"
function ProductDetails() {
    const [product,setProduct]=useState({})
    const {id}=useParams();
    useEffect(()=>{
        getData()
    },[]);
    const getData=async()=>{
        const data=await fetch(`https://netmedback.herokuapp.com/products/${id}`);
        const res=await data.json();
        console.log(res.product)
        setProduct(res.product)
    }
    
  return (
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
                <button className='add-button'>ADD TO CART</button>
                <hr></hr>
                <p className='avail'>Check Availability & Expiry</p>
                <div className='pin'>PINCODE:<input></input></div>
                <div className='line'></div>
            </div>
        </div>
    </div>
  )
}

export {ProductDetails};