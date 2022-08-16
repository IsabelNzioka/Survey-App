import React from "react";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Question3 = (props) => {
  const handleNext = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  return (
    <div>
      <TextField
        style={{ marginBottom: 25, width: "35rem" }}
        label={props.quiz3}
        variant="outlined"
        onChange={(e) => props.setQuestion3(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handlePrev}
        style={{ display: "inline-block", marginLeft: "20%", marginTop: 30 }}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleNext}
        style={{ display: "inline-block", marginLeft: "20%", marginTop: 30 }}
      >
        Next
      </Button>
    </div>
  );
};

export default Question3;
