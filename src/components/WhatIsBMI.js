import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HotelIcon from "@material-ui/icons/Hotel";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function WhatIsBMI() {
  const classes = useStyles();

  return (
    <div className="full">
      <Navbar />
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
              elevation={3}
              className={classes.paper}
            >
              <Typography variant="h6" component="h1">
                What is BMI?
              </Typography>
              <Typography>
                Body mass index (BMI) is a person’s weight in kilograms divided
                by the square of height in meters. BMI is an inexpensive and
                easy screening method for weight category—underweight, healthy
                weight, overweight, and obesity.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <FitnessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
              elevation={3}
              className={classes.paper}
            >
              <Typography variant="h6" component="h1">
                Why is BMI used to measure overweight and obesity?
              </Typography>
              <Typography>
                Because calculation requires only height and weight, BMI is an
                inexpensive and easy tool.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
              elevation={3}
              className={classes.paper}
            >
              <Typography variant="h6" component="h1">
                How is BMI calculated?
              </Typography>
              <Typography>Formula: weight (kg) / [height (m)]2</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <FavoriteBorderIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
              elevation={3}
              className={classes.paper}
            >
              <Typography variant="h6" component="h1">
                How is BMI interpreted for adults?
              </Typography>
              <Typography>
                The standard weight status categories associated with BMI ranges
                for adults are shown in the following table. BMI Weight Status
                Below 18.5 Underweight 18.5 – 24.9 Normal or Healthy Weight 25.0
                – 29.9 Overweight 30.0 and Above Obese
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
