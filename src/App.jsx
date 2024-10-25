import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className=" border-2 my-10 p-20">
        <Outlet />
      </div>
    </>
  );
}

export default App;
