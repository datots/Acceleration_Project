import "./API.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DataCard from "./DataCard";
import Pagination from "./APIpagination/APIpagination";
import Navbar from "../Table/Navigation/Navbar";

function DataFetcher() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const apiURL = "https://jsonplaceholder.typicode.com/posts";

    axios
      .get(apiURL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        {currentPosts.map((post) => (
          <div className="col-md-3" key={post.id}>
            <DataCard post={post} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default DataFetcher;
