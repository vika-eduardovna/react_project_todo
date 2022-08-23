import React from 'react'
import { users } from './data/users'
import User from './User'

export default function UsersList() {

    return (
        <div>
            {
                users.map(el => <User key={el.id} {...el} />)
            }
        </div>
    )

}

// используя массив users создайте множество компонентов User (по компоненту на каждый элемент массива)
// для этого используйте метод map
// не забудьте про key
