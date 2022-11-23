import React,{useState} from "react"
const ChildsTwo=({title,children,isActive,onShow})=>{

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );

}
export default ChildsTwo;
