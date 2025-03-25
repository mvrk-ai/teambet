import { cn } from '../utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-md overflow-hidden border border-gray-100",
      className
    )}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn("px-6 py-4", className)}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className }: CardProps) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
};