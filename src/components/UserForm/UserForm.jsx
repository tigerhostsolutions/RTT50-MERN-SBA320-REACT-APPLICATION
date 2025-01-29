import React, {useState} from 'react';
import './UserForm.css';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent via prop
  };

  //Form View
  return (
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Name:</label>
          <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
          />
        </div>

        {/*<div>*/}
        {/*  <label htmlFor="age">Age:</label>*/}
        {/*  <input*/}
        {/*      type="number"*/}
        {/*      id="age"*/}
        {/*      name="age"*/}
        {/*      value={formData.age}*/}
        {/*      onChange={handleChange}*/}
        {/*      placeholder="Enter your age"*/}
        {/*      required*/}
        {/*  />*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <label htmlFor="gender">Gender:</label>*/}
        {/*  <select*/}
        {/*      id="gender"*/}
        {/*      name="gender"*/}
        {/*      value={formData.gender}*/}
        {/*      onChange={handleChange}*/}
        {/*      required*/}
        {/*  >*/}
        {/*    <option value="male">Male</option>*/}
        {/*    <option value="female">Female</option>*/}
        {/*    <option value="other">Other</option>*/}
        {/*  </select>*/}
        {/*</div>*/}

        <button type="submit">Submit</button>
      </form>
  );
};

export default UserForm;