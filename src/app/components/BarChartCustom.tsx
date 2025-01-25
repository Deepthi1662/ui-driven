"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

// Define the type for the data objects
interface GenericChartData {
  [key: string]: string | number;  // This allows any key with a string or number value
}

// Props for the GenericBarChart component
interface GenericBarChartProps {
  data: GenericChartData[];  // Array of data objects
  xKey: string;              // Key for the x-axis data
  yKey: string;              // Key for the y-axis data
}

// The BarChartCustom component
const BarChartCustom: React.FC<GenericBarChartProps> = ({ data, xKey, yKey }) => {
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}  // Abbreviate labels
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey={yKey} fill="var(--color-desktop)" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}

export default BarChartCustom
