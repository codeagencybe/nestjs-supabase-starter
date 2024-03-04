'use client';

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
import { useState } from "react";
  


export default function CommandBar() {
    const [open, setOpen] = useState<boolean>(false);
    return ( <div>

        <Command>
        <CommandInput placeholder="Type a command or search..." />
        {open && <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
            </CommandGroup>
        </CommandList> }
        </Command>
    </div>
);
}