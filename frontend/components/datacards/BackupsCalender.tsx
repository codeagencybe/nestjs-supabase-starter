'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ResponsiveCalendar } from '@nivo/calendar'

const MyResponsiveCalendar = ({ data }: any) => {
    return <ResponsiveCalendar
        data={data}
        from="2024-01-01"
        to="2024-12-31"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', /* '#e8c1a0', '#f47560'  */]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
}

export default function BackupsCalender() {

    function generateDataArray(year: number, numberOfObjects: number, minValue: number, maxValue: number) {
        const dataArray = [];

        for ( let i = 1; i <= numberOfObjects; i++ ) {
            const randomValue = Math.floor( Math.random() * ( maxValue - minValue + 1 ) ) + minValue;
            const month = String( Math.floor( Math.random() * 12 ) + 1 ).padStart( 2, '0' );
            const day = String( Math.floor( Math.random() * 60 ) + 1 ).padStart( 2, '0' );
            const date = `${year}-${month}-${day}`;

            dataArray.push( { "value": randomValue, "day": date } );
        }
        return dataArray;

    }

    const data = generateDataArray(2024, 3800, 0, 500);

    return (  
        <Card>
            <CardHeader>
            <CardTitle>Backups</CardTitle>
            <CardDescription>Backups this year</CardDescription>                
                <CardContent className="h-[400px] flex items-center w-full">
                    <MyResponsiveCalendar data={data} />
                </CardContent>
            </CardHeader> 
        </Card>
    );
}