import TodoItem from "./TodoItem";
import "./App.css";
import TodoForm from "./TodoForm";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const InputValue = (newobj) => {
    setData([...data, newobj]);
  };
  const Delete = (id) => {
    const filtered = data.filter((e) => {
      return id !== e.id;
    });
    setData(filtered);
  };
  const id = data.length;
  return (
    <div className="App">
      <TodoForm InputValue={InputValue} />
      <h3 className="pl-3 mt-2">
        {id === 0 ? "we havn't any items yet" : `we have ${id} items`}
      </h3>
      {data.map((item, index) => {
        return (
          <TodoItem item={item} key={index} Delete={Delete} count={index} />
        );
      })}
    </div>
  );
}

export default App;
