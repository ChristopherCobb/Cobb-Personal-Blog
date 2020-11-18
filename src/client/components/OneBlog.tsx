// import { json } from "express";
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { IBlogProps } from "../utils/types";
// import * as moment from "moment";

// const OneBlog: React.FC<IBlogProps> = (props: IBlogProps) => {
//   const [blog, setBlog] = useState<IBlogProps[]>([]);
//   let { id } = useParams();

//   useEffect(() => {
//     const getBlog = async () => {
//     //   let blog = {
//     //       id: id,
//     //       title: title,
//     //       content: content
//     //   }
//       let res = await fetch(`/api/blogs/${id}`);
//       let blogs = await res.json();

//       setBlog(blogs);
//     };

//     getBlog();
//   }, [id]);

//   return (
//     <section className="row" id="row2">
//       <div key = {props.id} className="card d-flex justify-content-center align-items-center shadow text-center m-4 rounded text-dark">
//         <div className="card-body">
//           <h5>
//             Written By: {props.name}
//             <p className="card-title text-muted bg-light my-2">{props.title}</p>
//             <span className="date-created" style={{ color: "#7952b3" }}>
//               {moment(props._created).format("MMM Do, YYYY")}
//             </span>
//             <p></p>
//             <Link to={`/blogs/${id}/admin`}>
//               <button type="button" className="btn btn-outline-secondary">
//                 Edit/Delete Blog
//               </button>
//             </Link>
//           </h5>
//         </div>
//       </div>
//     </section>
//   );
// };

// // <div key={props.id} className="card" style={{ width: "18rem" }}>
// //   <div className="card-body">
// //     <h5 className="card-title">{props.title}</h5>
// //     <h6 className="card-subtitle mb-2 text-muted">{props.content}</h6>
// //   </div>
// // </div>

// export default OneBlog;


import React, {useEffect, useState} from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { IBlogProps } from '../utils/types';
import { useEffect } from 'react';



const OneBlog: React.FC<ISingleBlogProps> = (props: ISingleBlogProps) => {
    const [blog, setBlog] = React.useState<IBlogProps>({
        id:""
    })

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/blogs/${props.match.params.id}`)
                let blog = await res.json();
                setBlog(blog);
            } catch (err) {
                console.log(err)
            }
        })();
    }, [])


    

    return (
        <div className="container">
        <div className="card shadow-lg m-2">
            <div className="card-body">
                <div className="row">
                    <h5 className="card-title">{blog.title}</h5>
                </div>
                <div className="row">
                    <h6 className="card-subtitle mb-2 text-muted">@{blog.name}</h6>
                </div>
                <div className="row">
                    <p className="card-text">{blog.content}</p>
                </div>
                <div className="row justify-content-between">
                    <Link to="/">
                        <button className="btn btn-sm btn-outline-dark float-right mx-1">Go Back</button>
                    </Link>
                    <Link to={`/blogs/${blog.id}/admin`}>
                        <button className="btn btn-sm btn-outline-dark float-right mx-1">Edit</button>
                    </Link>
                </div>
               
            </div>
        </div>
    </div>
    ) 
}

interface ISingleBlogProps extends RouteComponentProps<{ id: string }> { }

export default OneBlog;
