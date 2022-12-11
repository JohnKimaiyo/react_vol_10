import React from "react";

export default function Event() {
  const testClick = () => {
    alert("Good mornig React developer Kimaiyo");
  };

  return (
    <div className="App">
      <button onClick={testClick}>Click Me</button>
    </div>
  );
}
