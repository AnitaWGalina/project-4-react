
import React, { useState } from 'react';
import './UserProfile.css'

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Lyon Bett',
    email: 'lyonbett@example.com',
    dob: '1990-01-01',
    gender: 'Male',
    location: 'Nairobi',
  });

  const [investment, setInvestment] = useState({
    investedOn: '2022-05-01',
    interestGenerated: 500,
    currentBalance: 5500,
    investmentType: 'Stocks',
  });
  const handleInvestment = () => {
    setInvestment({
      investedOn: 'new date',
      interestGenerated: 1000, // or any other value
      currentBalance: 6000, // or any other value
      investmentType: 'Stocks',
    });
  }
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save updated user details to the backend if necessary
  };

  // const handleChangePassword = () => {
  //   setIsEditing(true);
  //   // Logic for changing password
  // };

  const { name, email, dob, location, } = user;
  const { investedOn, interestGenerated, currentBalance, investmentType  } = investment;
  const [gender, setGender] = useState("");

  return (
    <div class='st1'>
      <h1 class='header'>USER PROFILE</h1>
      <div class='name'>
        <label>Name:</label>
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div class='email'>
        <label>Email:</label>
        {isEditing ? (
          <input
            type="text"
            value={email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        ) : (
          <span>{email}</span>
        )}
      </div>
      <div class='dob'>
        <label>Date of Birth:</label>
        {isEditing ? (
          <input
            type="text"
            value={dob}
            onChange={(e) => setUser({ ...user, dob: e.target.value })}
          />
        ) : (
          <span>{dob}</span>
        )}
      </div>
      <div class='gender'>
<label class='Label' htmlFor="gender">Gender:</label>
<select
id="gender"
value={gender}
onChange={(e) => setGender(e.target.value)}
>
<option value="select">select</option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</div>
      <div class='location'>
        <label>Location:</label>
        {isEditing ? (
          <input
            type="text"
            value={location}
            onChange={(e) => setUser({ ...user, location: e.target.value })}
          />
        ) : (
          <span>{location}</span>
        )}
      </div>


      <h2 class='header1'>INVESTMENT DETAILS</h2>

      <div class='typeOfInvestment'>
        <label>Investment Type:</label>
          <span>{investmentType}</span>
      </div>

      <div class='investedOn'>
        <label>Invested On:</label>
          <span>{investedOn}</span>
      </div>

      <div class='interest'>
        <label>Interest Generated:</label>
          <span>{interestGenerated}</span>
      </div>

      <div class='balance'>
        <label>Current Balance:</label>
          <span>{currentBalance}</span>
      </div>

      <div>
        {isEditing ? (
          <button onClick={handleSave} class='button1'>Save</button>
        ) : (
          <button onClick={handleEdit} class='button2'>Edit User Details</button>
        )}
        <span onClick={handleInvestment}></span>
      </div>
    </div>
  );
};

export default UserProfile;
