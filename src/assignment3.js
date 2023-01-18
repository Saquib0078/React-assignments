import './assignment3.css';
import React, { useState } from 'react';




function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [marketing, setMarketing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({});

    if (!firstName) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: 'First name is required' }));
    }

    if (!lastName) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last name is required' }));
    }

    if (!gender) {
      setErrors((prevErrors) => ({ ...prevErrors, gender: 'Gender is required' }));
    }

    if (!country) {
      setErrors((prevErrors) => ({ ...prevErrors, country: 'Country is required' }));
    }

    if (!profilePicture) {
      setErrors((prevErrors) => ({ ...prevErrors, profilePicture: 'Profile picture is required' }));
    }

    if (!Object.keys(errors).length) {
      console.log({
        firstName,
        lastName,
        gender,
        country,
        marketing,
        profilePicture,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p>{errors.gender}</p>}
      </div>

      <div>
    <label htmlFor="marketing">
      <input
        type="checkbox"
        id="marketing"
        checked={marketing}
        onChange={(event) => setMarketing(event.target.checked)}
      />
      Would you like to receive marketing emails?
    </label>
  </div>

  <div>
    <label htmlFor="profilePicture">Profile Picture</label>
    <input
      type="file"
      id="profilePicture"
      onChange={(event) => setProfilePicture(event.target.files[0])}
    />
    {errors.profilePicture && <p>{errors.profilePicture}</p>}
  </div>

  <button type="submit">Submit</button>
</form>


  );
}




export default App;
