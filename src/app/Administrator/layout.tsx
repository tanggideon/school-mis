import React, { useEffect } from 'react'
import Sidebar from './(components)/sidebar'
import Navbar from './(components)/navbar'

const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
            <Sidebar />
            <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50`}> 
                <Navbar/>
                {children}
            </main>
        </div>
    )
}

export default layout