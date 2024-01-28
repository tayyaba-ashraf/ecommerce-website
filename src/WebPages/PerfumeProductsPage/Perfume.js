import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';


import CardComponent from '../../Components/CardComponent';
import { fetchProducts } from '../../Axios/AxiosInstance';
import { setProducts } from '../../Redux/features/cartSlice';
import toast from 'react-hot-toast';


const Perfume = () => {
  // const dispatch=useDispatch();
  // const fetchData = async () => {
  // const products = await fetchProducts();
  // const productsWithQuantity = products.map(item => ({ ...item, qnty: 0 }));
       
  //   dispatch(setProducts(productsWithQuantity));
  // }
    
  // useEffect(() => {
           
  //   fetchData();
  //   toast.success("Products have been fetched");
  // }, []);
        
    
  const { Products } = useSelector((state) => state.allCart);
  
  const perfumeProducts = Products.filter((product) => product.title.includes('Perfume') ||
  product.title.includes('perfume'));
  
  
  return (
    <div className="container mt-4">
      <h2>Perfumes</h2>
      <div className="row">
        {perfumeProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <CardComponent product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perfume