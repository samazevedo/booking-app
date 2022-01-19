import { useState } from 'react'
import { users } from '../../../static.json'

export default function UserList() {
    const [userIndex, setUserIndex] = useState(0)

    return (
        <ul className='users item-list-nav'>
            {users.map((user, index) => (
                <li
                    key={user.id}
                    className={index === userIndex ? 'selected' : null}
                >
                    <button className='btn' onClick={() => setUserIndex(index)}>
                        {user.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}
