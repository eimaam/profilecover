import { GradientPreset } from '@/types/banner';

const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: 'blue-purple',
    name: 'Blue Purple',
    from: 'from-blue-600',
    to: 'to-purple-600',
    direction: 'bg-gradient-to-br'
  },
  {
    id: 'green-blue',
    name: 'Green Blue',
    from: 'from-green-400',
    to: 'to-blue-500',
    direction: 'bg-gradient-to-r'
  },
  {
    id: 'orange-pink',
    name: 'Orange Pink',
    from: 'from-orange-500',
    to: 'to-pink-500',
    direction: 'bg-gradient-to-tr'
  },
  {
    id: 'indigo-cyan',
    name: 'Indigo Cyan',
    from: 'from-indigo-500',
    to: 'to-cyan-400',
    direction: 'bg-gradient-to-r'
  },
];

interface GradientPickerProps {
  value?: { from: string; to: string; direction: string };
  onChange: (value: { from: string; to: string; direction: string }) => void;
}

export function GradientPicker({ value, onChange }: GradientPickerProps) {
  const currentId = GRADIENT_PRESETS.find(
    preset => 
      preset.from === value?.from && 
      preset.to === value?.to && 
      preset.direction === value?.direction
  )?.id || GRADIENT_PRESETS[0].id;

  return (
    <div className="space-y-4">
      {/* <Label>Gradient Style</Label>
      <RadioGroup
        value={currentId}
        onValueChange={(id) => {
          const preset = GRADIENT_PRESETS.find(p => p.id === id);
          if (preset) {
            onChange({
              from: preset.from,
              to: preset.to,
              direction: preset.direction
            });
          }
        }}
        className="grid grid-cols-2 gap-4"
      >
        {GRADIENT_PRESETS.map((preset) => (
          <div key={preset.id} className="relative">
            <RadioGroupItem
              value={preset.id}
              id={preset.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={preset.id}
              className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <div
                className={`w-full h-16 rounded-md ${preset.direction} ${preset.from} ${preset.to}`}
              />
              <span className="mt-2">{preset.name}</span>
            </Label>
          </div>
        ))}
      </RadioGroup> */}
    </div>
  );
}