"use client";
import React, { Children } from "react";
import Navbar from "./navbar/Navbar";

const layout = (props: any) => {
  return (
    <div className="h-full">
      <Navbar></Navbar>
      <div className="">{props.children}</div>.
    </div>
  );
};

export default layout;
