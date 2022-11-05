import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions';

export const Home = () => {
const {productos} = useSelector (state => state.products)

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

            {productos && productos.map (producto =>(
              <div key={producto._id} className='col-sm-4 col-md-6 col-lg-4 my-3'>
                <div className='card p-3 rounded'>
                  <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                  <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"> <a href='http://localhost:3000'>{producto.nombre}</a> </h5>
                    <div className='rating mt-auto'></div>
                    <div className='rating-outer'>
                      <div className='rating-inner' style={{width: `${(producto.calificacion/5)*100}%`}}></div>
                    </div>
                    <span id="no_opiniones">{producto.numCalificaciones} Comentarios</span>
                  </div>
                  <p className='card-text'>${producto.precio}</p> <a href="http://localhost:3000" id="view_btn" className='btn btn-block'>Ver productos</a>
                </div>
              </div>
            ))}

          </div>
        </section>
    </Fragment>
  )
}

export default Home;

