import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Products.css"
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";


function ProductsDiabeties() {
    const [products,setProducts]=useState([]);
    
    const [order,setOrder]=useState("popularity");
    const [userandproduct,setUserandproduct]=useState({
        product_id:"",
        user_id:""
    })
    const [cart,setCart]=useState(0);
    useEffect(()=>{
        getData()
        if(cart!==0){
            postData()
        }
    },[cart])
    const getData=async()=>{
        const data=await fetch("https://netmedback.herokuapp.com/products");
        const res=await data.json();
        console.log(res)
        const filterdDataCovid=[]
        const filterdDataDiabeties=[];
        res.product.map((el)=>{
            
            if(el.main==="Diabeties"){
                filterdDataDiabeties.push(el)
            }
        })
        
        setProducts(filterdDataDiabeties)
    }
    function sort(x){
        const copy=[...products];
        if(x==="high"){
            copy.sort(function(a,b){
                return b.price-a.price
            })
        }
        else if(x==="low"){
            copy.sort(function(a,b){
                return a.price-b.price
            })
        }
        else{
            getData();
        }
        setProducts(copy);
        setOrder(x);
    }
    const userID=JSON.parse(localStorage.getItem("users"));
    const navigate=useNavigate();
    const addToCart=(product_id)=>{
        if(userID==null){
            alert("Sign in first")
            navigate("/account/login")
        }
        else{
            setUserandproduct({
                product_id:product_id,
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
    {/* <Navbar />
    <Navbar1 />
    <Nav_Menu /> */}


    <div className='product-right'>
        <div className='banner'>
            <img src={require("../../images/bannerDia.jpg")} alt=""></img>
        </div>
        <div className='category'>
            <div className='item-title'>
                <p>SHOP BY CATEGORY</p>
                <div className='category-img'>
                    <div>
                        <img src={require("../../images/diabeties/d-1.jpg")} alt=""/>
                        <div className='about'>Personal & Home...</div>
                        <div className='discount'>UPTO 79%</div>
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-2.jpg")} alt=""/>
                        <div className='about'>Mask, Gloves & Pr...</div>
                        <div className='discount'>UPTO 88%</div>
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-3.jpg")} alt=""/>
                        <div className='about'>Immunity Booster</div>
                        <div className='discount'>UPTO 45%</div>
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-4.jpg")} alt=""/>
                        <div className='about'>Business Essentials</div>
                        <div className='discount'>UPTO 25%</div>
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-5.jpg")} alt=""/>
                        <div className='about'>Travel Essentials</div>
                        <div className='discount'>UPTO 45%</div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='sort'>
            Sort by: 
            <button onClick={()=>{
                sort("popularity")
            }} className={`${order==="popularity"?"selected":"sortby"}`} value="popularity">Popularity</button>
            <button onClick={()=>{
                sort("high")
            }}className={`${order==="high"?"selected":"sortby"}`} value="desc">High to Low</button>
            <button onClick={()=>{
                sort("low")
            }} className={`${order==="low"?"selected":"sortby"}`} value="asc">Low to High</button>
        </div>
        <div className='show-products'>
            <div className='item-title'>
                <p>ALL PRODUCTS</p>
            </div>
            <div className='append-products'>
                {products.map((product)=>(
                    <div className='product-cards' >
                        <Link className='link-details' to={`/products/${product._id}`}>
                        <div className='product-card'>
                        <img src={product.img} alt=""></img>
                        <div className='product-details' >
                            <div className='name'>{product.name}</div>
                            <div className='mkt'>Mkt: {product.mkt}</div>
                            <div className='price'>Best price* <span className='red'>Rs. {product.price}</span></div>
                            <div className='stprice'>MRP <span className='strike'>Rs. {product.stprice}</span></div>
                        </div>
                        </div>
                        </Link>
                        <button onClick={()=>{
                            addToCart(product._id);
                        }}>ADD TO CART</button>
                    </div> 
                ))}
            </div>
        </div>
        
    </div>
    </>
  )
}

export default ProductsDiabeties






 