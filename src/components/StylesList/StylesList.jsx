import React from "react";
import style from "./StylesList.scss";

function StylesList() {
  const styles = [
    "backpack",
    "student",
    "hot",
    "hot",
    "summer",
    "fashion",
    "hot",
    "summer",
    "fashion",
  ];
  styles.map((style) => console.log(style));
  return (
    <>
      <section className="styles-list">
        <h3>Styles: </h3>
        {styles.map((style) => (
          <>
            <div className="style-box">{style}</div>
          </>
        ))}
      </section>
    </>
  );
}
export default StylesList;
