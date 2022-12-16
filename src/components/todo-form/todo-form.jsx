import "./todo-form.scss";
import React, { useState } from "react";
import add_icon from "../../assets/add-icon.svg";

export default function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput !== "") {
      addTask(userInput);
    }
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Inter") {
      handleSubmit();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        autoFocus={true}
        className="input__form"
        type="text"
        onChange={handleChange}
        value={userInput}
        placeholder="write something..."
        onKeyDown={handleKeyPress}
      />
      <button className="btn__form" disabled={userInput === "" ? true : false}>
        Add <img src={add_icon} alt="" />
      </button>
    </form>
  );
}
