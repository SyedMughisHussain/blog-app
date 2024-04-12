import React from "react";
import Header from "../components/SignUp/Header";

const SignUp = () => {

   
    const handleSubmit = (event) => {
        event.preventDefault();
    }

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
                placeholder="First Name"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="text"
                required
                placeholder="Last Name"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="email"
                required
                placeholder="Email"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="password"
                required
                placeholder="Password"
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mt-2">
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
