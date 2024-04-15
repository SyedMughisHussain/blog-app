import React, { useEffect, useState } from "react";
import Header from "../components/DetailUserBlogs/Header";
import HeadingDiv from "../components/DetailUserBlogs/HeadingDiv";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailUserBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [allblogs, setAllBlogs] = useState();

  const { id } = useParams();
  console.log(id);

  const getAllBlogsByUserId = () => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/v1/blog/getAllBlogsByUserId/${id}`)
      .then((res) => {
        setAllBlogs(res.data.blogs);
      })
      .catch((err) => {
        "Error:", err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllBlogsByUserId();
  }, []);

  console.log(allblogs);

  return (
    <div>
      <Header />
      <HeadingDiv />

      <div className="ml-[200px]">
        <h1 className="text-2xl text-white font-bold mt-5">All Form User</h1>

        {!loading ? (
          <div>
            {allblogs &&
              allblogs.map((blog, index) => {
                return (
                  <div key={index} className="dark:text-gray-800 my-5">
                    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-600">
                          {blog.createdAt}
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="text-2xl font-bold">{blog.title}</p>
                        <p className="mt-2">{blog.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center"
                          >
                            <img
                              src={blog.userAvatarUrl}
                              alt="avatar"
                              className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                            />
                            <span className="dark:text-gray-600 font-bold">
                              {blog.firstName + " " + blog.lastName}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <span className="loading loading-spinner mt-[150px] loading-lg ml-[600px]"></span>
        )}
      </div>
    </div>
  );
};

export default DetailUserBlogs;
