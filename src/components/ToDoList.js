import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({ todos, del, change_done }) {
    return (
        <div>
            <p>ToDoList</p>
            <div>
                {
                todos.map(elem =><ToDoItem 
                    key={elem.id} 
                    del={del} {...elem}
                    change_done={change_done}
                    />)
                }
            </div>
        </div>
    )
}
