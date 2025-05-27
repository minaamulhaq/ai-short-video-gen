import React from 'react'
import { Option } from './VideoStyle'
import Image from 'next/image';

function Preview({ FormData }) {
    const VideoStyle = FormData && Option.find((item => item.name == FormData?.VideoStyle));
    return (
        <div className='relative'>
            <h2 className='mb-3'>Preview</h2>
            <Image src={VideoStyle?.image} alt={VideoStyle?.name} width={1000} height={300}
                className='w-full h-[70vh] object-cover rounded-xl'
            />
            <h2 className={`${FormData?.captions?.style} absolute bottom-[35px] w-full text-center`}>{FormData?.captions?.name}</h2>
        </div>
    )
}

export default Preview
