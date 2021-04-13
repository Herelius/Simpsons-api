import React from "react";
import axios from "axios";
import Api from "./Components/API";
import "./App.css";

function App() {
  const sampleData = {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection: "Left",
  };

  const getSimpsons = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => setData(response.data[0]))
      .catch((err) => {
        console.error(err);
      });
  };

  const [data, setData] = React.useState(sampleData);

  return (
    <div className="App">
      <Api name={data.character} alt={data.character} image={data.image} quote={data.quote} />
      <button type="button" onClick={getSimpsons}>
        Get a Simpson
      </button>
    </div>
  );
}

export default App;
