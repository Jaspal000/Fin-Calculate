import { 
  Calculator, TrendingUp, PiggyBank, Landmark, 
  CreditCard, BarChart3, Shield, Wallet 
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const categories = [
  {
    name: 'Loan Calculators',
    description: 'Calculate payments for mortgages, auto loans, personal loans, and more.',
    href: '/us/loan-calculators/',
    icon: CreditCard,
    calculators: ['Mortgage', 'Auto Loan', 'Personal Loan', 'Student Loan', 'Home Equity'],
  },
  {
    name: 'Tax Calculators',
    description: 'Estimate federal and state taxes, including income, capital gains, and property taxes.',
    href: '/us/tax-calculators/',
    icon: Landmark,
    calculators: ['Income Tax', 'Capital Gains', 'Self-Employment', 'Property Tax', 'Sales Tax'],
  },
  {
    name: 'Investment Calculators',
    description: 'Calculate returns, growth, and performance for stocks, bonds, and mutual funds.',
    href: '/us/investment-calculators/',
    icon: TrendingUp,
    calculators: ['Compound Interest', 'ROI', 'Dividend', 'Stock Return', 'Mutual Fund'],
  },
  {
    name: 'Retirement Calculators',
    description: 'Plan for retirement with 401(k), IRA, Social Security, and savings calculators.',
    href: '/us/retirement-calculators/',
    icon: PiggyBank,
    calculators: ['401(k)', 'IRA', 'Social Security', 'Annuity', 'Retirement Savings'],
  },
  {
    name: 'Personal Finance',
    description: 'Manage your money with budgeting, net worth, debt payoff, and savings calculators.',
    href: '/us/personal-finance/',
    icon: Wallet,
    calculators: ['Budget', 'Net Worth', 'Debt Payoff', 'Savings Goal', 'Emergency Fund'],
  },
];

const features = [
  {
    icon: Calculator,
    title: '25+ Free Calculators',
    description: 'Comprehensive tools for every financial need.',
  },
  {
    icon: BarChart3,
    title: 'Accurate Results',
    description: 'Based on current rates and formulas.',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'No personal data stored or shared.',
  },
];

export function HomePage() {
  const seoMetadata = {
    title: 'FinCalculate | Free Financial Calculators for US Market',
    description: 'Free financial calculators for loans, taxes, investments, retirement, and personal finance. Fast, accurate, and easy to use.',
    keywords: ['financial calculator', 'loan calculator', 'mortgage calculator', 'tax calculator', 'investment calculator', 'retirement calculator'],
    ogTitle: 'FinCalculate - Free Financial Calculators',
    ogDescription: '25+ free financial calculators for loans, taxes, investments, and retirement planning.',
  };

  return (
    <>
      <SEO 
        metadata={seoMetadata} 
        url="/"
        breadcrumbs={[{ name: 'Home', url: '/' }]}
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-foreground/10 rounded-2xl">
              <Calculator className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Free Financial Calculators
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Accurate, fast, and easy-to-use calculators for loans, taxes, investments, 
            retirement, and personal finance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/us/loan-calculators/mortgage-calculator" className="px-6 py-3 bg-primary-foreground text-primary font-medium rounded-lg hover:bg-primary-foreground/90 transition-colors">
              Mortgage Calculator
            </a>
            <a href="/us/retirement-calculators/retirement-savings-calculator" className="px-6 py-3 bg-primary-foreground/10 text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/20 transition-colors">
              Retirement Calculator
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Calculator Categories
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose from 25+ free calculators organized by category to help you make informed financial decisions.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.calculators.map((calc) => (
                    <span 
                      key={calc}
                      className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                    >
                      {calc}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Most Popular Calculators
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Mortgage Calculator', href: '/us/loan-calculators/mortgage-calculator' },
              { name: 'Income Tax Calculator', href: '/us/tax-calculators/income-tax-calculator' },
              { name: '401(k) Calculator', href: '/us/retirement-calculators/401k-calculator' },
              { name: 'Compound Interest', href: '/us/investment-calculators/compound-interest-calculator' },
              { name: 'Budget Calculator', href: '/us/personal-finance/budget-calculator' },
              { name: 'Retirement Savings', href: '/us/retirement-calculators/retirement-savings-calculator' },
              { name: 'Debt Payoff Calculator', href: '/us/personal-finance/debt-payoff-calculator' },
              { name: 'Auto Loan Calculator', href: '/us/loan-calculators/auto-loan-calculator' },
            ].map((calc) => (
              <a
                key={calc.name}
                href={calc.href}
                className="p-4 bg-white border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all text-center"
              >
                <span className="font-medium text-foreground">{calc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Calculating Today
          </h2>
          <p className="text-muted-foreground mb-8">
            All calculators are free to use with no registration required. 
            Get accurate results instantly to make better financial decisions.
          </p>
          <a 
            href="/us/loan-calculators/mortgage-calculator"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Our Mortgage Calculator
          </a>
        </div>
      </section>
    </>
  );
}
