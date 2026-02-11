import { stateMortgageData } from '@/data/calculators';
import { calculateMortgage } from '@/lib/calculators';
import { Calculator } from '@/components/Calculator';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FAQ } from '@/components/FAQ';
import { RelatedCalculators } from '@/components/RelatedCalculators';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { SEO } from '@/components/SEO';

interface StateMortgagePageProps {
  stateKey: string;
}

export function StateMortgagePage({ stateKey }: StateMortgagePageProps) {
  const stateData = stateMortgageData[stateKey];

  if (!stateData) {
    return <div>State not found</div>;
  }

  const seoMetadata = {
    title: `${stateData.state} Mortgage Calculator | Property Taxes & Payments`,
    description: `Calculate mortgage payments in ${stateData.state} including property taxes. Free calculator with state-specific rates and information.`,
    keywords: [`${stateData.state.toLowerCase()} mortgage calculator`, `${stateData.stateCode.toLowerCase()} mortgage`, 'property tax calculator', 'home loan calculator'],
    ogTitle: `${stateData.state} Mortgage Calculator`,
    ogDescription: `Calculate mortgage payments in ${stateData.state} with state-specific property tax rates.`,
  };

  const breadcrumbs = [
    { name: 'US', url: '/us/' },
    { name: 'Loan Calculators', url: '/us/loan-calculators/' },
    { name: 'Mortgage Calculator', url: '/us/loan-calculators/mortgage-calculator' },
    { name: stateData.state, url: `/us/loan-calculators/mortgage-calculator/${stateKey}/` },
  ];

  const mortgageInputs = [
    { label: 'Home Price', name: 'homePrice', type: 'currency' as const, placeholder: stateData.avgHomePrice.toLocaleString(), required: true },
    { label: 'Down Payment', name: 'downPayment', type: 'currency' as const, placeholder: Math.round(stateData.avgHomePrice * 0.2).toLocaleString(), required: true },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent' as const, placeholder: '6.5', min: 0, max: 20, step: 0.01, required: true },
    { label: 'Loan Term', name: 'loanTerm', type: 'years' as const, placeholder: '30', min: 1, max: 50, required: true },
    { label: 'Property Tax (Monthly)', name: 'propertyTax', type: 'currency' as const, placeholder: Math.round(stateData.avgHomePrice * stateData.propertyTaxRate / 100 / 12).toLocaleString() },
    { label: 'Home Insurance (Monthly)', name: 'homeInsurance', type: 'currency' as const, placeholder: '150' },
    { label: 'HOA Fees (Monthly)', name: 'hoaFees', type: 'currency' as const, placeholder: '0' },
  ];

  const relatedCalculators = [
    { title: 'National Mortgage Calculator', description: 'US mortgage calculator with all options', href: '/us/loan-calculators/mortgage-calculator' },
    { title: 'Property Tax Calculator', description: 'Calculate property taxes by state', href: '/us/tax-calculators/property-tax-calculator' },
    { title: 'Home Equity Calculator', description: 'Calculate available home equity', href: '/us/loan-calculators/home-equity-calculator' },
    { title: 'Budget Calculator', description: 'Plan your monthly budget', href: '/us/personal-finance/budget-calculator' },
    { title: 'Retirement Savings Calculator', description: 'Plan for retirement', href: '/us/retirement-calculators/retirement-savings-calculator' },
  ];

  const combinedFAQs = [
    ...stateData.stateSpecificFAQs,
    { question: 'What is the average mortgage rate?', answer: 'Mortgage rates fluctuate daily. As of 2024, 30-year fixed rates typically range from 6.5% to 7.5% depending on credit score, down payment, and lender.' },
    { question: 'How much down payment do I need?', answer: 'While 20% avoids PMI, many loans accept 3-5% down. FHA loans require 3.5%, VA loans may require 0%.' },
  ];

  return (
    <>
      <SEO 
        metadata={seoMetadata}
        url={`/us/loan-calculators/mortgage-calculator/${stateKey}/`}
        breadcrumbs={breadcrumbs}
        faqs={combinedFAQs}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbs} />
        
        <article className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {stateData.state} Mortgage Calculator
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            {stateData.intro}
          </p>

          <AdPlaceholder position="intro" />

          {/* State-specific info */}
          <section className="mt-8 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {stateData.state} Property Tax Information
            </h2>
            <p className="text-muted-foreground mb-4">
              {stateData.propertyTaxDescription}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Average Property Tax Rate</p>
                <p className="text-2xl font-bold text-primary">{stateData.propertyTaxRate}%</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Average Home Price</p>
                <p className="text-2xl font-bold text-primary">${stateData.avgHomePrice.toLocaleString()}</p>
              </div>
            </div>
          </section>

          {/* Local example */}
          <section className="mt-8">
            <h2 className="section-title">Example: {stateData.state} Home Purchase</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">{stateData.localExample}</p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Estimated Monthly Property Tax</p>
                <p className="text-3xl font-bold text-primary">
                  ${Math.round(stateData.avgHomePrice * stateData.propertyTaxRate / 100 / 12).toLocaleString()}/month
                </p>
              </div>
            </div>
          </section>

          {/* Calculator */}
          <section className="mt-12">
            <h2 className="section-title">{stateData.state} Mortgage Calculator</h2>
            <Calculator inputs={mortgageInputs} calculate={calculateMortgage} />
          </section>

          <AdPlaceholder position="results" />

          {/* How it works */}
          <section className="mt-12">
            <h2 className="section-title">How This Calculator Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Enter your home purchase price and down payment amount.</li>
              <li>Input your expected interest rate and loan term.</li>
              <li>Add estimated monthly costs for property tax, insurance, and HOA fees.</li>
              <li>Click Calculate to see your monthly payment and total loan cost.</li>
              <li>Review the breakdown to understand principal vs. interest over time.</li>
            </ol>
          </section>

          <AdPlaceholder position="mid-content" />

          {/* State-specific FAQs */}
          <FAQ faqs={combinedFAQs} />

          {/* Link to national calculator */}
          <section className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Looking for More Options?
            </h2>
            <p className="text-muted-foreground mb-4">
              Try our national mortgage calculator with additional features and customization options.
            </p>
            <a 
              href="/us/loan-calculators/mortgage-calculator"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Go to National Mortgage Calculator
            </a>
          </section>

          <RelatedCalculators calculators={relatedCalculators} />

          {/* Disclaimer */}
          <section className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-lg font-semibold text-foreground mb-2">Disclaimer</h2>
            <p className="text-sm text-muted-foreground">
              This calculator provides estimates for informational purposes only. 
              Property tax rates vary by county and municipality within {stateData.state}. 
              Please consult with a local real estate professional or lender for accurate 
              rates and payment information specific to your situation.
            </p>
          </section>

          <p className="mt-6 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </article>
      </div>
    </>
  );
}
