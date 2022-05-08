import React from 'react'
import { Routes } from 'react-router-dom'
import Filters from './Filters'
import Products from './Products'
import "./productRouters.css";
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";


export function CovidRoutes() {

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
            <Products/>
        </span>
        
    </div>

    </>
  )
}

