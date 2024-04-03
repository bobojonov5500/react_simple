import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ InputValue }) {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    age: "",
    id: "",
  });
  const OnHandAdd = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const OnHandleChange = (event) => {
    const uuid = uuidv4();
    event.preventDefault();
    if (!values.name.trim() || !values.surname.trim() || !values.age.trim())
      return;
    setValues({ ...values }, (values.id = uuid));
    InputValue(values);
    setValues({
      name: "",
      surname: "",
      age: "",
    });
  };

  return (
    <>
      <form onSubmit={OnHandleChange} className="container d-flex mt-3 ">
        <input
          className="form-control"
          type="text"
          onChange={OnHandAdd}
          name="name"
          placeholder="name"
          value={values.name}
          required
        />
        <input
          className="form-control ml-2"
          type="text"
          onChange={OnHandAdd}
          name="surname"
          placeholder="surname"
          value={values.surname}
          required
        />
        <input
          className="form-control ml-2"
          type="number"
          onChange={OnHandAdd}
          name="age"
          placeholder="age"
          value={values.age}
          required
        />
        <button className="btn btn-primary ml-2" type="submit">
          add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
