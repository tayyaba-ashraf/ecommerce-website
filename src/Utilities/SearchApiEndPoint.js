import React, { useState } from 'react'
import axios from 'axios';
import debounce from 'lodash/debounce';

const SearchApiEndPoint = () => {
    const [searchProduct,setsearchProduct]=useState([]);
    const handleProductModalSearch=(value)=>{
        if(value){
          axios.get(`https://dummyjson.com/products/search?q=${value}`).then((response)=>{
    
           
            const axiosProducts=response.data.products;
            
            const products=axiosProducts.filter((product) => product.title.includes(value));
            console.log("Products inside handleProductModalSearch using axios",products);
            setsearchProduct(products);
          })
          
        }
        else {
          
          // If the search value is empty, clear the search results
          setsearchProduct([]);
        }
        
      };

      const handleDebouncedProductSearch = debounce(handleProductModalSearch, 800);
  return {searchProduct,handleDebouncedProductSearch}
}

export default SearchApiEndPoint