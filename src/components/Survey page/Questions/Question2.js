import React from "react";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const Question2 = (props) => {
  const handleNext = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div className="TextArea">
      <TextField
        select
        label={props.quiz2}
        style={{ marginBottom: 25, width: "70vw" }}
        variant="outlined"
        onChange={(e) => props.setQuestion2(e.target.value)}
        value={props.question2}
      >
        {props.options.map((optn) => (
          <MenuItem key={optn} value={optn}>
            {optn}
          </MenuItem>
        ))}
      </TextField>
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

export default Question2;
