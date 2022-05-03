import React, { useEffect, useState } from 'react'
import "./Products.css"
function ProductsDiabeties() {
    const [products,setProducts]=useState([]);
    const [order,setOrder]=useState("popularity");
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        const data=await fetch("https://netmedback.herokuapp.com/products");
        const res=await data.json();
        console.log(res)
        const filterdDataDiabeties=[];
        res.product.map((el)=>{
            if(el.main=="Diabeties"){
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
  return (
    <div className='product-right'>
        <div className='banner'>
            <img src={require("../../images/bannerDia.jpg")}></img>
        </div>
        <div className='category'>
            <div className='item-title'>
                <p>SHOP BY CATEGORY</p>
                <div className='category-img'>
                    <div>
                        <img src={require("../../images/diabeties/d-1.jpg")}/>
                        <div className='about'>Personal & Home...</div>
                        {/* <div className='discount'>UPTO 79%</div> */}
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-2.jpg")}/>
                        <div className='about'>Mask, Gloves & Pr...</div>
                        {/* <div className='discount'>UPTO 88%</div> */}
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-3.jpg")}/>
                        <div className='about'>Immunity Booster</div>
                        {/* <div className='discount'>UPTO 45%</div> */}
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-4.jpg")}/>
                        <div className='about'>Business Essentials</div>
                        <div className='discount'>UPTO 25%</div>
                    </div>
                    <div>
                        <img src={require("../../images/diabeties/d-5.jpg")}/>
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

export default ProductsDiabeties