import React from 'react';
import { Link } from 'react-router-dom';

const HeadingDiv = () => {
  return (
    <div className="navbar bg-white py-4">
      <div className="navbar-start">
        <Link to = {"/home"} className="btn btn-ghost text-black font-bold text-3xl ml-10">
          Back to All Blogs
        </Link>
      </div>
    </div>
  );
};

export default HeadingDiv;
