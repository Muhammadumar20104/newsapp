import React from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";


export default function News(props) {
  const [Article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=13a2b20f70ce4b99bc276d0f5597c609&pageSize=${props.pageSize}`
      );

      const jsonData = await response.json();
      setLoading(false);
      setResult(jsonData.totalResults);
      setArticle(jsonData.articles);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const handlePrev = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          props.country
        }&category=${
          props.category
        }&apiKey=13a2b20f70ce4b99bc276d0f5597c609&page=${page - 1}&pageSize=${
          props.pageSize
        }`
      );

      const jsonData = await response.json();
      setLoading(false);
      console.log(jsonData.articles);
      setArticle(jsonData.articles);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setPage(page - 1);
  };
  const handleNext = async () => {
    if (!(page + 1 > Math.ceil(result / props.pageSize))) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${
            props.country
          }&category=${
            props.category
          }&apiKey=13a2b20f70ce4b99bc276d0f5597c609&page=${page + 1}&pageSize=${
            props.pageSize
          }`
        );

        const jsonData = await response.json();
        setLoading(false);
        console.log(jsonData.articles);
        setArticle(jsonData.articles);
        document.documentElement.scrollTo(0, 0);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
      setPage(page + 1);
    }
  };
  return (
    <div className="container my-3 ">
      <h2 className="text-center">News Monkey -TopHeadLines</h2>
      {Loading && (
        <div className="position-absolute top-50 start-50">
          <Spinner />
        </div>
      )}
      <div className="row">
        {Article.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newUrl={element.url}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          class="btn btn-dark"
          onClick={handlePrev}
        >
          &larr;Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(result / 21)}
          type="button"
          class="btn btn-success"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
