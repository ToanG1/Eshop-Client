import React from "react";
import style from "./StylesList.scss";

function StylesList({ styles }) {
  return (
    <>
      <section className="styles-list">
        <h3>Styles: </h3>
        {styles.map((style) => (
          <>
            <div className="style-box">{style.name}</div>
          </>
        ))}
      </section>
    </>
  );
}
export default StylesList;
