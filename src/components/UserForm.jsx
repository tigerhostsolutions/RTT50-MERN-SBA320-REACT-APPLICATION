import React, {useState} from 'react';
import './UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`User Profile:
      Name: ${formData.name}
      Age: ${formData.age}
      Gender: ${formData.gender}`);
  };
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

        <div>
          <label htmlFor="age">Age:</label>
          <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
  );
};
export default UserForm;