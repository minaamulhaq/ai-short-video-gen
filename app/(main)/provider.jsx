"use client"
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { useEffect } from 'react'
import AppSlidebar from './_component/AppSlidebar'
import AppHeader from './_component/AppHeader'
import { useAuth } from '../Provider'
import { useRouter } from 'next/navigation'

function DashbordProvider({ children }) {
    const user = useAuth();
    const router = useRouter();
    useEffect(() => {
        user && checkUser();

    }, [user])
    const checkUser = () => {
        if (!user) {
            router.replace("/");
        }
    }

    return (
        <div>
            <SidebarProvider>
                <AppSlidebar />
                <div className='w-full'>
                    <AppHeader />
                    <div className='p-10'>

                        {children}
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}

export default DashbordProvider
