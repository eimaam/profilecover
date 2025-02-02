import { CoverTemplate } from '@/types/cover';
import { cn } from '@/lib/utils';
import { Card } from 'antd';
import { AntdCard } from '../ui/AntdCard';

interface TemplateSelectorProps {
  selected: CoverTemplate;
  onSelect: (template: CoverTemplate) => void;
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
        <AntdCard
          key={template.id}
          className={cn(
            'cursor-pointer hover:border-primary transition-colors',
            selected === template.id && 'border-primary'
          )}
          onClick={() => onSelect(template.id)}
        >
          <h3 className="font-semibold">{template.name}</h3>
          <p className="text-sm text-muted-foreground">{template.description}</p>
        </AntdCard>
      ))}
    </div>
  );
}