import React, { useEffect, useState } from 'react'
import "./Products.css"
function Products() {
    const [products,setProducts]=useState([]);
    const [order,setOrder]=useState("popularity");
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        const data=await fetch("https://netmedback.herokuapp.com/products");
        const res=await data.json();
        console.log(res)
        setProducts(res.product);
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
  return (
    <div className='product-right'>
        <div className='banner'>
            <img src={require("../../images/banner.jpg")}></img>
        </div>
        <div className='category'>
            <div className='item-title'>
                <p>SHOP BY CATEGORY</p>
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
                    <div className='product-card'>
                        <img src={product.img}></img>
                        <div className='product-details'>
                            <div className='name'>{product.name}</div>
                            <div className='mkt'>Mkt: {product.mkt}</div>
                            <div className='price'>Best price* <span className='red'>Rs. {product.price}</span></div>
                            <div className='stprice'>MRP <span className='strike'>Rs. {product.stprice}</span></div>
                            <button>ADD TO CART</button>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products