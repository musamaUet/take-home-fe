import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import AppRouter from "./Approuter";
import Layout from "./components/Layout/Layout";
import './styles/Home.modules.css';

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="wrapper relative overflow-hidden min-h-screen flex flex-col xl:pl-[22.625rem] sm:px-8 pb-8">
      <Layout toggleSideBar={sidebar} setToggleSideBar={setSidebar}>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      <AppRouter />
    </Layout>
    </div>
  );
}

export default App;
