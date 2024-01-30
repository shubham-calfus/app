"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { AppStore } from "@/lib/store";
import bgImg from "";

const Layout = ({
  children,
  overview,
}: {
  children: React.ReactNode;
  overview: React.ReactNode;
}) => {
  const isLoading: boolean = useSelector((state: AppStore) => true);

  return (
    <>
      <div
        className="min-h-full md:flex flex-wrap justify-between"
        style={{
          backgroundImage: `url('https://e1.pxfuel.com/desktop-wallpaper/171/316/desktop-wallpaper-sunset-at-mountain-vorderglarnisch-in-glarus-switzerland-in-2560x1440-resolution-green-switzerland.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {children}
        {overview}
      </div>
    </>
  );
};

export default Layout;
