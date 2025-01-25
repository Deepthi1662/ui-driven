import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface CardProps {
  title: string;
  details: Record<string, string>;
}

const CardDetails: React.FC<CardProps> = ({ title, details }) => {
    if (!details) {
        return <div>No data available.</div>;
    }  
  return (
    <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(details).map(([key, value]) => (
              <div className="flex flex-col" key={key}>
              <span className="font-semibold text-gray-1200">{key}</span>
              <span className="text-gray-1000">{value}</span>
            </div>
            ))}
          </div>
          </div>
        </CardContent>
    </Card>
  );
};

export default CardDetails;