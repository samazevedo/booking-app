import React from 'react'
import { users } from '../../../static.json'
import './User-picker.styles.scss'

export default function UserPicker() {
    return (
        <div className='user-picker'>
            <select className='select'>
                {users.map((user) => (
                    <option key={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    )
}
