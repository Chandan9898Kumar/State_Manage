import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const styles = {
  position: "absolute",
  left: "20px",
  width: "100px",
  height: "120px",
  color: "white",
};

const newStyle={
  position: "absolute",
  left: "150px",
  width: "100px",
  height: "120px",
  color: "white",

}
const newStyleTwo={
  position: "absolute",
  left: "300px",
  width: "100px",
  height: "120px",
  color: "white",

}
const HeaderNav = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink to="/StateOne" style={styles}>
            State One
          </NavLink>
        </li>
        <br />
        <li>
        <NavLink to='/SharingStateBetweentwoComp' style={newStyle}>Sharing State</NavLink>
        </li><br />
        <li>
        <NavLink to='/PreserveState' style={newStyleTwo}>Preserve State</NavLink>
        </li>

      </ul>
    </div>
  );
};

export default HeaderNav;
