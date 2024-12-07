import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ProposalCardProps {
  name: string
  proposalCount: number
  imageUrl?: string
  id: number;
}

export function ProposalCard({ name, id, proposalCount, imageUrl = "https://kzmjkn9141ba7eq0cqq8.lite.vusercontent.net/placeholder.svg?height=200&width=200"}: ProposalCardProps) {
  return (
    <Link href={`/proposals/${id}`}>

    <Card className="w-[250px] overflow-hidden border-2">
      <div className="aspect-square w-full relative">
        <img
          src={imageUrl}
          alt={`${name}'s proposal card`}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-2xl font-bold tracking-wide">{name}</h3>
        <p className="text-sm text-muted-foreground">{proposalCount} proposals</p>
      </CardContent>
    </Card>
          </Link>
  )
}

