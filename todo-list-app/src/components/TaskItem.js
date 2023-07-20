import React from 'react'

function TaskItem({task, setTasksStatus,removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
    <span className="label">{task.title}</span>
    <div className="actions">
        <input type="checkbox" className="btn-action btn-action-done" checked={Boolean(task.status)}
            onChange={(e) => setTasksStatus(task.id, e.target.checked)}></input>
        <button className="btn-action btn-action-delete" onClick={(e) => removeTask(task.id)}>✖</button>
    </div>
</li>
  )
}

export default TaskItem