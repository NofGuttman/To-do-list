import React from 'react';

const AddTodo = (props) => (
  <form onSubmit={props.submitHandler}>
    <input onChange={props.changeHandler} type="text" value={props.newTodo} />
    <button type="submit">Add</button>
  </form>
);

export default AddTodo;