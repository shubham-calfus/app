"use client";
import { Step, StepLabel, Stepper, Box, Typography } from "@/app/Material";
import React, { useState } from "react";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import StepConnector from "@mui/material/StepConnector";
import DoneIcon from "@mui/icons-material/Done";
import TripOriginRoundedIcon from "@mui/icons-material/TripOriginRounded";
import { useDispatch, useSelector } from "react-redux";
import { markStepAsCompleted } from "@/lib/features/customerRegistrationSlice/customerRegistrationSlice";
import { AppStore } from "@/lib/store";

const steps = [
  {
    title: "Customer Details",
    childrenSteps: [
      {
        childTitle: "Business Information",
      },
      {
        childTitle: "Contact and roles",
      },
      {
        childTitle: "Tradefull Solutions",
      },
    ],
  },
  {
    title: "Supporting Documents",
    childrenSteps: [
      {
        childTitle: "Document Upload",
      },
      {
        childTitle: "Additional Assets",
      },
      {
        childTitle: "Notes",
      },
    ],
  },
  {
    title: "Review & Submit",
    childrenSteps: [],
  },
];

const CustomerRegistration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepChild, setActiveStepChild] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const dispatch = useDispatch();
  const completedSteps = useSelector((state: AppStore) => state.steps);
  const handleStepCompletion = (title: string, childTitle: string) => {
    dispatch(markStepAsCompleted({ title, childTitle }));
  };

  return (
    <div className="p-2 py-4 px-6">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.title}>
              <StepLabel
                icon={
                  activeStep >= step.childrenSteps.length ? (
                    <TripOriginRoundedIcon color="primary" fontSize="small" />
                  ) : (
                    <DoneIcon color="success" fontSize="small" />
                  )
                }
              >
                {step.title}
              </StepLabel>
              <StepContent>
                <Stepper
                  connector={<StepConnector className="hidden" />}
                  activeStep={activeStepChild}
                  orientation="vertical"
                >
                  {step.childrenSteps.map((childStep, index) => (
                    <Step key={childStep.childTitle}>
                      <StepLabel
                        icon={
                          activeStep <= index ? (
                            <TripOriginRoundedIcon
                              color="primary"
                              fontSize="small"
                            />
                          ) : (
                            <DoneIcon color="success" fontSize="small" />
                          )
                        }
                      >
                        {childStep.childTitle}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
};

export default CustomerRegistration;
