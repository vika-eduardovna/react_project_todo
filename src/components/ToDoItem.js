import React from 'react'

export default function ToDoItem(props) {
    const { id, title, done } = props;
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        border: '2px solid black',
        padding: '10px',
        margin: '10px',
        backgroundColor: done ? "#2ecc71" : "#bdc3c7"
    }
    return (
        <div style={style}>
            <p> id: {id}</p>
            <p> title: {title}</p>
            <p> done: {done}</p>
        </div>
    )
}
