import React from 'react'
import DashbordProvider from './provider'

function DashbordLayout({ children }) {
    return (
        <div>
            <DashbordProvider>

                {children}
            </DashbordProvider>
        </div>
    )
}

export default DashbordLayout
