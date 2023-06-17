import React from "react";
// import News from "./News";

export default function NewsItem({ title, Description, imgUrl, newUrl }) {
  return (
    <div>
      <div className="card my-4" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <strong className="card-title">{title}...</strong>
          <p className="card-text">{Description}</p>
          <a href={newUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
