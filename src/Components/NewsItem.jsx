import React from "react";
// import News from "./News";

export default function NewsItem({
  title,
  Description,
  imgUrl,
  newUrl,
  author,
  date,
  source
}) {
  return (
    <div>
      <div className="card my-4" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <strong className="card-title">
            {title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
            {source}
            </span>
          </strong>
          <p className="card-text">{Description}</p>
          <p className="card-text">
            <small>
              By{" "}
              <span class="badge bg-secondary">
                {!author ? "Unknown" : author}
              </span>{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
