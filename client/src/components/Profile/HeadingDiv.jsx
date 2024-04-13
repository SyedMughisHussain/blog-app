import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HeadingDiv = () => {
  return (
    <div className="navbar bg-white py-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-black font-bold text-3xl ml-10">
          Profile
        </a>
      </div>
    </div>
  );
};

export default HeadingDiv;
