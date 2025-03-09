import React, { useState, useEffect } from "react";
import axios from "axios";


const BlogList = () => {
  const [blogs, setBlogs] = useState([]); // State to store blogs
  const [loading, setLoading] = useState(false); // State to track loading status
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    views: "",
  }); // State to manage filters
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const blogsPerPage = 10; // Number of blogs per page

  // Fetch blogs from API on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        const data = response.data;

        // Add default values for reactions and views if missing
        const updatedBlogs = data.posts.map((blog) => ({
          ...blog,
          reactions: blog.reactions || { likes: 0, dislikes: 0 },
          views: blog.views || Math.floor(Math.random() * 1000),
        }));

        setBlogs(updatedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Get unique tags for filtering
  const uniqueTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));

  // Apply filters to blogs
  const filteredBlogs = blogs.filter((blog) => {
    const ToSearch = blog.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const ToCategory =
      !filters.category || blog.tags.includes(filters.category);
    const ToViews =
      !filters.views ||
      (filters.views === "medium" && blog.views < 200 && blog.views <= 500) ||
      (filters.views === "high" && blog.views > 500);

    return ToSearch && ToCategory && ToViews;
  });

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "20px",
        background: "black",
      }}
    >
      {/* Search and Filter Section */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search blogs..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          style={{ flex: "1", padding: "10px", fontSize: "16px" }}
        />

        <select
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="">Filter by category</option>
          {uniqueTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setFilters({ ...filters, views: e.target.value })}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="">Filter by views</option>

          <option value="medium">Less than 500</option>
          <option value="high">More than 500</option>
        </select>
      </div>

      {/* Blog List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "15px",
                background: "#f9f9f9",
                color:"black",
                
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "bold",fontFamily:'Poppins' }}>
                {blog.title}
              </h3>
              <p style={{ fontSize: "14px", marginBottom: "10px" ,fontfamily: 'Merriweather'}}>
                {blog.body}
              </p>
              <p style={{ fontSize: "14px" }}>
                <strong>Views:</strong> {blog.views} |<strong> Likes:</strong>{" "}
                {blog.reactions.likes} |<strong> Dislikes:</strong>{" "}
                {blog.reactions.dislikes}
              </p>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  gap: "5px",
                  flexWrap: "wrap",
                }}
              >
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 10px",
                      background: "#007bff",
                      color: "#fff",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
              }
              disabled={currentPage === 1}
              style={{
                padding: "10px",
                margin: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                background: "#e0e0e0",
              }}
            >
              Previous
            </button>
            <span
              style={{
                padding: "15px",
                fontSize: "16px",
                fontFamily:"bold",
                borderRadius: "5px",
                background: "#e0e0e0",
              }}
            >
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage(
                  currentPage < totalPages ? currentPage + 1 : totalPages
                )
              }
              disabled={currentPage === totalPages}
              style={{
                padding: "10px",
                margin: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                background: "#e0e0e0",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
      
    </div>
    
  );
};

export default BlogList;
