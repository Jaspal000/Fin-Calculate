import type { CalculatorPageData } from '@/types/calculator';
import { Calculator } from './Calculator';
import { Breadcrumb } from './Breadcrumb';
import { FAQ } from './FAQ';
import { RelatedCalculators } from './RelatedCalculators';
import { AdPlaceholder } from './AdPlaceholder';
import { SEO } from './SEO';

interface CalculatorPageProps {
  data: CalculatorPageData;
  breadcrumbs: { name: string; url: string }[];
  url: string;
  additionalContent?: React.ReactNode;
}

export function CalculatorPage({ data, breadcrumbs, url, additionalContent }: CalculatorPageProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <SEO 
        metadata={data.seo} 
        url={url} 
        breadcrumbs={breadcrumbs}
        faqs={data.faqs}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbs} />
        
        <article className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            {data.intro}
          </p>

          <AdPlaceholder position="intro" />

          <section className="mt-8">
            <h2 className="section-title">Calculator</h2>
            <Calculator inputs={data.inputs} calculate={data.calculate} />
          </section>

          <AdPlaceholder position="results" />

          <section className="mt-12">
            <h2 className="section-title">How This Calculator Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              {data.howItWorks.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="section-title">Example Calculation</h2>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">{data.example.title}</h3>
              <p className="text-muted-foreground mb-4">{data.example.description}</p>
              <div className="grid gap-3 md:grid-cols-3">
                {data.example.results.map((result, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">{result.label}</p>
                    <p className={`text-xl font-bold ${result.isPrimary ? 'text-primary' : 'text-foreground'}`}>
                      {result.formatted}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <AdPlaceholder position="mid-content" />

          {additionalContent}

          <FAQ faqs={data.faqs} />

          <RelatedCalculators calculators={data.relatedCalculators} />

          <section className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-lg font-semibold text-foreground mb-2">Disclaimer</h2>
            <p className="text-sm text-muted-foreground">
              This calculator provides estimates for informational purposes only and should not be considered financial advice. 
              Actual results may vary based on individual circumstances, market conditions, and specific loan terms. 
              Please consult with a qualified financial advisor before making important financial decisions.
            </p>
          </section>

          <p className="mt-6 text-sm text-muted-foreground">
            Last updated: {currentDate}
          </p>
        </article>
      </div>
    </>
  );
}
