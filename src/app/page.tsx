"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import CardDetails from "./components/CardDetails";
import { Customer360, fetchCustomer360Details } from "./services/customer";
import BarChartCustom from "./components/BarChartCustom";
import Sidebar from "./components/Sidebar";
import LineChartCustom from "./components/LineChartCustom";

export default function Dashboard() {
  const [inputValue, setInputValue] = useState<string>("");
  const [response, setResponse] = useState<Customer360>();

  const handleSubmit = (input: string) => {
    setInputValue(input);
    const response = fetchCustomer360Details(input);
    setResponse(response);
  };

  const profileDetails: Record<string, string> = response
    ? {
        "customer ID": response?.customerId,
        "Customer Name": response?.customerName,
        "Creation Date": response?.creationDate,
        DOB: response?.dob,
      }
    : {};

  const relationshipDetails: Record<string, string> = response
    ? {
        "CRN LOB": response?.crnLob,
        RM: response?.rm,
        Branch: response?.branch,
        Category: response?.category,
        Segment: response?.segment,
      }
    : {};

  const desktopData = [
    { xKey: "Day1", balance: 10000 },
    { xKey: "Day2", balance: 5000 },
    { xKey: "Day3", balance: 6000 },
    { xKey: "Day4", balance: 7000 },
    { xKey: "Day5", balance: 4000 },
    { xKey: "Day6", balance: 8000 },
  ];
  const menuItems = [
    { label: "Dashboard" },
    { label: "Profile" },
    { label: "Settings" },
    { label: "Logout" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header onSubmitInput={handleSubmit} />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar menuItems={menuItems} />
        <div className="flex-1">
          <main className="mt-20 p-4">
            <CardDetails
              title="Profile Details"
              details={profileDetails}
            ></CardDetails>
            <br></br>
            <CardDetails
              title="Relationship Details"
              details={relationshipDetails}
            ></CardDetails>
            <BarChartCustom data={desktopData} xKey="days" yKey="balance" />
            <LineChartCustom data={desktopData} xKey="days" yKey="balance" />
            <br />
          </main>
        </div>
      </div>
    </div>
  );
}
