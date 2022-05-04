import React from 'react'
import Filters from './Filters'
import Products from './Products'
import { useState } from 'react'
import {Link, Route,Routes} from "react-router-dom"
import "./ProductPage.css"
import ProductsDiabeties from './ProductDiabeties'
function ProductPage() {
  const [product,setProduct]=useState("covid")
  return (
    <div className='product-page'>
      {/* <Link className='link' to="/covid">covid</Link>
      <Link className='link' to="/diabeties">diabeties</Link>
      <Link className='link' to="/covid">eyeware</Link>
      <Link className='link' to="/diabeties">ayush</Link>
      <Link className='link' to="/covid">ayurvedic</Link>
      <Link className='link' to="/diabeties">homeopathy</Link> */}
    </div>
  )
}

export default ProductPage