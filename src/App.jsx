import React from 'react';
import UserForm from './components/UserForm/UserForm.jsx';
import UserView from './components/UserView/UserView.jsx';
import './App.css'

function App() {

  return (
      <main>
        <header >
          <h1 >User Profile</h1 >
        </header >
        <UserForm />
        <UserView />
      </main >
  )
}

export default App
