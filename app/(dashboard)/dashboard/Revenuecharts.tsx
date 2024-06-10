"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";
const data = [
  { name: "M", sale: 200, items: 24 },
  { name: "T", sale: 180, items: 22 },
  { name: "W", sale: 150, items: 18 },
  { name: "T", sale: 220, items: 26 },
  { name: "F", sale: 210, items: 25 },
  { name: "S", sale: 250, items: 28 },
  { name: "S", sale: 190, items: 23 },
];
const cardinal = curveCardinal.tension(0.2);

export default function RevenueCharts() {
  return (
    <ResponsiveContainer height="100%" width="100%" className={"w-full "}>
      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" className="text-xs font-semibold" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sale"
          stroke="#8884d8"
          fill="#9f80d1"
          fillOpacity={0.3}
        />
        <Area
          type={cardinal}
          dataKey="name"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
