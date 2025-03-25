import { cn } from '../utils';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export function SectionHeading({
  title,
  description,
  icon: Icon,
  className,
  iconClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-12", className)}>
      <div className="inline-flex items-center justify-center gap-3 mb-4">
        {Icon && <Icon className={cn("w-8 h-8", iconClassName)} />}
        <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
      </div>
      {description && (
        <p className="text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
}