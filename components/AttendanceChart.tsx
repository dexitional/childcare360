"use client"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import moment from "moment";
import { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";


// const chartConfig = {
//   visitors: {
//     label: "Attendance",
//   },
//   chrome: {
//     label: "Mon",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Tue",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Wed",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Thu",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Fri",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig

export function AttendanceChart({ data }:any) {
  const [ config, setConfig ] = useState<any & ChartConfig>({ visitors: { label: "Attendance" } }) ;
  
  const colors = [
    { browser: "chrome",fill: "var(--color-chrome)", color: "hsl(var(--chart-1))" },
    { browser: "safari",fill: "var(--color-safari)", color: "hsl(var(--chart-2))" },
    { browser: "firefox",fill: "var(--color-firefox)", color: "hsl(var(--chart-3))" },
    { browser: "edge",fill: "var(--color-edge)", color: "hsl(var(--chart-4))" },
    { browser: "other", fill: "var(--color-other)", color: "hsl(var(--chart-5))" },
  ]

  // const chartData = [
  //   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  //   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  //   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  //   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  //   { browser: "other", visitors: 90, fill: "var(--color-other)" },
  // ]

  let chartData = data?.map((r:any,i:number) => ({
      browser: colors[i]?.browser,
      visitors: parseInt(r.num),
      fill: colors[i]?.fill
  }))

  const chartConfig = () =>  data?.map((r:any,i:number) => {
    setConfig({
      ...config,
      [colors[i].browser]: {
        label: r.period,
        color: colors[i]?.color   
      }
    });
  })

  useEffect(() => {
    chartConfig() 
  },[])
 console.log(config)
  return (
    <Card>
      <CardHeader className="space-y-4">
        <CardTitle className="px-6 py-0.5 w-fit rounded-full bg-secondary/40 text-primary/70 font-bold text-lg">WEEK ATTENDANCE</CardTitle>
        <CardDescription className="indent-14 text-primary font-semibold text-xs">{ moment().startOf('isoWeek').format("ddd MMM DD, YYYY")} - {moment().startOf('isoWeek').format("ddd MMM DD, YYYY")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
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
                config[value as keyof typeof chartConfig]?.label
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
