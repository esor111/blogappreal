import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const PF = "http://localhost:5000/images/";

const Post = () => {
  const blog = useSelector((state) => state.blog?.blog);

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          {blog.map((blog) => (
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card mb-5 shadow-sm" key={blog._id}>
                <Link
                to={`/post/${blog._id}`}
              >
              <img src={PF + blog.photo} class="img-fluid" alt="img" />

              </Link>
                <div class="card-body">
                  <div class="card-title">
                    <h2>{blog.title}</h2>
                  </div>
                  <div class="card-text">
                    <p>{blog.decs}</p>
                  </div>
                  <Link
                    to={`/post/${blog._id}`}
                    class="btn btn-outline-primary rounded-0 float-end"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
