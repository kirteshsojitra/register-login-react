import react from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Login from "./Login";

const Router = () => {
  const arr = [];
  const newArr = [];
  const getData = (obj) => {
    arr.push(obj);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<App data={getData} />} />
        <Route path="login" element={<Login sendData={arr} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
