import React from "react";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Question1 = (props) => {
  //   let navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className="TextArea">
      <TextField
        style={{ marginBottom: 25, width: "70vw" }}
        label={props.quiz1}
        variant="outlined"
        onChange={(e) => props.setQuestion1(e.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleNext}
        style={{ display: "block", marginLeft: "40%" }}
      >
        Next
      </Button>
    </div>
  );
};

export default Question1;
