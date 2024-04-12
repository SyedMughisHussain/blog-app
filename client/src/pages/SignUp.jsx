import React, { useRef, useState } from "react";
import Header from "../components/SignUp/Header";

const SignUp = () => {
  const [image, setImage] = useState(null);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName.current.value);
    console.log(lastName.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(image);
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
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
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
