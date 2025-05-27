import Image from 'next/image'
import React, { useState } from 'react'

export const Option = [
    {
        name: 'Realistic',
        image: '/realistic.png'
    },
    {
        name: 'Watercolor',
        image: '/watercolor.png'
    },
    {
        name: 'Cyberpunk',
        image: '/cyberpunk.png'
    },
    {
        name: 'Cinematic',
        image: '/cinematic.png'
    },
    {
        name: 'Anim',
        image: '/anim.png'
    },
    {
        name: 'Carton',
        image: '/3d.png'
    },
    {
        name: 'Gta',
        image: '/gta.png'
    }

]

function VideoStyle({ HandelChange }) {

    const [SlectedStyle, setSlectedStyle] = useState();
    return (
        <div className='mt-5'>
            <h2>Video Style</h2>
            <p className='text-sm text-gray-400 mb-1'>Slect Video Style</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                {Option.map((item, index) => (
                    <div className='relative'
                        key={index}
                        onClick={() => {
                            setSlectedStyle(item.name)
                            HandelChange("VideoStyle", item.name)
                        }}
                    >
                        <Image className={`p-1 object-cover h-[70px] md:h-[90px] lg:h-[130px] xl:h-[180px] rounded-lg hover:border border-gray-300 
                        cursor-pointer ${SlectedStyle == item.name && ' border-2 border-gray-300'}`}
                            src={item.image} alt='xvz'
                            width={100}
                            height={500}
                        />
                        <h2 className='absolute bottom-1 text-center w-full'>{item.name} </h2>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default VideoStyle
