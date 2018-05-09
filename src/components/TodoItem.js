import React from 'react';

const TodoItem = (props) => {
  return(
    <li className={props.done ? "list-item done" : "list-item"}>
      <input type="checkbox" checked={props.done} onClick={() => props.checkboxHandler(props.id)} />
      {props.title}
      <div className="actions-section">
        <button className="edit-button" onClick={() => props.editHandler(props.id)}>&#x270e;</button>
        <button className="delete-button" onClick={() => props.deleteHandler(props.id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem;