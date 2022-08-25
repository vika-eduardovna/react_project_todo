import React from 'react'

export default function ToDoForm({create}) {
    
    const submit = e => {
        e.preventDefault();
        const { todo } = e.target;
        create(todo.value);
        todo.value = '';
    }
    const form_style = {
        display: 'flex'
    };
    

    return (
        <form style={form_style} onSubmit={submit}>
            <input placeholder='description' type='text' name='todo'/>
            <button>Add</button>
        </form>
    )
}
