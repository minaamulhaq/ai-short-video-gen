"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Authantication from './Authantication'
import { useAuth } from '../Provider'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
    const user = useAuth();
    //console.log("Data from Header",);
    return (

        <div className=' p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <img src="/logo.svg" alt="Logo"
                    width={40}
                    height={40} />
                <h1 className='text-2xl font-bold '>Video Gen</h1>
            </div>
            <div>
                {!user ?
                    <Authantication>
                        <Button className="cursor-pointer">Get Started</Button>
                    </Authantication>
                    : <div className='flex items-center gap-3'>
                        <Link href="/dashboard">
                            <Button className="cursor-pointer" variant="secondary" >Dashbord</Button>
                        </Link>
                        <Image src={user.photoURL} alt='image' width={40} height={40} className='rounded-full' />
                    </div>
                }
            </div>
        </div>


    )
}

export default Header
