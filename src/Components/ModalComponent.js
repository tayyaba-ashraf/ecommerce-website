// import React, { useRef, useState,useEffect } from 'react';
// import { Modal, Form ,Row,Col} from 'react-bootstrap';
// import ModalCard from './ModalCard';
// import SearchApiEndPoint from '../Utilities/SearchApiEndPoint';


// const ModalComponent = ({ showModal, onHide }) => {
//   const modalSearchInputRef = useRef();
//   const {searchProduct,handleDebouncedProductSearch}=SearchApiEndPoint();
    
//   useEffect(() => {
    
//     if (showModal) {
//       modalSearchInputRef.current.focus();
//     }
        
//   }, [showModal]);

        
//   return (
//     <Modal show={showModal} onHide={onHide} className="Productmodal">
//       <Modal.Header closeButton >
//         <Modal.Title>Title based Filtered Products</Modal.Title>
//       </Modal.Header>
//       <Modal.Body className='Productmodal-content' onClick={(e) => e.stopPropagation()}>
//         <Form > 
//             <input
//             type="text"
//             ref={modalSearchInputRef}
//             placeholder="Search Product"
//             onChange={(e) => handleDebouncedProductSearch(e.target.value)}
//             />
//         </Form>
//         <Row className='ModalList-view-element'>
//                 {searchProduct.map((product, index) => (
//                   <Col key={product.id} xs={12} md={12} lg={12} xl={12}>
//                    <ModalCard product={product}/>
              
//                   </Col>
//                 ))}
//               </Row> 
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ModalComponent;

/**New Modal using reactstrap */
import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col } from 'reactstrap';
import ModalCard from './ModalCard';
import SearchApiEndPoint from '../Utilities/SearchApiEndPoint';


const ModalComponent = ({ showModal, onHide }) => {
 
  const {searchProduct,handleDebouncedProductSearch}=SearchApiEndPoint();
           
  return (
    <Modal isOpen={showModal} toggle={onHide} >
      <ModalHeader toggle={onHide} >
        Title based Filtered Products
      </ModalHeader>
      <ModalBody className='Productmodal-content' onClick={(e) => e.stopPropagation()}>
        <Form > 
            <input
            type="text"
            placeholder="Search Product"
            onChange={(e) => handleDebouncedProductSearch(e.target.value)}
            />
        </Form>
        <Row className='ModalList-view-element'>
                {searchProduct.map((product, index) => (
                  <Col key={product.id} xs={12} md={12} lg={12} xl={12}>
                   <ModalCard product={product}/>
              
                  </Col>
                ))}
              </Row> 
      </ModalBody>
      <ModalFooter>
       <h5>Your Searched Products Results</h5>   
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;


