import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import Home from '../WebPages/HomePage/Home';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Products from '../WebPages/ProductsPage/Products';
import IPhone from '../WebPages/IPhoneProductsPage/IPhone';
import SamSaung from '../WebPages/SamSaungProductsPage/SamSaung';
import Perfume from '../WebPages/PerfumeProductsPage/Perfume';
import PriceRangeFilterProduct from '../WebPages/PriceRangeFilterProductPage/PriceRangeFilterProduct';


const AppRoutes = () => {
  
  const routes = [
    { path: '/', element: <Home /> },
  
  ];
  
  return (
    <>
    <Header />
    <Container fluid>
     <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9} className="main-content">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="/products" element={<Products />}>
              <Route index element={<IPhone />} />
              <Route path="iphone" element={<IPhone id="iphone" />} />
              <Route path="samsaung" element={<SamSaung id="samsaung" />} />
              <Route path="perfume" element={<Perfume id="perfume" />} />
              <Route path="pricerange" element={<PriceRangeFilterProduct id="pricerange" />} />
            </Route>
          </Routes>
        </Col>
      </Row>
    </Container>
    <Toaster />
  </>
  )
}

export default AppRoutes