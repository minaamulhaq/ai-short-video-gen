
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useState } from 'react'

function AudioStyle({ HandelChange }) {
    const [slectedVoice, setslectedVoice] = useState();
    const VoiceOptions = [
        { name: "🇺🇸 Adam (Male)", value: "am_adam" },
        { name: "🇺🇸 Echo (Female)", value: "am_echo" },
        { name: "🇺🇸 Eric (Male)", value: "am_eric" },
        { name: "🇺🇸 Fenrir (Male)", value: "am_fenrir" },
        { name: "🇬🇧 Alloy (Male)", value: "af_alloy" },
        { name: "🇬🇧 Aoedy (Female)", value: "af_aoedy" },
        { name: "🇬🇧 Bella (Female)", value: "af_bella" },
        { name: "🇬🇧 Jessica (Female)", value: "af_jessica" }
    ];


    return (
        <div className='mt-5'>
            <h2>Voice Style</h2>

            <p className='text-sm text-gray-400'> All the audio created Heare</p>
            <ScrollArea className={`h-[200px] p-4`}>
                <div className='grid grid-cols-2 gap-3 '>
                    {VoiceOptions.map((voice, index) => (
                        <h2 className={`cursor-pointer p-2 dark:bg-slate-900 dark:border-white rounded-lg
                    hover:border ${slectedVoice == voice.name && 'border'} `} key={index}
                            onClick={() => {
                                setslectedVoice(voice.name)
                                HandelChange('voice', voice.value);
                            }}>{voice.name}</h2>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default AudioStyle
