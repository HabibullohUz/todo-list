import "./todo.scss";
import React from "react";
import delete_icon from "../../assets/delete.svg";

export default function Todo({ todo, removeTask, todoComplate, editTask }) {
  return (
    <div className="item__todo">
      <div className="checked__wrapper">
        <div
          className={todo.complate ? "checked" : "noneCheked"}
          onClick={() => todoComplate(todo.id)}
        ></div>
      </div>
      <div className={todo.complate ? "task line" : "task "}>{todo.task}</div>
      <div className="btn__delete" onClick={() => removeTask(todo.id)}>
        <img src={delete_icon} alt="" />
      </div>
    </div>
  );
}
