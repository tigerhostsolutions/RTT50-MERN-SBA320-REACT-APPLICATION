import React, {useState} from 'react';
import './UserForm.css';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male",
  });

  // State for toggling between form view and profile view
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent via prop
    setIsSubmitted(true); // Switch to profile view}
  };

  const handleEdit = () => {
    setIsSubmitted(false); // Switch back to form view
  };

  if (isSubmitted) {
    // Profile View
    return (
        <div className='profile-card'>
          <h2>Hello {formData.name}</h2>
          <div className='profile-card-demographics'>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <button onClick={handleEdit}>Edit Profile</button>
          </div>
        </div>
    );
  }

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