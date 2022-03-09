import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    const opacityValue = numberOfIncompleteTasks === 0 ? 0 : 1;
    return (
        <div className="todo-footer">
            <p role="paragraph" style={{opacity: opacityValue}}>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link to="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
