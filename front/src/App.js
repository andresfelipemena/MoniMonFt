import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/NewProduct';




function App() {
  return (

    <Router>
    <div className="App">
      <Header />
      <div className='container container-fluid'>
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/producto/:id' element={<ProductDetails />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path="/productList" element={<ProductsList />}/>
          <Route path="/nuevoProducto" element={<NewProduct />}/>
          
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
