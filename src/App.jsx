import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm.jsx';
import GoogleBooksSearch from "./components/GoogleBooks/GoogleBooksSearch.jsx";
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleFormSubmission = (formData) => {
    // Use formData (for example, name or gender) if needed for the query.
    setSearchQuery(formData.name); // Trigger a new search in GoogleBooksSearch
  };

  return (
      <main>
        <header >
          <h1 >User Profile</h1 >
        </header >
        <UserForm onSubmit={handleFormSubmission} /> {/* Pass handler via props */}
        <GoogleBooksSearch query={searchQuery} />{/* Forward the query to GoogleBooksSearch */}
      </main >
  )
}

export default App
