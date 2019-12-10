import React from "react";
import axios from "axios";

function Options(props) {
  let OptionsStyle = {
    display: props.showOptions ? "flex" : "none",
    width: "100px",
    height: "70px",
    position: "absolute",
    left: "60vw",
    marginTop: "-50px",
    border: "1px solid black",
    backgroundColor: "white",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignContent: "center",
    border: "1px solid dodgerBlue"
  };

  function handleCharacterDelete() {
    console.log("deleting character...id: ");
    console.log(props.characters);
    axios
      .post(
        "http://localhost:9000/deletePlayerCharacter",
        {
          characterID: props.characters._id
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="characterOptions" style={OptionsStyle}>
      <button>edit</button>
      <button onClick={handleCharacterDelete}>delete</button>
    </div>
  );
}

export default Options;
