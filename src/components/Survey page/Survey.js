import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../Survey page/Survey.css";

import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
// import Response from "../Response Page/Response";

const Survey = () => {
  const [quiz1, setQuiz1] = useState(null);
  const [quiz2, setQuiz2] = useState(null);
  const [quiz3, setQuiz3] = useState(null);
  const [values, setValues] = useState({});

  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);
  const [question3, setQuestion3] = useState(null);
  const [options, setOptions] = useState(null);
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);
  const [id, setId] = useState(0);

  let navigate = useNavigate();

  const nextStep1 = () => {
    setStep(step + 1);
    setId(id + 1);
  };
  const nextStep = () => {
    setStep(step + 1);
    if (!question1 || !question2 || !question3) {
      setError(true);
    }
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://run.mocky.io/v3/d628facc-ec18-431d-a8fc-9c096e00709a"
      );
      setQuiz1(response.data.strings.en.q_farmer_name);
      setQuiz2(response.data.strings.en.q_farmer_gender);
      setQuiz3(response.data.strings.en.q_size_of_farm);

      const myOptions = [
        response.data.strings.en.opt_male,
        response.data.strings.en.opt_female,
        response.data.strings.en.opt_other,
      ];
      setOptions(myOptions);
    };
    getData();
  }, []);

  useEffect(() => {
    // const values = { question1, question2, question3, id };
    setValues({ question1, question2, question3, id });
    localStorage.setItem("values", JSON.stringify(values));
  }, [id, question1, question2, question3, values]);

  return (
    <div className="Survey">
      <div className="settings_select">
        <h4 className="Heading-secondary">Survey Questions</h4>
        {/* {questions ? (
          <></>
        ) : (
          <CircularProgress
            style={{ margin: 70 }}
            color="inherit"
            size={100}
            thickness={1}
          />
        )} */}

        {(() => {
          switch (step) {
            case 1:
              return (
                <Question1
                  quiz1={quiz1}
                  nextStep={nextStep1}
                  setQuestion1={setQuestion1}
                  error={error}
                />
              );
            case 2:
              return (
                <Question2
                  quiz2={quiz2}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setQuestion2={setQuestion2}
                  question2={question2}
                  options={options}
                />
              );
            case 3:
              return (
                <Question3
                  quiz3={quiz3}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setQuestion3={setQuestion3}
                  values={values}
                />
              );

            default:
              return navigate("/");
          }
        })()}
      </div>
    </div>
  );
};

export default Survey;
