import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { BsGrid3X3, BsList, BsGrid1X2 } from 'react-icons/bs';
import CardComponent from '../../Components/CardComponent';
import AxiosResponseData from '../../Axios/AxiosResponseData';
import ViewIcons from '../../Utilities/ViewIcons';





const Home = () => {
    // const [view, setView] = useState('grid'); 
    const {Products} =AxiosResponseData();
    const {view,renderViewIcon}=ViewIcons();
    
    // const renderViewIcon = (icon, viewMode, label) => (
    //     <div
    //         className={`view-icon ${view === viewMode ? 'active' : ''}`}
    //         onClick={() => setView(viewMode)}
    //     >
    //         {icon} {label}
    //     </div>
    // )
  return( 
       <section className='iteam_section mt-4 container'>
           
            <h2 className='px-4' style={{ fontWeight: 400 }}>
                Restaurants in Gulberg Open now
            </h2>
            <div className='view-icons'>
                {renderViewIcon(<BsGrid3X3 />, 'grid', 'Grid')}
                {renderViewIcon(<BsList />, 'list', 'List')}
                {renderViewIcon(<BsGrid1X2 />, 'kenben', 'Kenben')}
            </div>
            <div className='text-light mt-2'>
                {view === 'grid' ?
                    <Row className='mt-2 grid-view'>
                      {Products.map((product, index) => (
                         <Col key={product.id} xs={12} md={5} lg={5} xl={5} className="mb-3 ml-4">
                             <CardComponent key={product.id} product={product} view={view} />
                         </Col>
                      ))}
                    </Row>
                :
                view === 'kenben' ?
                    (<Row className='kenben-view mb-4 mr-4'>
                       {Products.map((product, index) => (
                            <Col key={product.id} xs={12} md={4} lg={4} xl={4}>
                                <CardComponent key={product.id} product={product} />
                                {index % 3 === 2 && index !== Products.length - 1 && <hr className="d-md-none" view={view}/>}
                            </Col>
                        ))}   
                    </Row>)
                 :
                    (<Row className='list-view-element'>
                        {Products.map((product, index) => (
                            <Col key={product.id} xs={12} md={12} lg={12} xl={12}>
                                <CardComponent key={product.id} product={product} view={view}/>
                            </Col>
                      ))}
                        
                    </Row>
                )}

            </div>
            


        </section>
    
    )
}

export default Home
