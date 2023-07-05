import React, { useState } from "react";
import "./Registration.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [typeOfInvestment, setTypeOfInvestement] =useState("")
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        location: location,
        country: country,
        dateOfBirth: dateOfBirth,
        typeOfInvestment : typeOfInvestment
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        history.push("/Login");
      });
  };

  return (
    <>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>

        <div>
          
        </div>




        <button type="submit">Register</button>
      </form>
    </>
  );
};


// const App = () => {
//   const handleMenuOne = () => {
//     console.log('clicked one');
//   };

//   const handleMenuTwo = () => {
//     console.log('clicked two');
//   };

//   return (
//     <Dropdown
//       trigger={<button>Type of Investment</button>}
//       menu={[
//         <button onClick={handleMenuOne}>Shares</button>,
//         <button onClick={handleMenuTwo}>Bills</button>,
//         <button onClick={handleMenuTwo}>Bonds</button>,
//       ]}
//     />
//   );
// };

// const Dropdown = ({ trigger, menu }) => {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="dropdown">
//       {React.cloneElement(trigger, {
//         onClick: handleOpen,
//       })}
//       {open ? (
//         <ul className="menu">
//           {menu.map((menuItem, index) => (
//             <li key={index} className="menu-item">
//               {React.cloneElement(menuItem, {
//                 onClick: () => {
//                   menuItem.props.onClick();
//                   setOpen(false);
//                 },
//               })}
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// };
export default RegistrationForm;
