import React from 'react'

import {Outlet} from 'react-router-dom';



const Products = () => {

  return (
    <>
    <h3 className='text-dark'>Products</h3>
    <Outlet/>
    </>
    
  )
}



export default Products;