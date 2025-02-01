import { Badge, Button, Card } from "antd";
import { Crown, CheckCircle2 } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  badge?: string;
}

export function PricingCard({ 
  title, 
  price, 
  features, 
  buttonText, 
  badge 
}: PricingCardProps) {
  return (
    <>
    {
      badge &&
      <Badge>
    <Card className="p-8 relative">
      {/* {badge && (
        <Badge className="absolute -top-3 right-4 flex items-center bg-blue-200 p-2">
          <Crown className="w-4 h-4 mr-1" />
          {badge}
        </Badge>
      )} */}
      
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price === "$49" && <span className="text-muted-foreground ml-2">one-time</span>}
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className="w-full"  type="primary">
        {buttonText}
      </Button>
    </Card>
      </Badge>
    
    
    }
    </>
  );
}