import React, { useRef } from "react";
import Header from "../components/Dashboard/Header";
import axios from "axios";

const Dashboard = () => {
  const title = useRef();
  const description = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title.current.value);
    console.log(description.current.value);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="p-5 bg-white rounded-xl w-fit ml-80 mt-10">
          <div>
            <input
              type="text"
              required
              ref={title}
              placeholder="Title"
              className="input input-bordered input-primary w-[500px] mb-3"
            />
          </div>
          <div>
            <textarea
              required
              ref={description}
              className="textarea textarea-primary w-[500px]"
              placeholder="Whats in your mind"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary text-white">
            Publish Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
