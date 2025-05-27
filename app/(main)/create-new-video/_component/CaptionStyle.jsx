import React, { useState } from 'react'

function CaptionStyle({ HandelChange }) {
    const [SlectCaption, setSlectCaption] = useState();
    const Captions = [
        {
            name: "YouTube",
            style: `
      text-yellow-300 text-2xl font-black uppercase tracking-tight
      drop-shadow-lg
      select-none
      font-sans
    `.trim().replace(/\s+/g, ' ')
        },
        {
            name: "Supreme",
            style: "text-white text-2xl italic font-bold uppercase tracking-widest drop-shadow-lg"
        },
        {
            name: "NEON",
            style: "text-green-400 text-2xl font-extrabold tracking-wide drop-shadow-[0_0_10px_#00ff99]"
        },
        {
            name: "Fire",
            style: "text-orange-500 text-2xl font-bold tracking-widest animate-pulse drop-shadow-md"
        },
        {
            name: "Glitch",
            style: `
      text-pink-500 text-2xl font-bold tracking-wider 
      before:content-[''] before:absolute before:-left-0.5 before:text-cyan-500 before:blur-sm before:animate-ping
      after:content-[''] after:absolute after:-right-0.5 after:text-purple-500 after:blur-sm after:animate-ping
    `
        },
        {
            name: "Futuristic",
            style: `
      text-cyan-400 text-2xl font-extrabold uppercase tracking-widest
      drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]
      animate-pulse
      font-mono
    `.trim().replace(/\s+/g, ' ')
        },


    ];


    return (
        <div className='mt-5'>
            <h2>Caption Style</h2>
            <p className='text-sm text-gray-400'>Selct Captions</p>
            <div className='flex flex-wrap gap-5'>
                {Captions.map((cap, index) => (
                    <div className={`p-3 hover:border bg-slate-900 border-gray-300 cursor-pointer rounded-lg
                        ${SlectCaption == cap.name && 'border'}
                        `} key={index}
                        onClick={() => {
                            setSlectCaption(cap.name)
                            HandelChange('captions', cap)
                        }}
                    >
                        <h2 className={cap.style}>{cap.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CaptionStyle
