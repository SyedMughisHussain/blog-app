import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = () => {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .get("http://localhost:3000/api/v1/auth/getProfile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data.user);
            setData(response.data.user);
            console.log(data);
          })
          .catch((err) => {
            console.log("Error:", err);
          });
      } else {
        navigate("/home");
      }
    };
    getUserData();
  }, []);

  console.log(data);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar bg-[#7749f8]">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-white">
          Personal Blogging App
        </a>
      </div>
      <div className="navbar-end">
        <Link to={"/profile"} className="text-white md:mr-10">
          {data ? (
            data.firstName + " " + data.lastName
          ) : (
            <span className="loading loading-spinner"></span>
          )}
        </Link>
        <button
          className="text-white md:mr-10"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
