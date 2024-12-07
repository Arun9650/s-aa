'use client';
import { CompanyDetails } from "@/components/company-details"
import { TaskList } from "@/components/proposal-list"
import { Navbar } from "~~/components/navbar"

export default function Home() {
  return (
    <div>
         <div className="fixed top-0 right-0 z-10 w-screen">

<Navbar/>
</div>
    <div className="container mx-auto py-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Company Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <CompanyDetails />
        </div>
        <div className="md:col-span-3">
          <TaskList />
        </div>
      </div>
    </div>
    </div>
  )
}

