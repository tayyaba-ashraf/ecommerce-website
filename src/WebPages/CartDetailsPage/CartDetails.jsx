import React from 'react'
import "./cartstyle.css"
import { MdDelete } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart, decrementCart, emptycart, removeFromCart } from '../../Redux/features/cartSlice'
import useCartHelper from './useCartHelper';



const CartDetails = () => {
    const  {carts,totalQuantity,totalPrice,handleIncrement,deletePraticularProduct,
        decrementPraticularProduct,
        clearCart} = useCartHelper();

   
    
    return (
        <>       
            <div className='row justify-content-center m-0'>
                <div className='row m-0'>
                    <div className='col-md-12 mt-2 mb-5'>
                            
                                <div className=" bg-dark p-3">
                                    <div className=''>
                                        <h5 className='text-white m-0'>
                                            Cart Total Products {carts.length > 0 ? `(${carts.length})` : ""}
                                        </h5>
                                        {carts.length > 0 && (
                                            <button className="btn btn-danger mt-2 btn-sm" onClick={clearCart}>
                                                <MdDelete />
                                                <span>Empty cart</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className='card-body p-0'>
                                    {carts.length === 0 ? (
                                        <div className='cart-empty'>
                                            <FiShoppingCart className="cart-trolley" />
                                            <p>Your Cart Is Empty</p>
                                        </div>
                                    ) : (
                                        <div className='table-responsive'>
                                            <table className='table cart-table mb-0'>
                                                <thead>
                                                    <tr>
                                                        <th>Action</th>
                                                        <th>Product</th>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th className='text-right'>
                                                            <span id='amount' className='amount'>
                                                                Total Amount
                                                            </span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {carts.map((product, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <button
                                                                    className='prdct-delete'
                                                                    onClick={(e) => {
                                                                        deletePraticularProduct(product.id);
                                                                    }}
                                                                >
                                                                    <MdDelete />
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <div className='product-img'>
                                                                    <img src={product.images[0]} alt='' />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='product-name'>
                                                                    <p>{product.title}</p>
                                                                </div>
                                                            </td>
                                                            <td>{product.price}</td>
                                                            <td>
                                                                <div className='prdct-qty-container'>
                                                                    <button
                                                                        className='prdct-qty-btn'
                                                                        type='button'
                                                                        onClick={(e) => {
                                                                            handleIncrement(product);
                                                                        }}
                                                                    >
                                                                        <FaPlus />
                                                                    </button>
                                                                    <input
                                                                        className='qty-input-box'
                                                                        type='text'
                                                                        value={product.qnty}
                                                                        name=''
                                                                        id=''
                                                                        readOnly
                                                                    />
                                                                    <button
                                                                        className='prdct-qty-btn'
                                                                        type='button'
                                                                        onClick={(e) =>
                                                                            product.qnty <= 1
                                                                                ? deletePraticularProduct(product.id)
                                                                                : decrementPraticularProduct(product)
                                                                        }
                                                                    >
                                                                        <FaMinus />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className='text-right'>{product.qnty * product.price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th colSpan={3}>&nbsp;</th>
                                                        <th>
                                                            Total Items<span className='mr-2'>:</span>
                                                            <span className='text-danger'>{totalQuantity}</span>
                                                        </th>
                                                        <th className='text-right'>
                                                            Total Price<span className='mr-2'>:</span>
                                                            <span className='text-danger'>{totalPrice}</span>
                                                        </th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            
                        </div>
                </div>
                
            </div>
            
        </>
    )
}

export default CartDetails