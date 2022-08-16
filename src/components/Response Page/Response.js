import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";
// import "../Survey Page/Survey.css";
import "../Survey page/Survey.css";

const Response = () => {
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues(JSON.parse(localStorage.getItem("values")));
  }, []);

  const navigate = useNavigate();

  //   const {
  //     values: { question1, question2, question3, id },
  //   } = values;

  console.log("valus>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", values);

  function createData(surveyId, questionOne, questionTwo, questionThree) {
    return { surveyId, questionOne, questionTwo, questionThree };
  }

  const rows = [
    createData(values.id, values.question1, values.question2, values.question3),
  ];

  const handleNav = (e) => {
    e.preventDefault();
    navigate("/");
  };

  // const handleQ = (e) => {
  //   e.preventDefault();
  //   navigate(-3);
  // };
  return (
    <div className="Response">
      <h2 style={{ marginBottom: "10rem" }}>Survey Response</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>surveyId</TableCell>
              <TableCell align="center">Question1</TableCell>
              <TableCell align="center">Question2</TableCell>
              <TableCell align="center">Question3</TableCell>
            </TableRow>
          </TableHead>

          <TableBody></TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.surveyId}
              </TableCell>
              <TableCell align="center">{row.questionOne}</TableCell>
              <TableCell align="center">{row.questionTwo}</TableCell>
              <TableCell align="center">{row.questionThree}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleNav}
        style={{ display: "block", marginLeft: "40%", marginTop: "8rem" }}
      >
        Survey
      </Button>

      {/* <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleQ}
        style={{ display: "inline-block", marginLeft: "20%", marginTop: 30 }}
      >
        Another Surver
      </Button> */}
    </div>
  );
};

export default Response;

// Send data to Firebase
