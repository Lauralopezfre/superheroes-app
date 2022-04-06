import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeroScreen } from '../components/hero/HeroScreen'
import { InitScreen } from '../components/marvel/InitScreen'
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
                    {/* <Route path="hero/:name" element={<HeroScreen/>}/> */}
                    <Route path="reservations" element={<ReservationScreen/>}/>
                </Routes>
            </div>
                
        </>
    )
}
