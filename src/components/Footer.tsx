import { Calculator } from 'lucide-react';

const footerLinks = {
  'Loan Calculators': [
    { name: 'Mortgage Calculator', href: '/us/loan-calculators/mortgage-calculator' },
    { name: 'Auto Loan Calculator', href: '/us/loan-calculators/auto-loan-calculator' },
    { name: 'Personal Loan Calculator', href: '/us/loan-calculators/personal-loan-calculator' },
    { name: 'Student Loan Calculator', href: '/us/loan-calculators/student-loan-calculator' },
  ],
  'Tax Calculators': [
    { name: 'Income Tax Calculator', href: '/us/tax-calculators/income-tax-calculator' },
    { name: 'Capital Gains Tax', href: '/us/tax-calculators/capital-gains-tax-calculator' },
    { name: 'Property Tax Calculator', href: '/us/tax-calculators/property-tax-calculator' },
    { name: 'Sales Tax Calculator', href: '/us/tax-calculators/sales-tax-calculator' },
  ],
  'Investment': [
    { name: 'Compound Interest', href: '/us/investment-calculators/compound-interest-calculator' },
    { name: 'ROI Calculator', href: '/us/investment-calculators/roi-calculator' },
    { name: 'Stock Return Calculator', href: '/us/investment-calculators/stock-return-calculator' },
    { name: 'Dividend Calculator', href: '/us/investment-calculators/dividend-calculator' },
  ],
  'Retirement': [
    { name: '401(k) Calculator', href: '/us/retirement-calculators/401k-calculator' },
    { name: 'IRA Calculator', href: '/us/retirement-calculators/ira-calculator' },
    { name: 'Social Security Calculator', href: '/us/retirement-calculators/social-security-calculator' },
    { name: 'Retirement Savings', href: '/us/retirement-calculators/retirement-savings-calculator' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Calculator className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">FinCalculate</span>
            </a>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Free financial calculators for loans, taxes, investments, retirement, and personal finance.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Accurate. Fast. Free.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            {currentYear} FinCalculate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
