import React from "react";
import "./App.css";
import boxes from "./boxes";
import Box from "./components/Box";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSqaures) => {
      return prevSqaures.map((sqaure) => {
        return sqaure.id === id ? { ...sqaure, on: !sqaure.on } : sqaure;
      });
    });
  }

  const sqaureElements = squares.map((sqaure) => {
    return (
      <Box key={sqaure.id} id={sqaure.id} on={sqaure.on} toggle={toggle} />
    );
  });

  return <div>{sqaureElements}</div>;
}

export default App;
