import React, { useState } from "react";
import CityDetails from "./CityDetails";

function Tours({showDetailss}) {
  const [tours, setTours] = useState([
    {
      id: 1,
      name: "Petra",
      info: "Every one knows petra there is no need to explain it",
      image:
        "https://media.istockphoto.com/photos/al-khazneh-in-petra-picture-id1170941515?k=20&m=1170941515&s=612x612&w=0&h=YDRnp2RmofIA5JIiD3xPgz43HpAiRysH7ZQNuRdqpWo=",
      price: 10,
    },
    {
      id: 2,
      name: "Aqaba",
      info: "aqaba is to hot in the summer and it has a beach in it wich is not bad",
      image: "https://thumbs.dreamstime.com/b/beach-sea-18378306.jpg",
      price: 199,
    },
    {
      id: 3,
      name: "Ajloon",
      info: "Ajloon is a good place to visit and it has nice views",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Ajloun_Castle.jpg",
      price: 79,
    },
    {
      id: 4,
      name: "AL-Salt",
      info: "AL-Salt is a good place to visit we recommend it vrey bad",
      image: "https://livinginjordanasexpat.com/dav-66/",
      price: 68,
    }, 
  ]);

  return (
    <>
        <section className="d-flex gap-4 mb-5 mt-5 col-md-12 flex-wrap justify-content-center">
    {tours.map((item) => {

        
        return (
            <div className="card w-25 col-md-3" key={item.id}>
                  <img width={'200px'} height={'200px'} src={item.image} className="card-img-top" alt="Fissure in Sandstone"/>
               <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  {/* <h5>Desctiption</h5> */}
                  {/* <p className="card-text">{item.info}</p> */}
                  {/* <span>price :</span><p style={{display: 'inline-block'}} className="card-text">{item.price}</p><br></br> */}
                  <button className="btn btn-dark" onClick={() => showDetailss(item)}>City Details</button>
              </div>
              
           </div> 
           )
        })}
        </section>
    </>
  );
}

export default Tours;
