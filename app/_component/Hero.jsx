import { Button } from '@/components/ui/button'
import React from 'react'
import Authantication from './Authantication'

function Hero() {
    return (
        <div className="p-10 flex flex-col items-center justify-cente mt-24 
        md:px-24 lg:px-32 xl:px-40">
            <h1 className='text-4xl font-bold text-center '> AI YouTube Short Video Generator</h1>
            <p className='text-2xl  text-center mt-4 text-gray-500'>Generate YouTube Shorts in seconds with our AI-powered video generator. Just enter your text and let the magic happen!</p>
            <div className='mt-7 gap-8 flex'>
                <Button size="lg" variant="secondary" className='cursor-pointer'>Explore</Button>

                <Authantication>

                    <Button size="lg" className='cursor-pointer'>Get Started</Button>
                </Authantication>

            </div>
        </div>
    )
}

export default Hero
