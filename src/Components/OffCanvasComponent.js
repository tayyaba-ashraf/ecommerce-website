import React from 'react';
import { Offcanvas, OffcanvasHeader,OffcanvasBody } from 'reactstrap';
import CartDetails from '../WebPages/CartDetailsPage/CartDetails';



const OffCanvasComponent = ({ isOpen, onHide }) => {
  return (
    <>
      <Offcanvas isOpen={isOpen} toggle={onHide}  backdrop={true}>
        <OffcanvasHeader toggle={onHide}>
          Cart Items Details Sheet
        </OffcanvasHeader>
        <OffcanvasBody>
          <CartDetails />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default OffCanvasComponent;
