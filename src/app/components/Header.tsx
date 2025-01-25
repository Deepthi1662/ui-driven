"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Header } from "../../../node_modules/next/dist/lib/load-custom-routes";


const Header: React.FC<Header> = ({ onSubmitInput }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitInput(inputValue);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">

        <form onSubmit={handleSearchSubmit} className="w-full max-w-xl flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter CRN No"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button type="submit" 
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500">
            Submit
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
