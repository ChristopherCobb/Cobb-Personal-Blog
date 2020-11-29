import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IBlogProps} from "../utils/types";

const NewBlog: React.FC<IBlogProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tags, setTags] = useState<([])>([])

  const handleClick = (e) => {
    e.preventDefault();
    newBlog();
  };

  const history = useHistory();

  const newBlog = async () => {
    const blog = {
      name: name,
      title: title,
      content: content,
      email: email,
      tags: []
    };

    let res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    if (res.ok) {
      console.log("Blog successfully posted");
      history.push("/");
    } else {
      console.log("Blog not posted");
    }
  };

  return (
    <form className=" d-flex justify-content-center align-items-center my-4">
      <div
        className="form-group col-6 my-4 shadow-lg border text-white border-dark rounded mt-3 text-center"
        style={{ backgroundColor: "#7952b3" }}
      >
        <label className="my-2">Authored By</label>
        <input
          type="text"
          className="form-control my-2"
          id="username-form"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="">Email</label>
        <input
          type="text"
          className="form-control my-2"
          id="username-form"
          placeholder="@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="">Title of Blog Post</label>
        <input
          type="text"
          className="form-control my-2"
          id="username-form"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Tags</label>
        <select className="form-control">
          <option>Coding</option>
          <option>Sports</option>
          <option>Pop Culture</option>
          <option>Politics</option>
          <option>Food</option>
          <option>Reading</option>
        </select>

        <div className="form-group my-2">
          <label className="">Blog Content</label>
          <textarea
            className="form-control my-2"
            aria-label="With textarea"
            value={content}
            id="message-form"
            placeholder="Enter Blog Post Here"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {/* ></input> */}
        </div>
        <button
          type="submit"
          className="btn btn-outline-warning w-20 mx-auto shadow-sm mb-2"
          onClick={(e) => handleClick(e)}
        >
          Publish Blog!
        </button>
      </div>
    </form>
  );
};

export default NewBlog;
