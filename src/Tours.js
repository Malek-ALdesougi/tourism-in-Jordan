import React, { useState } from "react";
import { Link } from "react-router-dom";

function Tours(props) {
  
  return (
    <>
    <section className="d-flex gap-4 mb-5 mt-5 col-md-12 flex-wrap justify-content-center">
    {props.tours.map((item) => {
        return (
            <div className="card w-25 col-md-3" key={item.id}>
                  <img width={'200px'} height={'200px'} src={item.image} className="card-img-top" alt="Fissure in Sandstone"/>
               <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>                 
                  <Link to={'/city-details/'+ item.id}><button className="btn btn-dark">City Details</button></Link>
              </div>             
           </div> 
           )
        })}
        </section>
    </>
  );
}

export default Tours;
