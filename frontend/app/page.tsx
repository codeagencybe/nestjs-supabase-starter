import BackupsCalender from "@/components/datacards/BackupsCalender";
import General from "@/components/datacards/General";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
//import { BackupsCalendar } from "@/components/BackupsCalender";
//import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-[32px] p-4">
      <div className="text-2xl font-bold grid">codeagency.be 
      <span>
        <Badge variant="outline">PHP 8.3</Badge> <Badge variant="outline" >NGINX</Badge> <Badge className="bg-green-500">Redis</Badge> <Badge className="bg-red-600">Varnish</Badge> <Badge variant="outline" className=""> <span className="h-2 w-2 rounded-full bg-green-500">test</span> </Badge>
      </span>
      </div>
      <div className="grid grid-cols-2 gap-[32px]">
            <General />

        <div className="grid gap-[32px]">
          <BackupsCalender />
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
