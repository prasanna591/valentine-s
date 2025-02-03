import { useState } from "react";

function NameInput({ onSubmit }) {
  const [names, setNames] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameArray = names.split(",").map((name) => name.trim());
    if (nameArray.length < 2) {
      alert("Enter at least two names!");
      return;
    }
    onSubmit(nameArray);
  };

  return (
    <div>
      <h2>💖 Valentine's Prediction 💖</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter names (comma separated)"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          required
        />
        <button type="submit">Predict Love! 💘</button>
      </form>
    </div>
  );
}

export default NameInput;
