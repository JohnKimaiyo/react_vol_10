import React from "react";

export default function Event() {
  const developerClick = () => {
    alert("Good morning React Developer");
  };

  return (
    <div className="App">
      <button onClick={developerClick}>Click Me</button>
    </div>
  );
}
