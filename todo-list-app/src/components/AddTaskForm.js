import React from 'react'

function AddTaskForm({handleSubmit,newTask,handleInputChange}) {
  return (
    <form onSubmit={handleSubmit} className="form">
    <label htmlFor="newitem">Add to the to do list</label>
    <input type="text" id="newitem" value={newTask} onChange={handleInputChange}></input>
    <button type="submit">Add Item</button>
</form>
  )
}

export default AddTaskForm