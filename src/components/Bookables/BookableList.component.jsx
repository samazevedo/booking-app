import React from 'react'
import { bookables } from '../../static.json'

export default function BookablesList() {
    const group = 'Rooms'
    const bookablesInGroup = bookables.filter((b) => b.group === group)
    let bookablesIndex = 1

    function changeBookable(selectedIndex) {
        bookablesIndex = selectedIndex
        console.log(selectedIndex)
    }
    return (
        <ul classNam='bookables'>
            {bookablesInGroup.map((b, i) => (
                <li
                    key={b.title}
                    className={i === bookablesIndex ? 'selected' : null}
                >
                    <button className='btn' onClick={() => changeBookable(i)}>
                        {b.title}
                    </button>
                </li>
            ))}
        </ul>
    )
}
