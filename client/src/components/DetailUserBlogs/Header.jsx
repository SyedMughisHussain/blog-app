import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-[#7749f8]">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-white">
          Personal Blogging App
        </a>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="text-white md:mr-10">Login</Link>
      </div>
    </div>
  );
};

export default Header;
