import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({ todos }) {
    return (
        <div>
            <p>ToDoList</p>
            <div>
                {
                    todos.map(row =>
                    <ToDoItem key={row.id} {...row}
                    />)
                }
            </div>

        </div>
    )
}
