import React, { useState } from "react";

const ChildHeader = () => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = {
    backgroundColor: "orange",
    width: "100px",
    height: "100px",
    marginLeft: "250px",
  };
  if (hover) {
    className = {
      backgroundColor: "red",
      width: "100px",
      height: "100px",
      marginLeft: "250px",
    };
  }
  // Try clicking both counters and notice they don’t affect each other:

  // As you can see, when one component  is updated, only the 'state' (score) for that component is updated:

  return (
    <div
      style={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <div style={{marginLeft:'20px'}}>
      <h1 style={{marginLeft:'15px'}} >{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
      </div>
    </div>
  );
};
export default ChildHeader;
