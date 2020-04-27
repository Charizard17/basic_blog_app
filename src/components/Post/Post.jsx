import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import "./Post.css";

const Post = ({ post: { title, img, body, author }, i }) => (
  <div className="container" >
  <div className="row row-cols-1">
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={img} alt="post" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{body}</p>
          <div className="card-footer bg-transparent border-success">
            <h5 className="blockquote-footer">Article Number: {i + 1}</h5>
            <h5>Author: {author}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Post;
