import React from "react";
import Child from "./Child";
import { useState } from "react";

export default function Parent() {
  const [text, setText] = useState("");
  const handleChange = (elem) => {
    setText(elem);
    console.log(text);
  };

  return (
    <div>
      <Child handleChange={handleChange} />
    </div>
  );
}
