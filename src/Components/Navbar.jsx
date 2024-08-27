import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <nav className="bg-white border-2 p-4 flex justify-between items-center z-10">
      <h1 className="text-[2.6rem] font-bold text-[#6941c6] pl-2">PEOPLE.CO</h1>
      <div className="flex items-center gap-3 pr-2">
        <IoMdNotificationsOutline className="text-xl " />
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <span className="mr-2 text-md font-medium">Jane Doe</span>
      </div>
    </nav>
  );
}

export default Navbar;
