// import React, { useEffect, useState } from "react";

// const UserProfile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user data after login
//     fetch("http://localhost:3000/users", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: "Bearer your-auth-token",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the user state with the fetched data
//         setUser(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, []);

//   const [email, setEmail] = useState("");
//   const [location, setLocation] = useState("");
//   const [typeOfInvestment, setTypeOfInvestment] = useState("");
//   const [editMode, setEditMode] = useState(false);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleSaveClick = () => {
//     // Perform save logic for updated email, location, and typeOfInvestment
//     // Update the user data in the backend
//     fetch("http://localhost:3000/users", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: "Bearer your-auth-token",
//       },
//       body: JSON.stringify({
//         email: email,
//         location: location,
//         type_of_investment: typeOfInvestment,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("User data updated successfully:", data);
//         setEditMode(false);
//       })
//       .catch((error) => {
//         console.error("Error updating user data:", error);
//       });
//   };

//   const handleCancelClick = () => {
//     // Reset the form values and exit edit mode
//     setEmail("");
//     setLocation("");
//     setTypeOfInvestment("");
//     setEditMode(false);
//   };
//   return (
//     <div>
//       <h2>User Profile</h2>
//       {user && (
//         <>
//           <p>
//             <strong>Name:</strong> {user.name}
//           </p>
//           <p>
//             <strong>Email:</strong>{" "}
//             {editMode ? (
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             ) : (
//               user.email
//             )}
//           </p>
//           <p>
//             <strong>Gender:</strong> {user.gender}
//           </p>
//           <p>
//             <strong>Location:</strong>{" "}
//             {editMode ? (
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             ) : (
//               user.location
//             )}
//           </p>
//           <p>
//             <strong>Type Of Investment:</strong>{" "}
//             {editMode ? (
//               <input
//                 type="text"
//                 value={typeOfInvestment}
//                 onChange={(e) => setTypeOfInvestment(e.target.value)}
//               />
//             ) : (
//               user.type_of_investment
//             )}
//           </p>
//           {editMode ? (
//             <div id="Profile">
//               <button onClick={handleSaveClick}>Save</button>
//               <br />
//               <button onClick={handleCancelClick}>Cancel</button>
//             </div>
//           ) : (
//             <div id="User">
//               <button onClick={handleEditClick}>Edit Profile</button>
//             </div>
            
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [typeOfInvestment, setTypeOfInvestment] = useState("");
  const [balance, setBalance] = useState("");
  const [interest, setInterest] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch user data after login
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer your-auth-token",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the user state with the fetched data
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save logic for updated email, location, typeOfInvestment, balance, interest, from, and to
    // Update the user data in the backend
    fetch("http://localhost:3000/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer your-auth-token",
      },
      body: JSON.stringify({
        email: email,
        location: location,
        type_of_investment: typeOfInvestment,
        balance: balance,
        interest: interest,
        date_invested: from,
        date_withdrawn: to,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User data updated successfully:", data);
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  const handleCancelClick = () => {
    // Reset the form values and exit edit mode
    setEmail("");
    setLocation("");
    setTypeOfInvestment("");
    setBalance("");
    setInterest("");
    setFrom("");
    setTo("");
    setEditMode(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {editMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              user.email
            )}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {editMode ? (
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            ) : (
              user.location
            )}
          </p>
          <p>
            <strong>Type Of Investment:</strong>{" "}
            {editMode ? (
              <input
                type="text"
                value={typeOfInvestment}
                onChange={(e) => setTypeOfInvestment(e.target.value)}
              />
            ) : (
              user.type_of_investment
            )}
          </p>
          <p>
            <strong>Balance:</strong>{" "}
            {editMode ? (
              <input
                type="text"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            ) : (
              user.balance
            )}
          </p>
          <p>
            <strong>Interest:</strong>{" "}
            {editMode ? (
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              />
            ) : (
              user.interest
            )}
          </p>
          <p>
            <strong>From:</strong>{" "}
            {editMode ? (
              <input
                type="date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            ) : (
              user.date_invested
            )}
          </p>
          <p>
            <strong>To:</strong>{" "}
            {editMode ? (
              <input
                type="date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            ) : (
              user.date_withdrawn
            )}
          </p>
          {editMode ? (
            <div id="Profile">
              <button onClick={handleSaveClick}>Save</button>
              <br />
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            <div id="User">
              <button onClick={handleEditClick}>Edit Profile</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfile;



