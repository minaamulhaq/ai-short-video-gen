"use client"
import React, { useState } from 'react'
import Topic from './_component/Topic'
import VideoStyle from './_component/VideoStyle';
import AudioStyle from './_component/AudioStyle';
import CaptionStyle from './_component/CaptionStyle';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import Preview from './_component/Preview';
import axios from 'axios';


function page() {
    const [FormData, setFormData] = useState();
    const HandelChange = (fieldName, fieldValue) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }
    console.log(FormData);
    const GEnrateNewVideo = async () => {
        if (!FormData.script || !FormData.topic || !FormData.VideoStyle || !FormData.voice || !FormData.captions) {
            console.log(' Error :Please fill all the fields');
            return;
        }
        const respoce = await axios.post('/api/genrate-video-data', {
            ...FormData
        });
        console.log(respoce);
    }

    return (
        <div>

            <h2 className='text-3xl '>Create New Video</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-7'>
                <div className='col-span-2 p-7 border rounded-lg h-[70vh] overflow-auto'>
                    {/* Topic && Script */}
                    <Topic HandelChange={HandelChange} />
                    {/* Style and Images */}
                    <VideoStyle HandelChange={HandelChange} />
                    {/* Voice of script */}
                    <AudioStyle HandelChange={HandelChange} />
                    {/* captions */}
                    <CaptionStyle HandelChange={HandelChange} />
                    <Button className={'mt-3 w-full'}
                        onClick={GEnrateNewVideo}
                    ><WandSparkles /> Genrate Video</Button>

                </div>
                <div>
                    <Preview FormData={FormData} />
                </div>
            </div>

        </div>
    )
}

export default page
