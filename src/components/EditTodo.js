import React from 'react';

const EditTodo = (props) => (
  <form className="edit-modal" onSubmit={props.submitHandler}>
    <h1>Edit</h1>
    <input type="text" value={props.title} onChange={props.changeHandler} />
    <button type="submit">Done</button>
  </form>
)

export default EditTodo;