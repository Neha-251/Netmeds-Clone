import React, { useEffect, useState } from 'react'
import "./Products.css"
function Products() {
    const [products,setProducts]=useState([]);
    const [products1,setProducts1]=useState([]);
    const [order,setOrder]=useState("popularity");
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        const data=await fetch("https://netmedback.herokuapp.com/products");
        const res=await data.json();
        console.log(res)
        const filterdDataCovid=[]
        const filterdDataDiabeties=[];
        res.product.map((el)=>{
            if(el.main==="Covid - Essentials"){
                filterdDataCovid.push(el)
            }
            else if(el.main==="Diabeties"){
                filterdDataDiabeties.push(el)
            }
        })
        setProducts(filterdDataCovid);
        setProducts1(filterdDataDiabeties)
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
            <img src={require("../../images/banner.jpg")} alt=""></img>
        </div>
        <div className='category'>
            <div className='item-title'>
                <p>SHOP BY CATEGORY</p>
                <div className='category-img'>
                    <div>
                        <img src={require("../../images/covid/c-1.jpg")} alt=""/>
                        <div className='about'>Personal & Home...</div>
                        <div className='discount'>UPTO 79%</div>
                    </div>
                    <div>
                        <img src={require("../../images/covid/c-2.jpg")} alt=""/>
                        <div className='about'>Mask, Gloves & Pr...</div>
                        <div className='discount'>UPTO 88%</div>
                    </div>
                    <div>
                        <img src={require("../../images/covid/c-3.jpg")} alt=""/>
                        <div className='about'>Immunity Booster</div>
                        <div className='discount'>UPTO 45%</div>
                    </div>
                    <div>
                        <img src={require("../../images/covid/c-4.jpg")} alt=""/>
                        <div className='about'>Business Essentials</div>
                        <div className='discount'>UPTO 77%</div>
                    </div>
                    <div>
                        <img src={require("../../images/covid/c-5.jpg")} alt=""/>
                        <div className='about'>Travel Essentials</div>
                        <div className='discount'>UPTO 77%</div>
                    </div>
                    <div>
                        <img src={require("../../images/covid/c-6.jpg")} alt=""/>
                        <div className='about'>Oxygen Can</div>
                        <div className='discount'>UPTO 14%</div>
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
                        <img src={product.img} alt=""></img>
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