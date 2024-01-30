import React from "react";
import Image from "next/image";
import { guidance } from "./guid.constant";

const Guid = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-xl w-96 h-fit">
      <div className="text-base font-bold flex gap-2">
        <Image src={"/rocket.svg"} height={25} width={25} alt="img"></Image>
        Guidance for success
      </div>

      {guidance.map((point) => {
        return (
          <div key={point.heading}>
            <div className="text-sm font-medium mt-8 mb-3 ">
              {point.heading}
              <div className="text-xs font-medium text-gray-500">
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

export default Guid;
