"use client"
import { useAuth } from "@/app/Provider"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Gem, HomeIcon, LucideFileVideo, Search, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

function AppSlidebar() {
    const path = usePathname();
    const user = useAuth();
    const ManueItems = [
        {
            title: "Home",
            url: "/dashboard",
            icon: HomeIcon,
        },
        {
            title: "Create New Video",
            url: "/create-new-video",
            icon: LucideFileVideo,
        },
        {
            title: "Explore",
            url: "/explore",
            icon: Search,
        },

        {
            title: "Billing",
            url: "/billing",
            icon: Wallet,
        },
    ]
    return (
        <Sidebar>
            <SidebarHeader />
            <div className="flex items-center justify-center p-1 gap-4">
                <Image src="/logo.svg" alt="Logo" width={30} height={30} />
                <h1 className="text-2xl font-bold text-center">Video Gen</h1>
            </div>
            <h2 className="text-lg text-gray-500 text-center mt-2">Ai Video Genrator</h2>
            <SidebarContent className={"mx-5"}>
                <SidebarGroup >
                    <SidebarGroupContent>
                        <div className="mx-0 mt-5">
                            <Link href={"/create-new-video"}>
                                <Button className={" w-full cursor-pointer"}>+Create New Video</Button>
                            </Link>
                        </div>
                        <SidebarMenu >
                            {ManueItems.map((item, index) => (

                                <SidebarMenuItem className={"mt-2"} key={index} >
                                    <SidebarMenuButton isActive={path == item.url} className={"p-5 w-full"}>
                                        <Link href={item.url} key={index} className="flex items-center gap-2 cursor-pointer">
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                            ))

                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <div className="p-5 border rounded-lg mb-6 bg-gray-900">
                    <div className="flex items-center justify-between">
                        <Gem className="text-gray-400" />
                        <h2 className="text-gray-400">{user?.creadit} Creadit left</h2>
                    </div>
                    <Button className="w-full mt-3 cursor-pointer">Buy More Creadit</Button>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSlidebar
