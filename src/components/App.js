import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import BookingsPage from '../pages/Bookings/BookingsPage'
import BookablesPage from '../pages/Bookables/BookablesPage'
import UsersPage from '../pages/Users/UsersPage'
import UserPicker from '../components/Users/User-picker/User-picker.component'
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa'
import './App.scss'

export default function App() {
    return (
        <div className='App'>
            <header className='main-header'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/bookings' className='btn btn-header'>
                                <FaCalendarAlt />
                                <span> Bookings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/bookables' className='btn btn-header'>
                                <FaDoorOpen />
                                <span> Bookables</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/users' className='btn btn-header'>
                                <FaUsers />
                                <span> Users</span>
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
