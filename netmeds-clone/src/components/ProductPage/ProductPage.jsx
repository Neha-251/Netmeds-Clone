import React from 'react'
import Filters from './Filters'
import Products from './Products'
import "./ProductPage.css"
function ProductPage() {
  return (
    <div className='main-page'>
        <Filters/>
        <Products/>
    </div>
  )
}

export default ProductPage