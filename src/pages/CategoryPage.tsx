import { calculatorCategories, allCalculators } from '@/data/calculators';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';
import { Calculator, ArrowRight } from 'lucide-react';

interface CategoryPageProps {
  categoryKey: string;
}

export function CategoryPage({ categoryKey }: CategoryPageProps) {
  const category = calculatorCategories[categoryKey as keyof typeof calculatorCategories];
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const seoMetadata = {
    title: `${category.title} | FinCalculate`,
    description: category.description,
    keywords: [category.title.toLowerCase(), 'financial calculator', 'free calculator'],
    ogTitle: category.title,
    ogDescription: category.description,
  };

  const breadcrumbs = [
    { name: 'US', url: '/us/' },
    { name: category.title.replace('US ', ''), url: `/us/${categoryKey}/` },
  ];

  return (
    <>
      <SEO 
        metadata={seoMetadata}
        url={`/us/${categoryKey}/`}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbs} />
        
        <div className="mt-6 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {category.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.calculators.map((calcKey) => {
            const calc = allCalculators[calcKey];
            if (!calc) return null;
            
            return (
              <a
                key={calcKey}
                href={`/us/${categoryKey}/${calcKey}`}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {calc.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center text-sm text-primary font-medium">
                      Use Calculator
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Other Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Other Calculator Categories
          </h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(calculatorCategories)
              .filter(([key]) => key !== categoryKey)
              .map(([key, cat]) => (
                <a
                  key={key}
                  href={`/us/${key}/`}
                  className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {cat.title.replace('US ', '')}
                </a>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
