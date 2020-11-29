import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { IBlogProps } from "../utils/types";
import * as moment from "moment";

const OneBlog: React.FC<SingleBlogProps> = (props: SingleBlogProps) => {
  const [blog, setBlog] = useState<IBlogProps>({
    id: 0,
    title: "",
    content: "",
    authorid: null,
    _created: 0,
    name: "",
  });

  useEffect(() => {
    const getBlog = async () => {
    
      let res = await fetch(`/api/blogs/${props.match.params.id}`);
      let blogs = await res.json();

      setBlog(blogs[0]);
    };

    getBlog();
  }, []);

  return (
    <div className="container">
      <section className="row" id="row2">
        <div className="col 12 d-flex justify-content-center align-items-center">
          <div
            className="card my-4 shadow text-center rounded text-dark"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://cpng.pikpng.com/pngl/s/112-1127483_nyan-cat-wearing-sunglasses-coloring-page-sunglasses-2048.png"
              alt="Blog Image"
              style={{ height: "300", width: "20rem" }}
            ></img>

            <div className="card-body">
              <h5 className="font-weight-normal">
                Blog Entry:
                <p className="card-title text-muted bg-light font-weight-normal my-2">
                  {blog.title}
                </p>
                <p className="card-subtitle mb-2 my-2 text-muted font-weight-light font-italic">
                  {blog.content}
                </p>
                <span className="date-created" style={{ color: "#7952b3" }}>
                  {moment(blog._created).format("MMM Do, YYYY")}
                </span>
                <p></p>
                <Link to={`/blogs/${props.match.params.id}/admin`}>
                  <button type="button" className="btn btn-outline-secondary">
                    Edit/Delete Blog
                  </button>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


interface SingleBlogProps extends RouteComponentProps<{ id: string }> { }

export default OneBlog;
