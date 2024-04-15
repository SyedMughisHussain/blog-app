import React, { useRef, useState } from "react";
import Header from "../components/Dashboard/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const title = useRef();
  const description = useRef();

  const showToastMessage = () =>
    toast.success("Blog Deleted Successfully!", {
      position: "top-right",
    });

  const deleteBlog = (index) => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .delete(`http://localhost:3000/api/v1/blog/${blogs[index]._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setBlogs(blogs.filter((blog, i) => i !== index));
          showToastMessage();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/home");
    }
  };

  const editTodo = (index) => {
    const token = localStorage.getItem("token");
    if (token) {
      const newTitle = prompt("Enter a new title");
      const newDescription = prompt("Enter a new description");
      const data = {
        title: newTitle,
        description: newDescription,
      };
      axios
        .patch(`http://localhost:3000/api/v1/blog/${blogs[index]._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setBlogs(
            blogs.map((blog, i) =>
              i === index
                ? { ...blog, title: newTitle, description: newDescription }
                : blog
            )
          );
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } else {
      navigate("/home");
    }
  };

  const getBlogs = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/v1/blog/getLoginUserBlogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setBlogs(res.data.blogs);
          console.log(res.data.blogs);
        })
        .catch((err) => {
          console.log("Error: ",err);
        });
    } else {
      navigate("/home");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post(
          "http://localhost:3000/api/v1/blog",
          {
            title: title.current.value,
            description: description.current.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.blog);
          setBlogs([response.data.blog, ...blogs]);
        })
        .catch((err) => {
          console.log("Error: ", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      navigate("/home");
    }
    title.current.value = "";
    description.current.value = "";
  };

  console.log(blogs);

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="p-5 bg-white rounded-xl max-w-4xl mt-10 mx-auto">
          <div>
            <input
              type="text"
              required
              minLength={50}
              ref={title}
              placeholder="Title"
              className="input input-bordered input-primary w-full mb-3"
            />
          </div>
          <div>
            <textarea
              required
              minLength={150}
              ref={description}
              className="textarea textarea-primary w-full"
              placeholder="Whats in your mind"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary text-white">
            Publish Blog
          </button>
        </div>
      </form>

      <div className="ml-[200px]">
        <h1 className="text-2xl text-white font-bold mt-5">My Blogs</h1>
      </div>
      {!loading ? (
        <div>
          {blogs &&
            blogs.map((blog, index) => {
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
                      <button
                        onClick={() => {
                          editTodo(index);
                        }}
                        className="text-blue-600 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deleteBlog(index);
                        }}
                        className="mr-96 text-blue-600 cursor-pointer"
                      >
                        Delete
                      </button>
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
        <span className="loading loading-spinner mt=[50px] loading-lg ml-[600px]"></span>
      )}
      <ToastContainer />
    </>
  );
};

export default Dashboard;
