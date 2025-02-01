import { BannerTemplate } from '@/types/banner';
import { cn } from '@/lib/utils';
import { Card } from 'antd';

interface TemplateSelectorProps {
  selected: BannerTemplate;
  onSelect: (template: BannerTemplate) => void;
}

const templates = [
  {
    id: 'minimal' as const,
    name: 'Minimal',
    description: 'Clean and professional design',
  },
  {
    id: 'gradient' as const,
    name: 'Gradient',
    description: 'Modern gradient background',
  },
  {
    id: 'code' as const,
    name: 'Code',
    description: 'Developer-focused with code elements',
  },
];

export function TemplateSelector({ selected, onSelect }: TemplateSelectorProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={cn(
            'p-4 cursor-pointer hover:border-primary transition-colors',
            selected === template.id && 'border-primary'
          )}
          onClick={() => onSelect(template.id)}
        >
          <h3 className="font-semibold">{template.name}</h3>
          <p className="text-sm text-muted-foreground">{template.description}</p>
        </Card>
      ))}
    </div>
  );
}