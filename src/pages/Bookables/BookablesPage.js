import React from 'react'
import BookablesList from '../../components/Bookables/BookablesList.component'
import './BookablesPage.styles.scss'

export default function BookablesPage() {
    return (
        <main className='bookables-page'>
            <BookablesList />
        </main>
    )
}
