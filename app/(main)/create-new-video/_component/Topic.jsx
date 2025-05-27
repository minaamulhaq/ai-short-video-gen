"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { Loader2Icon, SparkleIcon } from 'lucide-react';
import React, { useState } from 'react'
const suggestion = [
    "Kids Stories",
    "AI Innovations",
    "Historic Story",
    "Space Discoveries",
    "Business Ideas",
    "Science Facts",
    "Tech News",
    "World History",
    "Health Tips",
    "Crypto Trends",
    "Marketing Strategies",
    "Brain Power"
];

function Topic({ HandelChange }) {
    const [Slected, setSlected] = useState("");
    const [script, setscript] = useState([]);
    const [loading, setloading] = useState(false);
    const [SlectedIndex, setSlectedIndex] = useState();
    const GenrateScript = async () => {
        try {
            setloading(true);
            const result = await axios.post("/api/genrate-script", {
                topic: Slected, // Make sure Slected is correctly spelled (should probably be "Selected")
            });
            console.log("Generated Script whole:", result);
            console.log("Generated Script:", result.data.script);
            setscript(result.data.script);

            // You can now use result.data.script[0].content etc. to show the scripts
        } catch (error) {
            console.error("Error generating script:", error?.response?.data || error.message);
        }
        setloading(false);
    };

    return (
        <div >
            <h2 className='mb-2'>Project Name</h2>
            <Input onChange={(e) => { HandelChange('title', e.target.value) }} placeholder="Enter Project Title" />
            <h2 className='mt-3'> Video Topic</h2>
            <h2 className='text-sm text-gray-500'>Slect topic of the video</h2>

            <Tabs defaultValue="Suggestions" className="w-full mt-2">
                <TabsList >
                    <TabsTrigger value="Suggestions" className={"cursor-pointer"}>Suggestions</TabsTrigger>
                    <TabsTrigger value="your-topic" className={"cursor-pointer"}>Your Topic</TabsTrigger>
                </TabsList>
                <TabsContent value="Suggestions">
                    <div>
                        {suggestion.map((item, index) => (
                            <Button key={index}
                                onClick={() => {
                                    setSlected(item)
                                    HandelChange("topic", item)
                                }
                                }
                                variant={item == Slected ? "secondary" : "outline"}
                                className={`m-1 cursor-pointer ${item == Slected ? "bg-gray-700" : ""}`} size="sm">{item}</Button>
                        ))}
                    </div>

                </TabsContent>
                <TabsContent value="your-topic">
                    <div>

                        <h2 >Enter your topic</h2>
                        <Textarea
                            placeholder="Enter your topic"
                            className="resize-none h-32"
                            onChange={(e) => { HandelChange("topic", e.target.value) }} />
                    </div>
                </TabsContent>
            </Tabs>
            {script?.length > 0 &&
                <div className='mt-3'>
                    <h2>Slect the Script</h2>
                    <div className='grid grid-cols-2 gap-5'>

                        {script?.map((item, index) => (
                            <div key={index}
                                className={`p-3 border rounded-lg mt-1 cursor-pointer ${SlectedIndex == index && 'border-white bg-secondary'}`}
                                onClick={() => { setSlectedIndex(index), HandelChange("script", item.content) }}
                            >
                                <h2 className='line-clamp-4 text-sm text-gray-500'>
                                    {item.content}
                                </h2>
                            </div>)
                        )}
                    </div>
                </div>
            }
            <Button className={'mt-4'} onClick={GenrateScript}
                disabled={loading}
            >
                {loading ? <Loader2Icon className='animate-spin' /> : <SparkleIcon />}Genrate Script</Button>
        </div >
    )
}

export default Topic
