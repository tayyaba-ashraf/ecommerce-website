import axios from "axios";
const productInstance = axios.create();

const showLoader = () => {
 document.getElementById('loader').style.display = 'block';
};
              
const hideLoader = () => {
 document.getElementById('loader').style.display = 'none';
};

productInstance.interceptors.request.use(
  (config) => 
  {
     showLoader(); 
     if (config.headers['Authorization'] && config.headers['Content-Type'])
      {
       config.headers['authorizationHeader'] = 'true';
       console.log('authorizationHeader key',config.headers['authorizationHeader']);
       config.headers['contentTypeHeader'] = 'true';
      }

      config.headers['header'] = 'true';
      console.log('header key ',config.headers['header']);

      return config;
   },

  (error) => {
     hideLoader(); 
     return Promise.reject(error);
    }
);

productInstance.interceptors.response.use(
 (response) => {
      hideLoader(); 
      return response;
     },
 (error) => {
      hideLoader(); 
      return Promise.reject(error);
     }
);

const fetchProductsData = () => {
  
   return productInstance.get('https://dummyjson.com/products', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer vxbasx?/~~9(sajhx677!@>>jk788ZOP90>:"/'

      }
   });
};

export const fetchProducts = async () => {
    try {
        const response = await fetchProductsData();
        if (response && response.data && Array.isArray(response.data.products)) {
            return response.data.products;
        } else {
            console.error('Invalid or empty data received:', response.data.products);
            return [];
        }
    } catch (error) {
        console.error('Request Error:', error);
        return [];
    }
};


export default productInstance;          