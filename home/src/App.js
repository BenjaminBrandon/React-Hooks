import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";
import Gallery from "./Gallery";

function App() {
  const [userQuery, setUserQuery] = useState("");

  const searchQuery = () => {
    window.open(`http://google.com/search?q=${userQuery}`, "_blank");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const updateUserQuery = (event) => {
    setUserQuery(event.target.value);
    console.log("userQuery", userQuery);
  };

  return (
    <div className="App">
      <h1>Hello Benjamin</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Gallery />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
