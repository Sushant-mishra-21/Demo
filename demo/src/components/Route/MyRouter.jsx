import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import React from "react";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

const MyRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRouter;