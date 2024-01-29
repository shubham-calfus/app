"use client";
import React, { Children } from "react";
import Navbar from "./navbar/Navbar";

const layout = (props: any) => {
  return (
    <div>
      <Navbar></Navbar>
      {props.children}
    </div>
  );
};

export default layout;
