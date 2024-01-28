import React, {useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import OffCanvasComponent from './OffCanvasComponent';
import ModalComponent from './ModalComponent';
import useHeaderHelper from './useHeaderHelper';


const Header = () => {
  
    const {carts,showModal,isOpen,handleOffCanvas,handleCloseOffCanvas,closeModal,showModalPopUp}=useHeaderHelper();
    

  return (
    <>

            <Navbar style={{ height: "60px", background: "black", color: "white" }}>

                <Container>
                    <NavLink to={'/'} className={"text-decoration-none text-light mx-2"} >
                        <h3 className='text-light'>Ecommerce</h3>
                    </NavLink>
                    <div  className={"text-decoration-none text-light mx-2"} onClick={handleOffCanvas} style={{ cursor: 'pointer' }}>
                        <div className='navbar-link cart-trolley--link'>
                            <FiShoppingCart className="cart-trolley" />
                            <span className="cart-total--item">{carts.length}</span>
                        </div>
                    </div>
                    <div  className={"text-decoration-none text-light"}  onClick={showModalPopUp} style={{ cursor: 'pointer' }}>
                        <div className='navbar-link cart-trolley--link'>
                            <FaSearch className="cart-trolley" />
                            
                        </div>
                    </div>
                   

                    
                </Container>

            </Navbar>
            <ModalComponent showModal={showModal} onHide={closeModal}/>
            
            <OffCanvasComponent isOpen={isOpen} onHide={handleCloseOffCanvas} />
            


        </>
  )
}

export default Header