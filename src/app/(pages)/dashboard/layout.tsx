import React from "react";
import Navbar from "./navbar/Navbar";

type props = {
  children: React.ReactNode;
  navbar: React.ReactNode;
};
// { children, navbar }: props
const DashboardLayout = ({ children, navbar }: any) => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>DashBoard</h1>
    </div>
  );
};

export default DashboardLayout;
