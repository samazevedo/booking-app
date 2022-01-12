import React, { useState } from 'react'
import { bookables } from '../../static.json'
import './BookablesList.style.scss'

export default function BookablesList() {
    const group = 'Rooms'
    const bookablesInGroup = bookables.filter((b) => b.group === group)
    const [bookableIndex, setBookableIndex] = useState(1)

    return (
        <ul className='bookables'>
            {bookablesInGroup.map((b, i) => (
                <li
                    key={b.title}
                    className={i === bookableIndex ? 'selected' : null}
                >
                    <button className='btn' onClick={() => setBookableIndex(i)}>
                        {b.title}
                    </button>
                </li>
            ))}
        </ul>
    )
}
