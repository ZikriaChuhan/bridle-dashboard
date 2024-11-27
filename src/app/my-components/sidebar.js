import { Flag } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import Logo from '../images/logo.svg'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LiaHorseHeadSolid } from "react-icons/lia";
import { TbCalendarStar } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi"
import { RiUserStarLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";



export function SideBar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel><Image src={Logo} alt="Logo" width={100} height={100} /></SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild isActive >
                                    <Link href='/' >
                                        <Flag className=" text-purple-700" />
                                        <span >Browse Events</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild >
                                    <Link href='/' >
                                    <TbCalendarStar />
                                        <span>My Events</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild >
                                    <Link href='/' >
                                    <FiMessageCircle />
                                        <span>Messages</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild >
                                    <Link href='/' >
                                    <LiaHorseHeadSolid />
                                        <span>My Horses</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild >
                                    <Link href='/' >
                                    <RiUserStarLine />
                                        <span>My Points</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild >
                                    <Link href='/' >
                                    <FaRegUserCircle />
                                        <span>My Profile</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
