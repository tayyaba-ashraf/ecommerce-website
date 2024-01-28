import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart, decrementCart, emptycart, removeFromCart } from '../../Redux/features/cartSlice'

const useCartHelper = () => {
    const { carts } = useSelector((state) => state.allCart);
    const { totalQuantity } = useSelector((state) => state.allCart);
    const { totalPrice } = useSelector((state) => state.allCart);
  
    const dispatch = useDispatch();

    const handleIncrement = (e) => {
        dispatch(addToCart(e));
    }

    const deletePraticularProduct = (e) => {
        dispatch(removeFromCart(e))
        toast.success("item removed from cart");
    }

    const decrementPraticularProduct = (e) => {
        dispatch(decrementCart(e));
    }

    const clearCart = (e) => {

        dispatch(emptycart());
        toast.success("Your cart is empty");
    }

  return {carts,totalQuantity,totalPrice,
    handleIncrement,
    deletePraticularProduct,
    decrementPraticularProduct,
    clearCart}
}

export default useCartHelper;