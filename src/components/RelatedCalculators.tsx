import type { RelatedCalculator } from '@/types/calculator';
import { Calculator, ArrowRight } from 'lucide-react';

interface RelatedCalculatorsProps {
  calculators: RelatedCalculator[];
}

export function RelatedCalculators({ calculators }: RelatedCalculatorsProps) {
  return (
    <section className="mt-12">
      <h2 className="section-title">Related Calculators</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc, index) => (
          <a
            key={index}
            href={calc.href}
            className="group p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {calc.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {calc.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
