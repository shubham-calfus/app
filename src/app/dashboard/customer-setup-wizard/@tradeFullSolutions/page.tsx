"use client";
import React from "react";
import Guide from "../guide/Guide";
import { data } from "./tradeFullSolutions.constant";
import Image from "next/image";
const TradeFullSolutions = () => {
  return (
    <>
      <div className="border-l pl-8">
        <div className="py-6">
          Based on customer agreement, following are the offer details
        </div>
        <div className="flex gap-3 justify-between border-t-2 py-4">
          <div className="flex-grow">
            {data.map((row, index) => {
              return (
                <>
                  <div key={row.heading} className="border-dashed border-b ">
                    <Card data={row.child} heading={row.heading}></Card>
                  </div>
                </>
              );
            })}
          </div>
          <Guide />
        </div>
      </div>
    </>
  );
};

export default TradeFullSolutions;

const Card = ({ data, heading }: any) => {
  console.log("data", data);
  // const { logo, name, products, monthlyRevenue, yearlyRevenue } = children;
  return (
    <>
      <div className="mb-4">-{heading}</div>
      {data.map((row: any, index) => {
        return (
          <div
            key={index}
            className="flex justify-between  rounded overflow-hidden shadow-lg p-6 mb-6 border"
          >
            <div className="flex items-center">
              <Image className="w-10 h-10 mr-4" src={row.logo} alt={""} />
              <h1 className="text-xl font-bold">{row.name}</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="text-sm font-normal">No. of Products</p>
                <p className="text-base  font-normal">{row.productCount}</p>
              </div>
              <div>
                <p className="text-sm font-normal">Total Monthly Revenue</p>
                <p className="text-base  font-normal">${row.monthlyRevenue}</p>
              </div>
              <div>
                <p className="text-sm font-normal">Total Yearly Revenue</p>
                <p className="text-base  font-normal">${row.yearlyRevenue}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};