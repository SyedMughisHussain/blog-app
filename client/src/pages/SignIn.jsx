import React from "react";
import Header from "../components/SignIn/Header";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const SignIn = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/auth/signin", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.data.token);
        navigate("/dashboard");
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  type="email"
                  required
                  ref={email}
                  placeholder="Email"
                  className="input input-bordered input-primary w-full "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  type="password"
                  required
                  ref={password}
                  placeholder="Password"
                  className="input input-bordered input-primary w-full  "
                />
              </div>
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

export default SignIn;
