import React from 'react';
import {useSelector } from 'react-redux';
import CardComponent from '../../Components/CardComponent';


const PriceRangeFilterProduct = () => {
  const {filteredProducts}=useSelector((state)=>state.allCart);
  
  return (
    <div className="container mt-4">
    <h2>Products based on your Selected Price Range</h2>
    <div className="row">
      {filteredProducts.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
        <CardComponent product={product} />
      </div>
      ))}
    </div>
  </div> 
  )
}

export default PriceRangeFilterProduct