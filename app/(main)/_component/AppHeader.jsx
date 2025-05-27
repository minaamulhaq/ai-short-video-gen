"use client"
import { useAuth } from '@/app/Provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image';
import React from 'react'

function AppHeader() {
    const user = useAuth();
    return (

        <div className='p-3 flex  justify-between items-center '>
            <SidebarTrigger className="cursor-pointer" />
            <Image src={user?.photoURL}
                alt="Logo"
                width={40}
                height={40}
                className='rounded-full' />

        </div>
        // 
    )
}

export default AppHeader
