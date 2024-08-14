import Layout from "@/src/Components/layout/Layout";
import React, { useState } from "react";

function AuthModule({ Component, pageProps }: any) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={`wrapper relative overflow-hidden min-h-screen flex flex-col  "pt-[7.5rem] xl:pl-[22.625rem] px-5 sm:px-8 pb-8"`}>
        <Layout toggleSideBar={sidebar} SettoggleSideBar={setSidebar}>
          <Component {...pageProps} />
        </Layout>
    </div>
  );
}

export default AuthModule;
