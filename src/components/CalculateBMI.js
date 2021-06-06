import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import UnderWeight from "../MealPlans/UnderWeight";
import NormalWeight from "../MealPlans/NormalWeight";
import OverWeight from "../MealPlans/OverWeight";
import Obese from "../MealPlans/Obese";
import useLocalStorage from "../localStorage/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function CalculateBMI() {
  const classes = useStyles();

  const [weight, setWeight] = useLocalStorage("weight", "");
  const [height, setHeight] = useLocalStorage("height", "");
  const [changer, setChanger] = useState("");

  const calculateBMI = () => {
    let heightDouble = height * 0.01;
    const formula = weight / (heightDouble * heightDouble);
    console.log(formula);
    setChanger(formula);
  };

  return (
    <div>
      <div className={`${classes.margin}`}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid className="d-block mx-auto" item>
            <i className="fas fa-ruler-vertical pt-4 pe-3"></i>
            <TextField
              type="text"
              name="height"
              placeholder="Example: 178"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              id="input-with-icon-grid1"
              label="Enter Your Height"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <div>
          <Grid container alignItems="flex-end">
            <Grid className="d-block mx-auto" item>
              <i className="fas fa-weight pt-4 pe-3"></i>
              <TextField
                type="text"
                name="weight"
                placeholder="Example: 79"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                id="input-with-icon-grid2"
                label="Enter Your Weight"
              />
            </Grid>
          </Grid>
        </div>
      </div>

      <Button primary className="mx-auto d-block" onClick={calculateBMI}>
        Submit
      </Button>
      {changer === "" ? (
        ""
      ) : (
        <h2 className="text-center">
          Your BMI is {Math.round(changer * 100) / 100}
        </h2>
      )}

      {changer === "" ? (
        ""
      ) : changer < 18.5 ? (
        <UnderWeight />
      ) : changer >= 18 && changer <= 25 ? (
        <NormalWeight />
      ) : changer >= 25 && changer <= 30 ? (
        <OverWeight />
      ) : changer >= 30.1 ? (
        <Obese />
      ) : (
        ""
      )}
    </div>
  );
}

export default CalculateBMI;
