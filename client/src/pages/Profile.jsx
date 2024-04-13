import React, { useEffect, useState } from "react";
import Header from "../components/Dashboard/Header";
import HeadingDiv from "../components/Profile/HeadingDiv";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState();

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

  return (
    <>
      <Header />
      <HeadingDiv />
      {data ? (
        <div className="p-10">
          <div className="card card-side bg-white shadow-xl w-[600px]">
            <figure>
              <img
                src={data.avatar}
                alt="Avatar"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">{data.firstName + " " + data.lastName}</h2>
              <p className="mt-5">{data.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <progress className="progress flex mt-[200px] ml-[550px] w-56"></progress>
      )}
    </>
  );
};

export default Profile;
