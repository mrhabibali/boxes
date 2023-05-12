import React from "react";
import logo from "./logo.svg";
import "./App.css";
import boxes from "./boxes";
import Box from "./components/Box";

function App() {
  const [squares, setsquares] = React.useState(boxes);

  const sqaureElements = squares.map((sqaure) => {
    return <Box key={sqaure.id} id={sqaure.id} on={sqaure.on} />;
  });

  return <div>{sqaureElements}</div>;
}

export default App;
