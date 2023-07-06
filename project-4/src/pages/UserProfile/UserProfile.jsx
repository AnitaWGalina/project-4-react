  import React, { useState } from 'react';
import './UserProfile.css'

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Lyon Bett',
    email: 'lyonbett@example.com',
    dob: '1990-01-01',
    gender: 'Male',
    location: 'Nairobi',
    investmentType: 'Stocks',
  });

  const [investment, setInvestment] = useState({
    investedOn: '2022-05-01',
    interestGenerated: 500,
    currentBalance: 5500,
  });
  // const handleInvestment = () => {
    setInvestment({
      investedOn: 'new date',
      interestGenerated: 1000, // or any other value
      currentBalance: 6000, // or any other value
    });
  // }
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save updated user details to the backend if necessary
  };

  const handleChangePassword = () => {
    setIsEditing(true);
    // Logic for changing password
  };

  const { name, email, dob, location, investmentType } = user;
  const { investedOn, interestGenerated, currentBalance } = investment;
  const [gender, setGender] = useState("");

  return (
    <div className='st1'>
      <h1 className='header'>USER PROFILE</h1>
      <div className='name'>
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
      <div className='email'>
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
      <div className='dob'>
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
      <div className='gender'>
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
      <div className='location'>
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
      <div className='typeOfInvestment'>
        <label>Type of Investment:</label>
        {isEditing ? (
          <input
            type="text"
            value={investmentType}
            onChange={(e) => setUser({ ...user, investment: e.target.value })}
          />
        ) : (
          <span>{investmentType}</span>
        )}
      </div>



      <h2 className='header1'>INVESTMENT DETAILS</h2>
      <div className='investedOn'>
        <label>Invested On:</label>
        {isEditing ? (
          <input
            type="text"
            value={investedOn}
            onChange={(e) => setUser({ ...user, investedOn: e.target.value })}
          />
        ) : (
          <span>{investedOn}</span>
        )}
      </div>
      <div className='interest'>
        <label>Interest Generated:</label>
        {isEditing ? (
          <input
            type="text"
            value={interestGenerated}
            onChange={(e) => setUser({ ...user, interestGenerated: e.target.value })}
          />
        ) : (
          <span>{interestGenerated}</span>
        )}
      </div>
      <div className='balance'>
        <label>Current Balance:</label>
        {isEditing ? (
          <input
            type="text"
            value={currentBalance}
            onChange={(e) => setUser({ ...user, currentBalance: e.target.value })}
          />
        ) : (
          <span>{currentBalance}</span>
        )}
      </div>

      <div>
        {isEditing ? (
          <button onClick={handleSave} class='button1'>Save</button>
        ) : (
          <button onClick={handleEdit} class='button2'>Edit</button>
        )}
        <button onClick={handleChangePassword} class='button3'>Change Password</button>
      </div>
    </div>
  );
};

export default UserProfile;
