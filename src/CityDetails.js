import { useParams } from "react-router-dom";
import Tours from "./Tours";


function CityDetails(props) {

    const {id} = useParams();
    
    console.log(props.tourss);

    let filterd = props.tourss.filter((element) => {

        return element.id == id ;
    });

    console.log(filterd[0]);





// console.log(id);

    return (

        <div className="d-flex justify-content-center mt-5 mb-5">
         <div className="card w-25 col-md-3" key={filterd[0].id}>
                  <img width={'200px'} height={'200px'} src={filterd[0].image} className="card-img-top" alt="Fissure in Sandstone"/>
               <div className="card-body">
                  <h2 className="card-title">{filterd[0].name}</h2>
                  <h5>Desctiption</h5>
                  <p className="card-text">{filterd[0].info}</p>
                  <span>price :</span><p style={{display: 'inline-block'}} className="card-text">{filterd[0].price}</p><br></br>
                  {/* <a><button className="btn btn-dark">City Details</button></a> */}
                  {/* <Link to={'/city-details/'+ item.id}>click me for details</Link> */}
              </div>             
           </div> 
        </div>
    )
}


export default CityDetails ;