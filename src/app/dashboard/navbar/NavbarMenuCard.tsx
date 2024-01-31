"use client";
import React from "react";
import Image from "next/image";

type props = {
  childrenMenu: any[];
  title: string;
  description: string;
  logoPath: string;
};

const NavbarMenuCard = ({
  childrenMenu,
  title,
  description,
  logoPath,
}: props) => {
  return (
    <div>
      <div className="p-2 flex gap-3 pt-6 pb-16 border-b border-gray-600/10">
        <Image src={"./customers.svg"} width={45} height={45} alt={title} />
        <div className="text-lg flex flex-col ">
          <span className="font-medium">{title}</span>
          <span className="text-xs font-normal">{description}</span>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap py-4">
        {childrenMenu?.map((menu, index) => {
          return (
            <div
              className="hover:bg-slate-50 p-4 min-w-52 lg:w-5/12 rounded cursor-pointer"
              key={index}
            >
              <div className="text-xs font-medium">{menu.title}</div>
              <div className="text-xs font-normal text-base-secondary-400">
                {menu.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarMenuCard;
