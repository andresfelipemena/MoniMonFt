import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData';
import {useDispatch} from 'react-redux'
import { getProducts } from '../actions/productActions';

export const Home = () => {
const dispatch = useDispatch();
useEffect (() => {
  dispatch(getProducts());
}, [dispatch])

  return (
    <Fragment>
        &nbsp;&nbsp;
        <MetaData title='Fisioterapia, bienestar y entrenamiento'></MetaData>
        <h3 id="encabezado" className='text-center'>Selecciona la categoría</h3>
        <section id="productos" className='container mt-1'>
          <div className='row'>

            {/*Producto 1*/}
            <div className='col-sm-4 col-md-6 col-lg-4 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src="./images/physiotherapy.png" alt="Fisioterapia"></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id="titulo_producto"> <a href='http://localhost:3000'>Fisioterapia</a> </h5>
                  <div className='rating mt-auto'></div>
                  <div className='rating-outer'>
                    <div className='rating-inner'></div>
                  </div>
                  <span id="no_opiniones">5 reviews</span>
                </div>
                <p className='card-text'>$80.000</p> <a href="http://localhost:3000" id="view_btn" className='btn btn-block'>Ver productos</a>
              </div>
            </div>

            {/*Producto 2*/}
            <div className='col-sm-4 col-md-6 col-lg-4 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src="./images/trainning.png" alt="Entremamiento"></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id="titulo_producto"> <a href='http://localhost:3000'>Entrenamiento</a> </h5>
                  <div className='rating mt-auto'></div>
                  <div className='rating-outer'>
                    <div className='rating-inner'></div>
                  </div>
                  <span id="no_opiniones">3 reviews</span>
                </div>
                <p className='card-text'>$100.000</p> <a href="http://localhost:3000" id="view_btn" className='btn btn-block'>Ver productos</a>
              </div>
            </div>

            {/*Producto 3*/}
            <div className='col-sm-4 col-md-6 col-lg-4 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src="./images/wellness.png" alt="Bienestar"></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id="titulo_producto"> <a href='http://localhost:3000'>Bienestar</a> </h5>
                  <div className='rating mt-auto'></div>
                  <div className='rating-outer'>
                    <div className='rating-inner'></div>
                  </div>
                  <span id="no_opiniones">3 reviews</span>
                </div>
                <p className='card-text'>$100.000</p> <a href="http://localhost:3000" id="view_btn" className='btn btn-block'>Ver productos</a>
              </div>
            </div>

          </div>
        </section>
    </Fragment>
  )
}

export default Home;

