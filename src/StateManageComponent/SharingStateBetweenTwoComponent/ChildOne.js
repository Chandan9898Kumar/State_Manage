import React,{useState} from "react"
const ChildsOne=({title,children,isActive,onShows})=>{

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShows}>
          Show
        </button>
      )}
    </section>
  );


}
export default ChildsOne;