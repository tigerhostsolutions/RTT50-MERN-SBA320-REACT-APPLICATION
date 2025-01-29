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
      alert("Please enter a valid book title");
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
      const items = response.data.items || []; // Get results array
      setBooks(items);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Render each book item
  const renderBooks = () => {
    if (books.length === 0 && !loading) {
      return <p className="no-results">No books found. Try searching for something else!</p>;
    }

    return books.map((book) => {
      const { id, volumeInfo } = book;
      const { title, authors, description, imageLinks } = volumeInfo;

      return (
          <div key={id} className="book-card">
            {imageLinks?.thumbnail && (
                <img
                    src={imageLinks.thumbnail}
                    alt={title}
                    className="book-thumbnail"
                />
            )}
            <div className="book-details">
              <h2 className="book-title">{title || "No Title Available"}</h2>
              <p><strong>Authors:</strong> {authors ? authors.join(", ") : "N/A"}</p>
              <p className="book-description">
                {description || "No description available."}
              </p>
            </div>
          </div>
      );
    });
  };

  return (
      <div className="google-books">
        <div className="greeting">
          <h1>Welcome, {user?.name}!</h1>
          <p>Start exploring amazing books created by authors worldwide!</p>
        </div>

        <div className="search-container">
          <input
              type="text"
              className="search-input"
              placeholder="Search for books..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={fetchBooks} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Render loading spinner, error messages, or books */}
        <div className="results-container">
          {loading && <div className="spinner"></div>} {/* Loading spinner */}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && renderBooks()}
        </div>
      </div>
  );
};

export default GoogleBooksSearch;