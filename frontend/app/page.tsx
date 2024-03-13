import BackupsCalender from "@/components/datacards/BackupsCalender";
import General from "@/components/datacards/General";
import ProgressBar from "@/components/datacards/ProgressBar";
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
          <Badge variant="secondary" className="m-1">PHP 8.3</Badge> 
          <Badge variant="secondary" className="m-1" >NGINX</Badge> 
          <Badge variant="success" className="m-1" >Redis</Badge> 
          <Badge variant="destructive" className="m-1">Varnish</Badge> 
          <Badge variant="secondary" className="m-1"> 
            <span className="h-2 w-2 rounded-full bg-green-500 m-1">
              
            </span>Test
          </Badge>
      </span>
      </div>
      <div className="grid grid-cols-2 gap-[32px]">
            <General />

        <div className="grid gap-[32px]">
          <BackupsCalender />
        </div>
      </div>  

      <div className="grid grid-cols-3 gap-[32px]">
        <ProgressBar />

        <Card className="h-[400px] p-4">
          Dashboard data {/* <BackupsCalendar /> */}
        </Card>
        
        <Card className="h-[400px] p-4">
          Dashboard data {/* <BackupsCalendar /> */}
        </Card>
      </div>    
    </div>
    );
}
