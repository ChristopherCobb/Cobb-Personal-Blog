import React, { useState, useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";
import type { IBlogProps } from "../.././client/utils/types";

const Timeline: React.FC<IBlogProps> = () => {
  const [blogs, setBlogs] = useState<IBlogProps[]>([]);

  React.useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    console.log("fetching blogs");
    try {
      let res = await fetch("/api/blogs/");
      let blogs = await res.json();
      blogs.reverse();
      setBlogs(blogs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="row" id="row1">
      {blogs.map((blog: IBlogProps) => (
        <div
          key={blog.id}
          className="card d-flex justify-content-center align-items-center shadow text-center m-4 rounded text-dark"
          style={{ width: "20rem" }}
        >
          <img
            className="card-img-top"
            src="https://cpng.pikpng.com/pngl/s/112-1127483_nyan-cat-wearing-sunglasses-coloring-page-sunglasses-2048.png"
            alt="Blog Image"
            style={{ height: "300", width: "20rem" }}
          ></img>
          <div className="card-body">
            <h5>
              Written By: {blog.name}
              <p className="card-title text-muted bg-light my-2">
                {blog.title}
              </p>
              <span className="date-created" style={{ color: "#7952b3" }}>
                {moment(blog._created).format("MMM Do, YYYY")}
              </span>
             <p></p>
              <Link to={`/blogs/${blog.id}/details`}>
                <button type="button" className="btn btn-outline-secondary">
                  View This Blog
                </button>
              </Link>
            </h5>
          </div>
        </div>
      ))}
    </section>
  );
};

interface BlogProp {
  id?: number;
  title: string;
  name: string;
  content: string;
  authorid: string;
}

export default Timeline;
