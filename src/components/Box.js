import React from "react";

function Box(props) {
  const styles = { backgroundColor: props.on ? "blue" : "green" };

  return (
    <div style={styles} className="box">
      Test
    </div>
  );
}

export default Box;
