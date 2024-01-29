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
  console.log("======>", completedSteps);
  const handleStepCompletion = (title: string, childTitle: string) => {
    dispatch(markStepAsCompleted({ title, childTitle }));
  };

  return (
    <div className="border-2 border-red-400 p-2">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper
          alternativeLabel={true}
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((step, index) => (
            <Step key={step.title}>
              <StepLabel
                icon={
                  activeStep <= step.childrenSteps.length ? (
                    <TripOriginRoundedIcon color="primary" fontSize="small" />
                  ) : (
                    <DoneIcon color="success" fontSize="small" />
                  )
                }
              >
                {step.title} --{step.childrenSteps.length} - {activeStep} --{" "}
                {activeStep <= step.childrenSteps.length ? "true" : "false"}
              </StepLabel>
              <StepContent>
                <Stepper
                  connector={<StepConnector className="hidden" />}
                  activeStep={activeStep}
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

        <div>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 1, mr: 1 }}
          >
            Next
            {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
          </Button>
          <Button
            // disabled={index === 0}
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Back
          </Button>
        </div>

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
