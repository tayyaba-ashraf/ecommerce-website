import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import toast from 'react-hot-toast';
import { fetchProducts } from './AxiosInstance';
import { setProducts } from '../Redux/features/cartSlice';


const AxiosResponseData = () => {
    const dispatch=useDispatch();
    const fetchData = async () => {
        const products = await fetchProducts();
        const productsWithQuantity = products.map(item => ({ ...item, qnty: 0 }));
            
            dispatch(setProducts(productsWithQuantity));
        }
        
        useEffect(() => {
               
            fetchData();
            toast.success("Products have been fetched");
        }, []);
            
        const {Products}=useSelector((state)=>state.allCart);
        
  return {Products}
}

export default AxiosResponseData