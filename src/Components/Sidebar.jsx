import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) => {
    return `flex items-center space-x-2 p-2 rounded ${
      isActive(path)
        ? "bg-[#6941c6] text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  };

  const getIconClass = (path) => {
    return `text-2xl ${
      isActive(path) ? "text-white" : "bg-purple-100 text-purple-600"
    } rounded p-1`;
  };

  return (
    <aside className="bg-white w-[13.3rem] h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className={getLinkClass("/")}>
              <RxDashboard className={getIconClass("/")} />
              <span className="font-bold">Overview</span>
            </Link>
          </li>
          <li>
            <Link to="/people" className={getLinkClass("/people")}>
              <HiOutlineUsers className={getIconClass("/people")} />
              <span className="font-bold">People Directory</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
