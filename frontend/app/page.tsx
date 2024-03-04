import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
//import { BackupsCalendar } from "@/components/BackupsCalender";
//import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-[32px] p-4">
      <div className="grid grid-cols-2 gap-[32px]">
        Dashboard
        <div className="grid gap-[32px]">
          <Card className="h-[300px] p-4">Dashboard</Card>
          <Card className="h-[300px] p-4">Dashboard</Card>
        </div>
      </div>  

      <div className="grid grid-cols-3 gap-[32px]">
        <Card className="h-[300px] p-4">Dashboard data <Button>Test</Button></Card>
        <Card className="h-[300px] p-4">Dashboard data</Card>
        <Card className="h-[300px] p-4">Dashboard data {/* <BackupsCalendar /> */} </Card>
      </div>    
    </div>
    );
}
