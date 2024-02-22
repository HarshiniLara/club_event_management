import React from "react";
import { IoLogOut, IoTicket } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { TbLocationFilled } from "react-icons/tb";
import { MdExplore, MdSpaceDashboard } from "react-icons/md";

import Item from "../common/Item";
import { useSelector } from "react-redux";

const sideBarData = [
  {
    icon: MdSpaceDashboard,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: IoMdAddCircle,
    name: "Book Event",
    link: "/event/book",
  },
  {
    icon: MdExplore,
    name: "Explore",
    link: "/event/explore",
  },
];

const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="w-[15%] h-[100vh] rounded-lg justify-between flex flex-col  shadow bg-[#4A096D]">
      <div className=" ">
        <div className="flex flex-col gap-2 p-2">
          <h1 className="text-white font-bold text-center px-5 py-7 text-2xl">
            EVENT FLOW
          </h1>
          {sideBarData.map((item) => (
            <Item Icon={item.icon} name={item.name} link={item.link} />
          ))}
        </div>
      </div>
      <div className="flex flex-row bg-[#805298] rounded-lg px-2 py-4 items-center justify-evenly">
        <img className="bg-white h-12 w-12 rounded "></img>
        <div className="details p-1">
          <p className="text-md text-white font-bold">{user.name}</p>
          <p className="text-md text-white">Member</p>
        </div>
        <IoLogOut className="text-white w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
