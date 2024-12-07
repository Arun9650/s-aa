"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Search  from 'react-icons/go'
import { useAccount, useLogout, useSignerStatus } from "@alchemy/aa-alchemy/react";
import { getShortenAddress } from "~~/lib/utils";
import { accountType } from "~~/services/web3/wagmiConfig";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const { isConnected } = useSignerStatus();
  const { address } = useAccount({ type: accountType });
  const { logout } = useLogout();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* <img
            alt="Company Logo"
            className="h-8 w-8"
            src="/placeholder.svg?height=32&width=32"
          /> */}
          <span className="text-xl font-bold">Company Name</span>
        </div>
        <form onSubmit={handleSearch} className="flex-1 max-w-sm mx-4">
          <div className="relative">
            {/* <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" /> */}
            <Input
              type="search"
              placeholder="Search tasks..."
              className="pl-8"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        {isConnected && (
          <div className="flex gap-2">
            {address && <Button variant="outline">{getShortenAddress(address)}</Button>}

            <Button onClick={() => logout()} variant="outline">
              logout
            </Button>
          </div>
        )}
        {/* <Button variant="outline">Login</Button> */}
      </div>
    </nav>
  );
}
