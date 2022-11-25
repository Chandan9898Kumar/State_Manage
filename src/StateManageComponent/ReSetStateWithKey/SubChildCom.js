import React, { useState } from "react";

export default function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <div>
      {label}:
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
    </div>
  );
}
