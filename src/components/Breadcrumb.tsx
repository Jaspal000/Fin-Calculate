import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { name: string; url: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <a href="/" className="flex items-center hover:text-primary transition-colors">
        <Home className="w-4 h-4" />
      </a>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-1" />
          {index === items.length - 1 ? (
            <span className="text-foreground font-medium">{item.name}</span>
          ) : (
            <a href={item.url} className="hover:text-primary transition-colors">
              {item.name}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
}
