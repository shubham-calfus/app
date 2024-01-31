"use client";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import { Button, Drawer } from "@/app/Material";
import AppsIcon from "@mui/icons-material/Apps";
import { MenuOptions } from "./navbar.constant";
import { menuOptionType } from "./navbar.interface";
import NavbarMenuCard from "./NavbarMenuCard";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState("45%");
  const [hoverMenu, setHoverMenu] = useState<SetStateAction<menuOptionType>>();
  const menuOptions: menuOptionType[] = MenuOptions;
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setDrawerWidth("45%");
  };

  const drawerButton = (
    <div className="cursor-pointer" onClick={() => toggleDrawer()}>
      <AppsIcon color="action" />
    </div>
  );

  const handleOptionHovered = (menuItem: menuOptionType) => {
    setDrawerWidth("70%");
    setHoverMenu((prevState: menuOptionType) => menuItem);
  };
  return (
    <div>
      {/* MAIN DRAWER */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => toggleDrawer()}
        transitionDuration={{ exit: 500, enter: 500 }}
        PaperProps={{
          sx: { width: drawerWidth },
          lg: { width: drawerWidth },
        }}
      >
        <div className="flex">
          {/* DRAWER CONTENT */}
          <div
            className={`pl-4 border-r border-gray-200 h-screen shadow-2xl ${
              drawerWidth == "45%" ? "w-full" : "w-6/12"
            }`}
          >
            <div className="py-2 pb-4">{drawerButton}</div>
            <h1 className="text-2xl font-medium">Apps</h1>
            {menuOptions.map((menuItem) => {
              return (
                <div
                  className={`${
                    hoverMenu?.title == menuItem.title ? "bg-slate-200/50" : ""
                  } min-w-full flex gap-3 mt-2 py-2 px-3 cursor-pointer hover:bg-slate-200/50 transition-colors rounded-l-md relative`}
                  key={menuItem.title}
                  onMouseEnter={() => handleOptionHovered(menuItem)}
                >
                  <Image
                    src={"/customers.svg"}
                    width={28}
                    height={28}
                    alt={menuItem.title}
                  />
                  <div className="flex flex-col ">
                    <span className="text-lg font-medium">
                      {menuItem.title}
                    </span>
                    <span className="text-sm font-normal">
                      {menuItem.description}
                    </span>
                  </div>

                  <div className="absolute text-xs top-[40%] right-4 text-base-secondary-400">
                    <ArrowForwardIosRoundedIcon
                      fontSize="inherit"
                      color="inherit"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {drawerWidth !== "45%" && (
            <div className="w-6/12 min-h-screen bg-slate-200/30 p-6">
              <NavbarMenuCard
                childrenMenu={hoverMenu?.childrenMenu}
                title={hoverMenu?.title}
                description={hoverMenu?.description}
                logoPath={hoverMenu?.icon}
              ></NavbarMenuCard>
            </div>
          )}
        </div>
      </Drawer>

      {/* NAVBAR */}
      <div className="flex md:w-6/12 w-vw">
        <div className="py-4 px-2">{drawerButton}</div>
        <Image
          src="./trade-full-logo.svg"
          width={150}
          height={100}
          alt="trade-full-logo"
          className="py-2"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
