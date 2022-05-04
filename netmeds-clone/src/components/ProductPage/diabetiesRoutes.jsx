import React from 'react'
import Filters from './Filters'
import ProductsDiabeties from './ProductDiabeties'
import "./productRouters.css"
function Diabeties() {
  return (
    <div className='dia'>
        <span className='left'>
            <Filters/>
        </span>
        <span className='right'>
            <ProductsDiabeties/>
        </span>
        
    </div>
  )
}

export default Diabeties