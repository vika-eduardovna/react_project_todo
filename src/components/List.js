import React, { useState } from 'react'

export default function List() {

    const data = [
        {
            id: 1,
            title: 'point 1'
        },
        {
            id: 2,
            title: 'point 2'
        }
    ];

    const [list, setList] = useState(data);
    const create = title => {
        const new_point = {
            id: Date.now(),
            title
        };
        const new_list = [...list, new_point];
        setList(new_list);
    };

    const del = id => {
        const new_list = list.filter(point => point.id !== id);
        setList(new_list)
    }
    const submit = event => {
        event.preventDefault();
        const { title } = event.target;
        create(title.value);
    };

    return (
        <div>
            <div>List</div>
            <form action="" onSubmit={submit}>
                <input type="text" placeholder="title" name="title" />
                <button>Add</button>
            </form>
            <div>
                {
                    list.map(elem =>
                        <p onDoubleClick={() => del(elem.id)}
                            key={elem.id}>
                            {elem.title} </p>)
                }
            </div>
        </div>
    )
}
