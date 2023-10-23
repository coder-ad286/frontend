import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet-async'

const AdminLayout = () => {
    return (
        <>
            <Helmet>
            <title>JeeTrends-Admin</title>
            </Helmet>
            <Banner/>
            <Outlet/>
        </>
    )
}

export default AdminLayout