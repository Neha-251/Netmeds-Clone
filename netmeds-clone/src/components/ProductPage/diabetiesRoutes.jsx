import React from 'react'
import Filters from './Filters'
import ProductsDiabeties from './ProductDiabeties'
import "./productRouters.css"

import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";


function Diabeties() {
  return (

    <>
    <Navbar />
    <Navbar1 />
    <Nav_Menu />


    <div className='dia'>
        <span className='left'>
            <Filters/>
        </span>
        <span className='right'>
            <ProductsDiabeties/>
        </span>
        
    </div>
    </>
  )
}

export default Diabeties