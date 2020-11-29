import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { IBlogProps } from "../utils/types";

const Admin: React.FC<IAdminProps> = (props: IAdminProps) => {
  const [blog, setBlog] = useState<IBlogProps>({
    id: 0,
    title: "",
    content: "",
    name: "",
    _created:0
  });

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/blogs/${props.match.params.id}`);
      let blog = await res.json();
      console.log(blog[0]);
      setBlog(blog[0]);
    })();
  }, []);

  const handleChange = (e) =>
    setBlog({
      id: blog.id,
      title: blog.title,
      content: e.target.value,
      name: blog.name,
      _created:blog._created
    });

  const editBlog = async (id: number, content:string) => {
    await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    });

    //"/"
    props.history.push("/");
  };


  const deleteBlog = async (id:number) => { 
    await fetch(`/api/blogs/${props.match.params.id}`, {
      method: "DELETE",
    });
    props.history.push("/");
  };

  return (
    <div className="container">
      <section className="row" id="row1">
        <div className="col 12 d-flex align-items-center justify-content-center">
          <div
            className="card  shadow-lg text-center m-4 rounded text-dark bg-white "
            style={{ width: "20rem" }}
          >
            <div className="card-body ">
              <h5 className="card-title bg-light text-muted font-weight-normal">
                Edit/Delete Blog Entry
              </h5>
              <h5>{blog.name}'s Entry</h5>
              {blog.tags?.map((tag: { name: string }) => <span className="badge badge-pill badge-secondary">{tag.name}</span>)}
              <p></p>
              <p>{blog.title}</p>
              <textarea
                className="card-text bg-white my-2"
                defaultValue={blog.content}
                onChange={(e) => handleChange(e)}
              ></textarea>
              <br></br>
              <button
                className="btn btn-sm btn-outline-dark mx-2 rounded "
                onClick={() => editBlog(blog.id, blog.content)}
              >
                Save Edit
              </button>
              <button
                className="btn btn-sm btn-outline-dark mx-2 rounded "
                onClick={() => deleteBlog(blog.id)}
              >
                Delete Blog
              </button>

              <Link to="/">
                <button
                  type="button"
                  className="btn btn-sm mx-2 my-2 btn-outline-dark"
                >
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export interface IAdminProps extends RouteComponentProps<{ id: string }> {}

export default Admin;
