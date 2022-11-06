import React from "react";
import Tours from "./Tours";

function Home(props) {

  return (
    <>
      <h1 className={"d-flex justify-content-center text-warning"}>Home page</h1>
      <Tours tours={props.tours} />
    </>
  );
}

export default Home;
