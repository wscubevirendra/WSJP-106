import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <Header />
            <div className='grid grid-cols-4'>
                <aside>
                    Side Section
                </aside>
                <div className='col-span-3'>
                    <Outlet />
                </div>

            </div>

            <Footer />
        </>
    )
}
