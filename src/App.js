import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Tours from "./Tours";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CityDetails from "./CityDetails";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="city-details" element={<CityDetails />} /> */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
