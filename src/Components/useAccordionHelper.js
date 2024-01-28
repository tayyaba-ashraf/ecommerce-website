import React from 'react'
import { filterProductsByPrice, maxPriceChange } from '../Redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
/**Functional Component which is returning object having same key value pair names */
const useAccordionHelper = () => {
    const dispatch=useDispatch();
   
    const maxPriceHandle = (value) => {
        dispatch(maxPriceChange(value));
    }

    const { maxPrice } = useSelector((state) => state.allCart);
    const { minPrice } = useSelector((state) => state.allCart);

    const handleFilter = () => {
     dispatch(filterProductsByPrice({ minPrice, maxPrice }));
    };
  return {maxPriceHandle,handleFilter}
}

export default useAccordionHelper