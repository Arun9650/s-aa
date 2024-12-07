import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function CompanyDetails() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Company Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <img alt="Company Logo" className="h-20 w-20" src="/placeholder.svg?height=80&width=80" />
        </div>
        <div className="space-y-2">
          <Label>Wallet Address</Label>
          <p className="text-sm text-muted-foreground break-all">0x1234567890123456789012345678901234567890</p>
        </div>
        <div className="space-y-2">
          <Label>Contract Address</Label>
          <p className="text-sm text-muted-foreground break-all">0x0987654321098765432109876543210987654321</p>
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <p className="text-sm text-muted-foreground">
            Our company specializes in blockchain solutions and decentralized applications.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
