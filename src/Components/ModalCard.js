import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/features/cartSlice';
import toast from 'react-hot-toast';


const ModalCard= ({product}) => {
    const dispatch=useDispatch();
    
    const addToCartHandle = (e) => {
       dispatch(addToCart(e));
       toast.success("items added in your cart");
   };
  

  return (

    <Card style={{ border: 'none'}} className='hove mb-2'>
        <Card.Img variant='top' className={'ModalListcd ModalList-view-image-one'} 
            src={product.images[0]} />
                 <div className='card_body'>
                       <div className='upper_data'>
                         <h4 className={'mt-2 ModalList-view-h4'} >
                           {product.title.length > 20 ? `${product.title.substring(0, 20)}`:
                            product.title}
                         </h4>
                         <span className={'ModalList-view-span-one'} >{product.rating}&nbsp;★</span>
                       </div>

                       <div className='lower_data'>
                         <h5 className={'ModalList-view-h5'}>
                           discount :{product.discountPercentage}
                         </h5>
                         <span className={'ModalList-view-span'}>price :{product.price}</span>
                       </div>

                       <div className='last_data'>
                         <img src={product.thumbnail} className={'ModalList-view-img'} alt='' />
                         <Button className={'btn btn-danger ModalList-view-button'}
                           variant='outline-light' onClick={(e) => { addToCartHandle(product) }}>
                           Add to Cart
                          </Button>

                          <span className={'ModalList-view-stock'}>stock :{product.stock}</span>
                       </div>

                      </div>

                    </Card>
  )
}

export default ModalCard;

