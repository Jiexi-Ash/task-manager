import React from "react";
import Logo from "../svgs/logo-dark.svg";
import IconBoard from "../svgs/icon-board.svg";
import Link from "next/link";

function SideNav() {
  return (
    <div className="lg:translate-x- 0 fixed inset-y-0 w-full max-w-[250px] -translate-x-80 transform shadow   transition duration-200 ease-in lg:translate-x-0">
      <div className="relative flex h-full flex-col   lg:mr-6 lg:py-8">
        <div className="px-9">
          <Logo className="h-8 w-40" />
        </div>

        <div className="mt-14 w-full">
          <ul className="space-y-2">
            <li className="flex w-full cursor-pointer items-center space-x-4 rounded-r-full bg-primaryPurple px-9 py-4 text-white">
              <IconBoard />
              <Link href="/">
                <a className=" text-[15px] font-bold ">Platform Launch</a>
              </Link>
            </li>
            <li className="group flex w-full items-center space-x-4 rounded-r-full  px-9 py-4 text-mediumGray transition duration-200 ease-in-out hover:bg-[#E8E7E7]">
              <IconBoard className="group-hover:text-primaryBlack" />
              <Link href="/">
                <a className=" text-[15px] font-bold group-hover:text-primaryBlack">
                  Marketing Plan
                </a>
              </Link>
            </li>
            <li className="flex w-full items-center space-x-4 rounded-r-full px-9  py-4 text-mediumGray">
              <IconBoard className="" />
              <Link href="/login">
                <a className=" text-[15px] font-bold ">Roadmap</a>
              </Link>
            </li>
          </ul>

          <div className="group mt-6 flex items-center space-x-4 px-9">
            <span className="font-bold  text-primaryPurple group-hover:cursor-pointer">
              <IconBoard />
            </span>
            <span className="font-bold capitalize text-primaryPurple group-hover:cursor-pointer">
              +create new board
            </span>
          </div>
        </div>

        <div className="absolute bottom-10  w-full">
          <div className="mx-9 rounded-lg bg-lightGray  py-6"></div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
