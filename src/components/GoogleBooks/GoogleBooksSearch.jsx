import React, { useState, useEffect } from "react";
import "./GoogleBooksSearch.css";
import axios from "axios";

const GoogleBooksSearch = ({ user }) => {
  const [query, setQuery] = useState(""); // Local state for the book search query
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch books from Google Books API
  const fetchBooks = async () => {
    if (!query.trim()) {
      alert("Please enter a book title");
      return;
    }

    setLoading(true);
    setError(null);
    setBooks([]); // Clear existing results
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
    )}`;

    try {
      const response = await axios.get(apiUrl);
      const items = response.data.items || []; // Results array
      setBooks(items);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Render each book item
  const renderBooks = () => {
    if (books.length === 0) {
      return <p>No books found.</p>;
    }

    return books.map((book) => {
      const { id, volumeInfo } = book;
      const { title, authors, description, imageLinks } = volumeInfo;

      return (
          <div key={id} className="book">
            <div className="book-info">
              {imageLinks?.thumbnail && (
                  <img
                      src={imageLinks.thumbnail}
                      alt={title}
                      className="thumbnail"
                  />
              )}
              <div className="book-details">
                <h2>{title || "No Title Available"}</h2>
                <p>
                  <strong>Authors:</strong> {authors ? authors.join(", ") : "N/A"}
                </p>
                <p>{description || "No description available."}</p>
              </div>
            </div>
          </div>
      );
    });
  };

  return (
      <div className="google-books-search">
        <h1>Welcome, {user?.name}!</h1>
        <p>
          You can now search for books. Your demographic information:
          <ul>
            <li><strong>Age: </strong>{user?.age}</li>
            <li><strong>Gender: </strong>{user?.gender}</li>
          </ul>
        </p>
        <div className="search-bar">
          <input
              type="text"
              placeholder="Enter book title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={fetchBooks} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Show loading spinner, error, or book results */}
        <div className="results">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && renderBooks()}
        </div>
      </div>
  );
};

export default GoogleBooksSearch;