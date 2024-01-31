"use client";
import React, { Children } from "react";
import Navbar from "./navbar/Navbar";

const layout = (props: any) => {
  return (
    <div className="h-full">
      <div className="h-10">
        <Navbar></Navbar>
      </div>
      <div className="">{props.children}</div>
    </div>
  );
};

export default layout;
