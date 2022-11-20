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
        {/* <li>
        <NavLink to='/cart' style={{color:'white',wordSpacing:'2px'}}>State Manage Two</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default HeaderNav;
