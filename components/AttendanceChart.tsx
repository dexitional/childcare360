"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Attendance",
  },
  chrome: {
    label: "Mon",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Tue",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Wed",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Thu",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Fri",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function AttendanceChart() {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <CardTitle className="px-6 py-0.5 w-fit rounded-full bg-secondary/40 text-primary/70 font-bold text-lg">WEEK ATTENDANCE</CardTitle>
        <CardDescription className="indent-14 text-primary font-semibold text-xs">17 January 2024 - 25 January 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground font-medium">
          Showing total attendance for the week
        </div>
      </CardFooter>
    </Card>
  )
}
