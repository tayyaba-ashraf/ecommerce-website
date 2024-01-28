import React from 'react'
import {useSelector } from 'react-redux';

import CardComponent from '../../Components/CardComponent';


const SamSaung = () => {
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
  
  const samsungProducts = Products.filter((product) => product.title.toLowerCase().includes('samsung') ||
  product.title.includes('Huawei') ||
  product.title.includes('Microsoft'));
  
  return (
    <div className="container mt-4">
      <h2>SamSaung ,Huawei ,Microsoft Products</h2>
      <div className="row">
        {samsungProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <CardComponent product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SamSaung;