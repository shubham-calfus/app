"use client";
import React, { ReactNode } from "react";
import { Button } from "@/app/Material";
import FormLayout from "./FormLayout";

type props = {
  children: React.ReactNode;
  form: React.ReactNode;
  guide: React.ReactNode;
  businessInformationForm: React.ReactNode;
  stepper: React.ReactNode;
  tradeFullSolutions: React.ReactNode;
  customerContact: React.ReactNode;
};

const layout = (props: props) => {
  const {
    children,
    form,
    guide,
    stepper,
    businessInformationForm,
    customerContact,
    tradeFullSolutions,
  } = props;

  return (
    <div className="my-4 mx-6 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-6 py-4 border border-stroke-medium">
      <div className="border-b flex justify-between border-stroke-medium pb-4">
        <div className="text-2xl font-medium">Customer Setup Wizard</div>
        <div className="flex gap-3">
          <Button
            // onClick={handleNext}
            size="small"
            variant="outlined"
          >
            Back
            {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
          </Button>
          <Button
            // disabled={index === 0}
            // onClick={handleBack}
            size="small"
            variant="contained"
          >
            Continue
          </Button>
        </div>
      </div>
      <div className="flex">
        {/* <div className="w-3/12 pl-4">{children}</div> */}
        <div className="w-1/5 my-6 ml-8">{stepper}</div>
        <FormLayout>
          {tradeFullSolutions}
          {/* <div >{businessInformationForm}</div>
          <div >{customerContact}</div>
          <div >{tradeFullSolutions}</div> */}
          {/* <div className="mt-">{guide}</div> */}
        </FormLayout>
        {/*  */}
      </div>
    </div>
  );
};

export default layout;
