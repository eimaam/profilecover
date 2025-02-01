import { Avatar, Card } from "antd";

interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export function TestimonialCard({ content, author }: TestimonialCardProps) {
  return (
    <Card className="!flex !flex-col !gap-12">
      <p className="text-lg text-muted-foreground italic">"{content}"</p>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <img src={author.avatar} alt={author.name} />
        </Avatar>
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.role}</p>
        </div>
      </div>
    </Card>
  );
}