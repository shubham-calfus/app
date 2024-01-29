"use client";
import React, { ReactNode } from "react";

const layout = ({
  children,
  form,
}: {
  children: React.ReactNode;
  form: React.ReactNode;
}) => {
  return (
    <div className="m-2 border border-gray-400/30 rounded shadow-lg p-2">
      <div className="text-2xl font-medium border-b py-3">
        Customer Setup Wizard
      </div>
      <div className="flex ">
        <div className="w-7/12">{children}</div>
        <div className="w-9/12">{form}</div>
      </div>
    </div>
  );
};

export default layout;
