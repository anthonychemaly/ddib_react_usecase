import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner } from "react-bootstrap";
import callGetIsAdultFunction from "./utils/contract";

const contractInfo = require("./assets/contractInfo.json");

const App = () => {
  const [loading, setLoading] = useState(false);
  const [isAdult, setIsAdult] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickBtn = async () => {
    setIsClicked(true);
    setLoading(true);
    const response = await callGetIsAdultFunction(contractInfo?.contractId);
    setIsAdult(response);
    setLoading(false);
  };

  return (
    <div className="hero">
      {loading ? (
        <Spinner size="lg" />
      ) : isClicked ? (
        isAdult ? (
          <div className="wrapper">
            <h3 className="heading">You are an adult. Welcome!</h3>
            <img src="/img.jpg" alt="welcome" className="image"/>
          </div>
        ) : (
          <h3 className="heading">
            You are not an adult and are not eligible to access this website.
          </h3>
        )
      ) : (
        <>
          <h3 className="heading">
            This is an adult only website. <br />
            Use your SSID to check for eligibility.
          </h3>
          <Button variant="primary" size="lg" onClick={handleClickBtn}>
            Check for eligibility
          </Button>
        </>
      )}
    </div>
  );
};

export default App;
