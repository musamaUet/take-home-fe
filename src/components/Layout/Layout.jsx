import React from "react";
import Header from "./Components/Header";

const Layout = ({ children, toggleSideBar, setToggleSideBar }) => {
return (
  <>
    <Header toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
    <main id="main" className="main flex flex-grow flex-col">{children}</main>
  </>
  );
}

export default Layout;