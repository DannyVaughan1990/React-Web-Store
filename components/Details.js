import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
            {/* title */}
             <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <img src={img} className="imf-fluid" alt="product"/>
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
               <h2>model : {title}</h2>
               <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
               made by: <span>{company}</span>
               </h4>
               <h4 className="text-blue">
               price : <span>£</span>
               {price}
               </h4>
               <p className="text-capitalize font weight-bold mt-3 mb-0">
               information:
               </p>
               <p className="text-muted lead">{info}</p>
              </div>
             </div>
             {/* end title */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
