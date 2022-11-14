import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Tours from "./Tours";
import { Routes, Route } from "react-router-dom";
import CityDetails from "./CityDetails";

export const ToursContext = React.createContext();

function App() {
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
      <Header />

      <ToursContext.Provider value={{tours}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/city-details/:id"
            element={<CityDetails />}/>
        </Routes>
      </ToursContext.Provider>
      <Footer />
    </>
  );
}

export default App;
