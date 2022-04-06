import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { InitScreen } from '../components/init/InitScreen'
import { ReservationScreen } from '../components/reservation/ReservationScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                <Route path="/" element={<InitScreen />} />
                    <Route path="search"element={<SearchScreen/>}/>
                    <Route path="reservations" element={<ReservationScreen/>}/>
                </Routes>
            </div>
                
        </>
    )
}
