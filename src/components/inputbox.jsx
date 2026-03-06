import { useState } from "react";

function InputBox({ addTask }) {

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>+ Add</button>
    </div>
  );
}

export default InputBox;