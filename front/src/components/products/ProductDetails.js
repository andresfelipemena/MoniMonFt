import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Fisioterapia"> </MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id='imagen_producto'>
                <img src="../../images/physiotherapy.png" alt= "Imagen_producto" height="450" width="450"></img>
            </div>
            
            <div className='col-12 col-lg-5 mt-5'>
                <h3>Fisioterapia</h3>
                <p id="product_id">Product #21312</p>
            </div>
        </div>
    </Fragment>
  )
}
