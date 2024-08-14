import React, { useState } from "react";
import { GrMenu } from 'react-icons/gr';
// import ProfileDropDown from "../../ProfileDropDown/ProfileDropDown";
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
return (
  <header id="header" className="header fixed bg-[#f9f9f9] border-b border-b-[#e5e5e5] top-0 z-10 flex-shrink-0 flex items-center gap-5 px-5 sm:px-10 sm:py-6 py-4 w-full left-0">
    <div className="topbar flex justify-between gap-x-5 w-full">
    <div className="flex sm:space-x-10 gap-x-5 items-center">
        <button
            type="button"
            className="text-blackrussian rounded-lg focus:outline-none xl:hidden menu-icon"
            // onClick={() => SettoggleSideBar(!toggleSideBar)}
          >
            <span className="sr-only">Open sidebar</span>
            <GrMenu className="h-6 w-6 !text-blackrussian" aria-hidden="true" />
        </button>
      </div>
      {/* <ProfileDropDown/> */}
      </div>
      <Sidebar />
  </header>
  );
};

export default Header

