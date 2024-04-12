import React, { useRef, useState } from "react";
import Header from "../components/SignUp/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName.current.value);
    formData.append("lastName", lastName.current.value);
    formData.append("email", email.current.value);
    formData.append("password", password.current.value);
    formData.append("avatar", image);
    axios
      .post("http://localhost:3000/api/v1/auth/signup", formData)
      .then((response) => {
        console.log(response.data.data.user);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mt-2">
              <input
                type="text"
                required
                ref={firstName}
                placeholder="First Name"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="text"
                required
                ref={lastName}
                placeholder="Last Name"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="email"
                required
                ref={email}
                placeholder="Email"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="password"
                required
                ref={password}
                placeholder="Password"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="file"
                required
                name="avatar"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>

            {loading ? (
              <button className="btn w-full bg-indigo-600">
                <span className="loading loading-spinner"></span>
                Signing Up
              </button>
            ) : (
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
