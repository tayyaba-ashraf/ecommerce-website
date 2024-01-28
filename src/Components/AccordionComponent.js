// import React from 'react'
// import { Link } from 'react-router-dom'
// import useAccordionHelper from './useAccordionHelper';


// const AccordionComponent = () => {
    
//   const {maxPriceHandle,handleFilter}=useAccordionHelper();

//   return (
//     <div className="accordion " data-bs-toggle="collapse" id="accordionExample">
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingOne">
//                     <button className="accordion-button bg-dark text-light" type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseOne"
//                         aria-expanded="true"
//                         aria-controls="collapseOne">
//                         Price Range Filter
//                     </button>
//                 </h2>
                          
//                 <div id="collapseOne" className="accordion-collapse collapse close" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">

//                         <Link to="/products/pricerange">
//                             <button
//                                 className="btn btn-dark"
//                                 onClick={handleFilter}
//                             >
//                              Filter Products
//                             </button>
//                         </Link>
//                         <h5>Price (between 25 and 1600):</h5>
//                         <input type="range" id="vol" name="vol" min="25" max="1600" 
//                             onChange={(e)=>maxPriceHandle(e.target.value)}
//                         />
//                         <br></br>
//                         <br></br>
                            
                              
//                     </div>
//               </div>
//         </div>
//     </div>
//   )
// }

// export default AccordionComponent;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionBody, AccordionHeader,AccordionItem} from 'reactstrap';
import useAccordionHelper from './useAccordionHelper';

const AccordionComponent=(props)=> {

  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const {maxPriceHandle,handleFilter}=useAccordionHelper();

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Select Products by Price Range</AccordionHeader>
          <AccordionBody accordionId="1">            
             <h5>Price : (between 25 and 1600)</h5>
             <input type="range" id="vol" name="vol" min="25" max="1600" 
             style={{width:'195px'}}
             onChange={(e)=>maxPriceHandle(e.target.value)} />
             <Link to="/products/pricerange">
                  <button style={{width:'195px'}} className="btn btn-dark" onClick={handleFilter} >
                     Filter Products
                  </button>
             </Link>
             <br></br>
             
            </AccordionBody>
        </AccordionItem>
        
      </Accordion>
    </div>
  );
}

export default AccordionComponent;