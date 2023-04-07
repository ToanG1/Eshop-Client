import React from "react";
import style from "./TypesList.scss";

function TypesList() {
  const types = ["red", "blue", "green", "yellow", "brown", "black"];
  return (
    <>
      <section className="types-list">
        <h2>Types: </h2>
        <div className="types">
          {types.map((type) => (
            <>
              <div className="type-box">{type}</div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
export default TypesList;
