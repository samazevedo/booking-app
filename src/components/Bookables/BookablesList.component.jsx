import React, { useState } from 'react'
import { bookables } from '../../static.json'
import './BookablesList.style.scss'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export default function BookablesList() {
    const group = 'Rooms'
    const bookablesInGroup = bookables.filter((b) => b.group === group)
    const [bookableIndex, setBookableIndex] = useState(1)

    function nextBookable() {
        setBookableIndex((i) => (i + 1) % bookablesInGroup.length)
    }
    function previousBookable() {
        setBookableIndex((i) => (i - 1) % bookablesInGroup.length)
    }

    return (
        <div>
            <ul className='bookables'>
                {bookablesInGroup.map((b, i) => (
                    <li
                        key={b.title}
                        className={i === bookableIndex ? 'selected' : null}
                    >
                        <button
                            className='btn'
                            onClick={() => setBookableIndex(i)}
                        >
                            {b.title}
                        </button>
                    </li>
                ))}
            </ul>
            <p>
                <button className='btn' onClick={previousBookable} autoFocus>
                    <FaArrowLeft />
                    <span> Previous</span>
                </button>
                <button className='btn' onClick={nextBookable} autoFocus>
                    <span>Next </span>
                    <FaArrowRight />
                </button>
            </p>
        </div>
    )
}
