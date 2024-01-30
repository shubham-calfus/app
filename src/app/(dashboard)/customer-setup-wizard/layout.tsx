"use client";
import React, { ReactNode } from "react";
import { Button } from "@/app/Material";

type props = {
  children: React.ReactNode;
  form: React.ReactNode;
};

const layout = (props: props) => {
  const { children, form } = props;
  console.log("prop", props);
  return (
    <div className="my-4 mx-6 rounded-xl shadow-xl p-2 border">
      <div className="py-4 px-6 border-b flex justify-between">
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
        <div className="w-3/12 pl-4">{children}</div>
        <div className="w-11/12">{form}</div>
      </div>
    </div>
  );
};

export default layout;
