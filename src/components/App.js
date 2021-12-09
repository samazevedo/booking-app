import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import BookingsPage from '../pages/Bookings/BookingsPage'
import BookablesPage from '../pages/Bookables/BookablesPage'
import UsersPage from '../pages/Users/UsersPage'
import UserPicker from '../components/Users/UserPicker'
import './App.css'

export default function App() {
    return (
        <div className='App'>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/bookings' className='btn btn-header'>
                                <span>Bookings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/bookables' className='btn btn-header'>
                                <span>Bookables</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/users' className='btn btn-header'>
                                <span>Users</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <UserPicker />
            </header>
            <Routes>
                <Route path='/bookings' element={<BookingsPage />} />
                <Route path='/bookables' element={<BookablesPage />} />
                <Route path='users' element={<UsersPage />} />
            </Routes>
        </div>
    )
}
