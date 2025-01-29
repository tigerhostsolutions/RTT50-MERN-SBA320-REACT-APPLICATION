import React, {useState} from 'react';
import UserForm from './components/UserForm/UserForm.jsx';
import GoogleBooksSearch from './components/GoogleBooks/GoogleBooksSearch.jsx';
import './App.css';

const App = () => {
  // Track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState(null);  // Store user data

  const handleFormSubmission = (formData) => {
    setUserData(formData); // Store user data from the form
    setIsSubmitted(true); // Transition to Google Books Search view
  };

  return (<main >
    <h1 >Welcome!</h1 >
    <h2 >To search for your book, enter your name.</h2 >
    <div >
      {!isSubmitted ?
       (<UserForm onSubmit = {handleFormSubmission} />) :
       (<GoogleBooksSearch user = {userData} />)}
    </div >
  </main >);
};

export default App;
