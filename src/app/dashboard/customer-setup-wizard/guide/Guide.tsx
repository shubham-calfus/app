import React from "react";
import Image from "next/image";
import { guidance } from "./guide.constant";

const Guide = () => {
  return (
    <div className="p-6 bg-background-medium rounded-xl w-80 h-fit">
      <div className="text-base font-bold flex gap-2">
        <Image src={"/rocket.svg"} height={25} width={25} alt="img"></Image>
        Guidance for success
      </div>

      {guidance.map((point) => {
        return (
          <div key={point.heading}>
            <div className="text-sm font-medium mt-8 mb-3 ">
              {point.heading}
              <div className="text-xs font-medium text-base-secondary-500">
                {point.description}
              </div>
            </div>

            {point.points.map((tip) => {
              return (
                <div
                  className="text-xs font-medium my-2 flex gap-2"
                  key={tip.title}
                >
                  <Image
                    src={tip.icon}
                    height={20}
                    width={20}
                    alt="img"
                  ></Image>
                  {tip.title}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Guide;
