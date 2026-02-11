import { useState } from 'react';
import { Menu, X, Calculator, ChevronDown } from 'lucide-react';

const navCategories = [
  {
    name: 'Loan Calculators',
    href: '/us/loan-calculators/',
    items: [
      { name: 'Mortgage Calculator', href: '/us/loan-calculators/mortgage-calculator' },
      { name: 'Auto Loan Calculator', href: '/us/loan-calculators/auto-loan-calculator' },
      { name: 'Personal Loan Calculator', href: '/us/loan-calculators/personal-loan-calculator' },
      { name: 'Student Loan Calculator', href: '/us/loan-calculators/student-loan-calculator' },
      { name: 'Home Equity Calculator', href: '/us/loan-calculators/home-equity-calculator' },
    ],
  },
  {
    name: 'Tax Calculators',
    href: '/us/tax-calculators/',
    items: [
      { name: 'Income Tax Calculator', href: '/us/tax-calculators/income-tax-calculator' },
      { name: 'Capital Gains Tax', href: '/us/tax-calculators/capital-gains-tax-calculator' },
      { name: 'Self-Employment Tax', href: '/us/tax-calculators/self-employment-tax-calculator' },
      { name: 'Property Tax Calculator', href: '/us/tax-calculators/property-tax-calculator' },
      { name: 'Sales Tax Calculator', href: '/us/tax-calculators/sales-tax-calculator' },
    ],
  },
  {
    name: 'Investment Calculators',
    href: '/us/investment-calculators/',
    items: [
      { name: 'Compound Interest', href: '/us/investment-calculators/compound-interest-calculator' },
      { name: 'ROI Calculator', href: '/us/investment-calculators/roi-calculator' },
      { name: 'Dividend Calculator', href: '/us/investment-calculators/dividend-calculator' },
      { name: 'Stock Return Calculator', href: '/us/investment-calculators/stock-return-calculator' },
      { name: 'Mutual Fund Calculator', href: '/us/investment-calculators/mutual-fund-calculator' },
    ],
  },
  {
    name: 'Retirement Calculators',
    href: '/us/retirement-calculators/',
    items: [
      { name: '401(k) Calculator', href: '/us/retirement-calculators/401k-calculator' },
      { name: 'IRA Calculator', href: '/us/retirement-calculators/ira-calculator' },
      { name: 'Social Security Calculator', href: '/us/retirement-calculators/social-security-calculator' },
      { name: 'Annuity Calculator', href: '/us/retirement-calculators/annuity-calculator' },
      { name: 'Retirement Savings', href: '/us/retirement-calculators/retirement-savings-calculator' },
    ],
  },
  {
    name: 'Personal Finance',
    href: '/us/personal-finance/',
    items: [
      { name: 'Budget Calculator', href: '/us/personal-finance/budget-calculator' },
      { name: 'Net Worth Calculator', href: '/us/personal-finance/net-worth-calculator' },
      { name: 'Debt Payoff Calculator', href: '/us/personal-finance/debt-payoff-calculator' },
      { name: 'Savings Goal Calculator', href: '/us/personal-finance/savings-goal-calculator' },
      { name: 'Emergency Fund Calculator', href: '/us/personal-finance/emergency-fund-calculator' },
    ],
  },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Calculator className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">FinCalculate</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navCategories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(category.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={category.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {category.name}
                  <ChevronDown className="w-4 h-4" />
                </a>
                {openDropdown === category.name && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-border rounded-lg shadow-lg py-2">
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-4">
            {navCategories.map((category) => (
              <div key={category.name}>
                <a
                  href={category.href}
                  className="block font-medium text-foreground mb-2"
                >
                  {category.name}
                </a>
                <div className="pl-4 space-y-1">
                  {category.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
