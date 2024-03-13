'use client';

import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


export default function ProgressBar() {
    const [progress, setProgress] = React.useState(1)

    React.useEffect(() => {
    const timer = setTimeout(() => setProgress(95), 100)
    return () => clearTimeout(timer)
    }, [])
    
    return (
        <Card className="w-full ">
            <CardHeader>
                <CardTitle>Uptime</CardTitle>
                <CardDescription>Uptime this week</CardDescription>                
            <CardContent className="grid gap-4 p-4">
                <Progress value={progress} className="w-full" />
                <span className="font-bold">
                    95,99%
                </span>
            </CardContent>
           
            </CardHeader>
        </Card> 
    );
}