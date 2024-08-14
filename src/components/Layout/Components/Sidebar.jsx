import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { SidebarNavigation } from "../../../constants/sidebar";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const location = useLocation();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <div
      id="sidebar"
      className={`${
        toggleSideBar ? "xl:-left-full left-0" : "xl:left-0 -left-full"
      } sidebar flex-1 bg-white space-y-2 fixed top-0 sm:w-[20.625rem] w-full ease-in duration-700 h-screen`}
    >
      <div className="pt-10 sm:pt-16 pb-8 sm:pb-12 px-8 flex items-center justify-between">
        <Link to="/">Take Home</Link>
        <button
          type="button"
          className="text-blackrussian rounded-lg focus:outline-none xl:hidden menu-icon"
          onClick={() => setToggleSideBar(!toggleSideBar)}
        >
          <span className="sr-only">Open sidebar</span>
          <IoClose className="!text-blackrussian text-3xl" aria-hidden="true" />
        </button>
      </div>
      <ul className="space-y-1 overflow-auto px-5 h-[calc(100vh-12rem)] hideScrollbar">
        {SidebarNavigation.map((item, i) => (
          <div key={i}>
            <ul>
              {item.href !== "/rolemanagement" && (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? "!text-white bg-primary border-0"
                        : "",
                      "group flex items-center border-transparent text-blackrussian font-Avenir-Medium text-lg py-3 px-6 w-full hover:bg-primary hover:text-white rounded-md"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
