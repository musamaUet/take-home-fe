import React from "react";
import Header from "./Components/Header";

const Layout = ({children}) => {
return (
  <>
      <Header />
      <main id="main" className="main flex flex-grow flex-col">{children}</main>
      </>
  );
}

export default Layout;