
import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/features/cartSlice';
import toast from 'react-hot-toast';



const CardComponent= ({view,product}) => {
    const dispatch=useDispatch();
  
    const addToCartHandle = (e) => {
       dispatch(addToCart(e));
       toast.success("items added in your cart");
   };
  

  return (

    <Card style={{ border: 'none' }} className='hove mb-4'>
            <Card.Img variant='top' className={`cd ${view === 'list' ? 'list-view-image-one' : ''}`} src={product.images[0]} />

            <div className='card_body'>

                <div className='upper_data'>
                    <h4 className={`mt-2 ${view === 'list' ? 'list-view-h4' : ''}`} >{product.title}</h4>
                    <span className={`${view === 'list' ? 'list-view-span-one' : ''}`} >{product.rating}&nbsp;★</span>
                </div>

                <div className='lower_data'>
                    <h5 className={`${view === 'list' ? 'list-view-h5' : ''}`}>
                        discount :{product.discountPercentage}
                    </h5>
                    <span className={`${view === 'list' ? 'list-view-span' : ''}`}>price :{product.price}</span>
                </div>

                <div className={`extra ${view === 'list' ? 'list-view-extra' : ''}`}></div>

                <div className='last_data'>
                    <img src={product.thumbnail} className={`limg ml-3 mr-3 ${view === 'list' ? 'list-view-img' : ''}`} alt='' />
                    <Button className={`btn btn-danger ${view === 'list' ? 'list-view-button' : ''}`}

                        variant='outline-light' onClick={(e) => { addToCartHandle(product) }}>
                        Add to Cart
                    </Button>
                    <span className={`${view === 'list' ? 'list-view-stock' : ''}`}>stock :{product.stock}</span>
                </div>


            </div>

        </Card>
  )
}

export default CardComponent;

