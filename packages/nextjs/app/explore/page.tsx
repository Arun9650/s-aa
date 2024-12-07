"use client";

import { ProposalCard } from "@/components/cards/proposal-card";
import { Navbar } from "~~/components/navbar";

export default function Home() {
  const proposals = Array.from({ length: 20 }, (_, index) => ({
    name: `Naam ${index + 1}`,
    proposalCount: 91,
    id: index + 1,
  }));

  return (
    <div>
      <div className="fixed top-0 right-0 z-10 w-screen">
        <Navbar />
      </div>
      <div className="p-4 mt-20 grid grid-cols-5 gap-4">
        {proposals.map((proposal, index) => (
          <ProposalCard key={index} name={proposal.name} proposalCount={proposal.proposalCount} id={proposal.id} />
        ))}
      </div>
    </div>
  );
}
