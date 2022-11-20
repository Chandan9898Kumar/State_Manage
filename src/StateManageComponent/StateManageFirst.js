import React, { useState } from "react";
import "../App.css";
const PracticeOne = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);

  // Setting names for input
  const [isEditing, setIsEditing] = useState(true);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");

  let myStyle = {
    backgroundImage:
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "90vh",
    marginTop: "10px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    setInput("");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === "") {
          reject(setError("Type something!"), setLoad(false), setData(""));
        } else {
          resolve(setData(input), setLoad(false), setError(""));
        }
      }, 1500);
    });

    //                                OR

    // const timer = setTimeout(() => {
    //   setData(input);
    //   setLoad(false);
    // }, 1000);
    // return () => clearTimeout(timer);
  };

  const ChangeBackGround = (e) => {
    e.stopPropagation();
    setActive(true);
  };

  const HandleButton = (e) => {
    // Here we used ! to make boolean value true and false.
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  // used inbuilt disabled feature. when load is true input and button will be disabled.
  return (
    <div className="App">
      <input
        disabled={load}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button disabled={load} onClick={(e) => OnSubmit(e)}>
        Submit
      </button>
      <br />
      <br />
      {data.length === 0 && load
        ? "Loading ..."
        : data.length > 0 && load
        ? "Loading ..."
        : data}
      <br />
      {error ? error : ""}
      <br />
      <br />
      <br />

      <form>
        <label>
          First name:
          {isEditing ? (
            `${firstName}`
          ) : (
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          )}
        </label>
        <br />
        <label>
          Last name:
          {isEditing ? (
            `${lastName}`
          ) : (
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          )}
        </label>
        <br />
        <button onClick={(e) => HandleButton(e)}>
          {isEditing ? "Edit Profile" : "Save Profile"}
        </button>
        <p>
          <i>
            Hello, {firstName} {lastName}!
          </i>
        </p>
      </form>
      <br />
      <br />
      <label>
        Click on Image,and then Click on white image on left or right side.
      </label>

      <div style={active ? null : myStyle} onClick={(e) => setActive(false)}>
        <img
          className="picture"
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          style={{ marginTop: "65px" }}
          onClick={(e) => ChangeBackGround(e)}
        />
      </div>
    </div>
  );
};
export default PracticeOne;
