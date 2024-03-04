'use client';
import CommandBar from "@/components/CommandBar";
import { BellIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    return ( 
        <div className="grid grid-cols-2 gap-4 p-4 border-b">
            <CommandBar />
            <div className="flex items-center justify-end">
                <Button variant="outline" size="icon">
                    <BellIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}