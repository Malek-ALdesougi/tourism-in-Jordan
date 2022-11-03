import React from "react";
import Tours from "./Tours";

function Home() {
  const showDetails = (element) => {
    console.log(element.info);
  };

  return (
    <>
      <h1 className={"d-flex justify-content-center text-warning"}>
        Home page
      </h1>
      <Tours showDetailss={showDetails} />
    </>
  );
}

export default Home;
