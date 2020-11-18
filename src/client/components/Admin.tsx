import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import {IBlogProps} from "../utils/types"



const Admin: React.FC<IBlogProps> = (props: IBlogProps) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("")


  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/blogs/${props.id}`);
      let blog = await res.json();
      setName(blog.name);
      setContent(blog.content);
      setTitle(blog.title)
    })();
  }, []);

  const handleTextChange = (e) => setContent(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value); 

  const editBlog = async (id: string) => {
    await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content, title: title }),
    });

    props.history.push("/");
  };

  const deleteBlog = async (id: string) => {
    let res = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });
    props.history.push("/");
  };

  return (
    <section className="row" id="row1">
      <div
        className="card d-flex align-items-center shadow-lg text-center m-4 rounded text-danger bg-white "
        style={{ width: "20rem" }}
      >
        <div className="card-body ">
          <h5 className="card-title bg-light">@{name} </h5>
          <textarea
            className="card-text bg-white my-2"
            // placeholder="Edit Chirp Here"
            defaultValue={content}
            onChange={(e) => handleTextChange(e)}
          ></textarea>
          <br></br>
          <button
            className="btn btn-sm btn-outline-danger mx-2rounded "
            onClick={() => editBlog(req.match.params.id)}
          >
            Save Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger mx-2 rounded "
            onClick={() => deleteBlog(props.match.params.id)}
          >
            Delete Chirp
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
    </section>
  );
};

export interface IAdminProps extends RouteComponentProps<{ id: string }> {
  //  chirp = {
  //    id:string,
  //    name: string,
  //  content: string
  //  }
}

export default Admin;
