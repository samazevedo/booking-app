import React from 'react'
import UsersList from '../../components/Users/Users-list/Users-list.component'
import './UsersPage.style.scss'

export default function UsersPage() {
    return (
        <main className='users-page'>
            <UsersList />
        </main>
    )
}
