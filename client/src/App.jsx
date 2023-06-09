import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, Post } from "./assets/pages";
import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 pt-2 px-4 border-b border-b-[#e6ebf4] py-2">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link
          to="/Post"
          className="font-inter font-medium bg-green-400 rounded-full text-white px-4 py-2 "
        >
          Create Post
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
