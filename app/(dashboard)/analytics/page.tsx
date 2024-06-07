"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // Static data for demonstration
  const monthlyRevenue = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 1500 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 2000 },
    { month: "May", revenue: 2200 },
    { month: "Jun", revenue: 2500 },
    { month: "Jul", revenue: 2800 },
    { month: "Aug", revenue: 3000 },
    { month: "Sep", revenue: 3200 },
    { month: "Oct", revenue: 3500 },
    { month: "Nov", revenue: 3800 },
    { month: "Dec", revenue: 4000 },
  ];

  const userEngagement = [
    { date: "2023-01-01", engagement: 100 },
    { date: "2023-01-02", engagement: 120 },
    { date: "2023-01-03", engagement: 150 },
    { date: "2023-01-04", engagement: 180 },
    { date: "2023-01-05", engagement: 200 },
    { date: "2023-01-06", engagement: 220 },
    { date: "2023-01-07", engagement: 250 },
    { date: "2023-01-08", engagement: 280 },
    { date: "2023-01-09", engagement: 300 },
    { date: "2023-01-10", engagement: 320 },
    { date: "2023-01-11", engagement: 350 },
    { date: "2023-01-12", engagement: 380 },
  ];

  const productCategories = [
    { category: "T-Shirts", value: 40 },
    { category: "Jeans", value: 30 },
    { category: "Shoes", value: 20 },
    { category: "Accessories", value: 10 },
  ];

  const topProducts = [
    { id: 1, name: "Product A", revenue: 1000 },
    { id: 2, name: "Product B", revenue: 800 },
    { id: 3, name: "Product C", revenue: 600 },
    { id: 4, name: "Product D", revenue: 400 },
    { id: 5, name: "Product E", revenue: 200 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#d0ed57"];
  if (!isMounted) {
    return null; // Prevents rendering on the server
  }
  return (
    <div className="mx-auto px-4">
      <div className="w-full flex items-end gap-4 border-b-2 border-[gray]/50 p-2 sticky top-0 left-0 bg-[white] z-20">
        <h2 className="text-2xl font-semibold leading-relaxed uppercase">
          Analytics
        </h2>
      </div>

      <div className="w-full flex flex-wrap gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="w-full text-xl font-medium mb-4">Monthly Revenue</h2>
          {monthlyRevenue.length > 0 && (
            <LineChart
              width={600}
              height={300}
              data={monthlyRevenue}
              className="w-full h-full"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} />
              <YAxis tickLine={false} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            </LineChart>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-medium mb-4">User Engagement</h2>
          {userEngagement.length > 0 && (
            <AreaChart
              width={600}
              height={300}
              data={userEngagement}
              className="w-full h-full"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickLine={false} />
              <YAxis tickLine={false} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="engagement"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-medium mb-4">Product Categories</h2>
          {productCategories.length > 0 && (
            <RadarChart
              cx={300}
              cy={250}
              outerRadius={150}
              width={500}
              height={500}
              data={productCategories}
              className="w-full h-full"
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis />
              <Radar
                name="Categories"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-medium mb-4">Top Products</h2>
          <BarChart
            width={600}
            height={300}
            data={topProducts}
            className="w-full h-full"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8">
              {topProducts.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default page;
