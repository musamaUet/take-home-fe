import { ToastContainer } from "react-toastify";
import AppRouter from "./Approuter";
// import Sidebar from "./components/Layout/Components/Header";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
    <Layout>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable={false}
      closeOnClick
      pauseOnHover
    />
    {/* <Sidebar /> */}
    <AppRouter />
</Layout>
    </>
  );
}

export default App;
