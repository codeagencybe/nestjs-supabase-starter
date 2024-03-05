'use client';

import Workspace from "@/components/Workspace";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command";
import { Archive, Bell, Boxes, ClipboardCheck, Clock, Cookie, CreditCard, FileClock, FolderGit2, Globe, LayoutDashboard, MessageSquareText, Settings, User } from "lucide-react"  
  

export default function Sidebar() {

    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <LayoutDashboard />,
                    text: "Dashboard",
                },
                {
                    link: "/",
                    icon: <Boxes />,
                    text: "Workspaces",
                },
                {
                    link: "/",
                    icon: <Globe />,
                    text: "Websites",
                },
                {
                    link: "/",
                    icon: <Archive />,
                    text: "Backups",
                },
                {
                    link: "/",
                    icon: <MessageSquareText />,
                    text: "Logs",
                },
            ]
        },
        {
            group: "Project management",
            items: [
                {
                    link: "/",
                    icon: <FolderGit2 />,
                    text: "Projects",
                },
                {
                    link: "/",
                    icon: <ClipboardCheck />,
                    text: "Tasks",
                },
                {
                    link: "/",
                    icon: <Clock />,
                    text: "Timesheets",
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile",
                },
                {
                    link: "/",
                    icon: <CreditCard />,
                    text: "Billing",
                },
                {
                    link: "/",
                    icon: <Cookie />,
                    text: "Privacy",
                },
                {
                    link: "/",
                    icon: <Bell />,
                    text: "Notifications",
                },
                {
                    link: "/",
                    icon: <Settings />,
                    text: "Settings",
                },
            ]
        },
    ];

    return (<div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4 ">
        <div>
            <Workspace />
        </div>
        <div className="grow">
        <Command style={{ overflow: 'visible' }}>
            <CommandInput placeholder="Type a command or search..." />
                <CommandList style={{ overflow: 'visible' }}>
                    {menuList.map (( menu: any, key: number ) => (
                        <CommandGroup key={key} heading={menu.group}>
                            { menu.items.map (( option: any, optionKey: number ) => 
                                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                    {option.icon}
                                    {option.text}
                                </CommandItem>
                            )}
                        </CommandGroup>
                    ))}                    
                </CommandList>
            </Command> 
        </div>
        <div>Settings component</div>

    </div>
    );
}
