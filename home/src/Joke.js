import React, { useEffect } from "react";

function Joke() {
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        response.json();
        // console.log("response", response); *attempting to see response and why it wont .json properly
        // for some reason this wont .json() the response and when console.loged it returns an undefined
      })
      .then((json) => console.log("joke json", json));
  });

  return (
    <div>
      <h3>Joke</h3>
    </div>
  );
}

export default Joke;
