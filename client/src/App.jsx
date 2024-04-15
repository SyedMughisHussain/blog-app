import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import HomeBlogs from "./pages/HomeBlogs";
import Profile from "./pages/Profile";
import DetailUserBlogs from "./pages/DetailUserBlogs";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!token ? <HomeBlogs /> : <Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<HomeBlogs />} />
        <Route path="/detailuserblogs/:id" element={<DetailUserBlogs />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
