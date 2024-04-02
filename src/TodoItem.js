import { useState } from "react";
import "./style/TodoItem.css";

function TodoItem({ item, Delete }) {
  const [toggle, setToggle] = useState(false);
  const Toggle = (id) => {
    if (id === item.id) {
      setToggle(toggle ? false : true);
    }
  };
  return (
    <div className="list-wrapper">
      <span>card {item.id}</span>
      <ul className="list">
        <li className={toggle ? "active" : ""}>{item.name}</li>
        <li className={toggle ? "active" : ""}>{item.age}</li>
        <li className={toggle ? "active" : ""}>{item.surname}</li>
      </ul>
      <div className="btn-wrapper ">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => Toggle(item.id)}
        />
        <button
          className="btn btn-danger"
          type="delete"
          onClick={() => Delete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
