import React, {useEffect, useState} from 'react';
import './GoogleBooksSearch.css';
import axios from "axios";

const GoogleBooksSearch = ({ query }) => {
  // State to hold user input, books, and loading/error states
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch books from Google Books API
  const fetchBooks = async () => {
    if (!searchInput.trim()) {
      alert("Please enter a book title");
      return;
    }

    setLoading(true);
    setError(null);
    setBooks([]); // Clear existing results
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchInput
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

  // Use query to trigger a search when it changes
  useEffect(() => {
    if (query) {
      setSearchInput(query); // Set the search input from the query prop
      fetchBooks(); // Fetch books for the new query
    }
  }, [query]); // Dependency array ensures this runs on query changes

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
      <h1>Search Books with Google Books API</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter book title..."
          value={query}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={fetchBooks} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Show loading spinner, error, or books */}
      <div className="results">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && renderBooks()}
      </div>

    </div>
  );
};

export default GoogleBooksSearch;