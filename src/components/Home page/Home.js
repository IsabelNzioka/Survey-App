import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
// import { Routes, Route, Navigate } from "react-router-dom";
// import axios from "axios";

import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const survey = () => {
    navigate("/survey");
  };

  const response = () => {
    navigate("/response");
  };
  return (
    <div className="Home">
      <div className="Settings">
        <label className="label">Survey Questions</label>
      </div>
      <div className="btn">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={survey}
        >
          Survey
        </Button>
      </div>
      <div className="btn">
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={response}
        >
          Response
        </Button>
      </div>
    </div>
  );
};

export default Home;
