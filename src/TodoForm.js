import React, { useState } from "react";

function TodoForm({ InputValue, id }) {
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
    id++;
    event.preventDefault();
    if (!values.name.trim() || !values.surname.trim() || !values.age.trim())
      return;
    setValues({ ...values }, (values.id = id));
    InputValue(values);
    console.log(values);
  };
  console.log(values);
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
