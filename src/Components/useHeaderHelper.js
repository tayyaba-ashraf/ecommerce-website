import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

/**OffCanvas and Modal display controlling through this class */
const useHeaderHelper = () => {
    const {carts}=useSelector((state)=>state.allCart);
    const [isOpen,setisOpen]=useState(false);
    const [showModal, setShowModal] = useState(false);

    
    const handleOffCanvas = () => {
      setisOpen(true);
    };
    
    const handleCloseOffCanvas = () => {
      setisOpen(false);
      toast.success("Cart Items details have been closed");
    };

    const showModalPopUp = () => {
      console.log("inside Modal ");
      setShowModal(true);     
    };
    
    const closeModal = () => {
      setShowModal(false);
      toast.success("Modal has been closed");
      
      

    };
  return {carts,showModal,isOpen,handleOffCanvas,handleCloseOffCanvas,closeModal,showModalPopUp}
}

export default useHeaderHelper