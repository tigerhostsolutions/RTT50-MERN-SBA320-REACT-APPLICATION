import React, {useState} from 'react';
import UserForm from './components/UserForm/UserForm.jsx';
import GoogleBooksSearch from './components/GoogleBooks/GoogleBooksSearch.jsx';
import './App.css';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form
                                                         // submission
  const [userData, setUserData] = useState(null);        // Store user data

  const handleFormSubmission = (formData) => {
    // Store user data from the form (e.g., name, age, gender)
    setUserData(formData);
    setIsSubmitted(true); // Transition to Google Books Search view
  };

  return (
      <div >
        {!isSubmitted ? (
            <UserForm onSubmit = {handleFormSubmission} />
        ) : (
             <GoogleBooksSearch user = {userData} />
         )}
      </div >
  );
};

export default App;
