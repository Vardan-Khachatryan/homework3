import React from "react";
import Parent from "./Parent";

export default function Child({ handleChange }) {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => handleChange(event.target.value)}
      />
      <button>add</button>{" "}
    </div>
  );
}
