import type { CalculatorPageData, StateMortgageData } from '@/types/calculator';
import {
  calculateMortgage, calculateAutoLoan, calculatePersonalLoan, calculateStudentLoan,
  calculateHomeEquity, calculateIncomeTax, calculateCapitalGains, calculateSelfEmploymentTax,
  calculatePropertyTax, calculateSalesTax, calculateCompoundInterest, calculateROI,
  calculateDividend, calculateStockReturn, calculateMutualFund, calculate401k,
  calculateIRA, calculateSocialSecurity, calculateAnnuity, calculateRetirementSavings,
  calculateBudget, calculateNetWorth, calculateDebtPayoff, calculateSavingsGoal,
  calculateEmergencyFund
} from '@/lib/calculators';

export const mortgageCalculator: CalculatorPageData = {
  title: 'US Mortgage Calculator',
  description: 'Calculate your monthly mortgage payments including principal, interest, taxes, and insurance.',
  intro: 'Use our free US mortgage calculator to estimate your monthly home loan payments. This tool includes principal, interest, property taxes, homeowners insurance, and HOA fees to give you a complete picture of your housing costs.',
  inputs: [
    { label: 'Home Price', name: 'homePrice', type: 'currency', placeholder: '400,000', required: true, hint: 'Total purchase price of the home' },
    { label: 'Down Payment', name: 'downPayment', type: 'currency', placeholder: '80,000', required: true, hint: 'Amount you will pay upfront' },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '6.5', min: 0, max: 20, step: 0.01, required: true, hint: 'Annual interest rate' },
    { label: 'Loan Term', name: 'loanTerm', type: 'years', placeholder: '30', min: 1, max: 50, required: true, hint: 'Length of the loan in years' },
    { label: 'Property Tax (Monthly)', name: 'propertyTax', type: 'currency', placeholder: '300', hint: 'Estimated monthly property tax' },
    { label: 'Home Insurance (Monthly)', name: 'homeInsurance', type: 'currency', placeholder: '150', hint: 'Monthly homeowners insurance premium' },
    { label: 'HOA Fees (Monthly)', name: 'hoaFees', type: 'currency', placeholder: '0', hint: 'Monthly HOA or condo fees' },
  ],
  calculate: calculateMortgage,
  howItWorks: [
    'Enter your home purchase price and down payment amount.',
    'Input your expected interest rate and loan term.',
    'Add estimated monthly costs for property tax, insurance, and HOA fees.',
    'Click Calculate to see your monthly payment and total loan cost.',
    'Review the breakdown to understand principal vs. interest over time.',
  ],
  example: {
    title: 'Example: $400,000 Home Purchase',
    description: 'For a $400,000 home with 20% down ($80,000) at 6.5% interest over 30 years:',
    inputs: { homePrice: 400000, downPayment: 80000, interestRate: 6.5, loanTerm: 30, propertyTax: 300, homeInsurance: 150, hoaFees: 0 },
    results: [
      { label: 'Monthly Payment', value: 2022.62, formatted: '$2,022.62', isPrimary: true },
      { label: 'Total Monthly Payment', value: 2472.62, formatted: '$2,472.62', isPrimary: true },
      { label: 'Total Interest Paid', value: 328143.20, formatted: '$328,143.20' },
    ],
  },
  faqs: [
    { question: 'What is included in the monthly mortgage payment?', answer: 'Your monthly mortgage payment typically includes principal, interest, property taxes, homeowners insurance, and possibly HOA fees. This is often called PITI (Principal, Interest, Taxes, Insurance).' },
    { question: 'How much down payment do I need?', answer: 'While 20% is traditional to avoid PMI, many loans accept as little as 3-5% down. FHA loans require 3.5%, and VA loans may require 0% down.' },
    { question: 'What is PMI?', answer: 'Private Mortgage Insurance (PMI) is required when your down payment is less than 20%. It protects the lender and typically costs 0.3-1.5% of the loan amount annually.' },
    { question: 'How can I lower my monthly payment?', answer: 'You can lower payments by making a larger down payment, securing a lower interest rate, choosing a longer loan term, or buying a less expensive home.' },
    { question: 'Should I choose a 15-year or 30-year mortgage?', answer: 'A 15-year mortgage has higher monthly payments but lower total interest. A 30-year mortgage offers lower monthly payments but more interest over time. Choose based on your budget and financial goals.' },
  ],
  relatedCalculators: [
    { title: 'Home Equity Calculator', description: 'Calculate available equity in your home', href: '/us/loan-calculators/home-equity-calculator' },
    { title: 'Property Tax Calculator', description: 'Estimate your property tax payments', href: '/us/tax-calculators/property-tax-calculator' },
    { title: 'Debt Payoff Calculator', description: 'Plan your debt repayment strategy', href: '/us/personal-finance/debt-payoff-calculator' },
    { title: 'Budget Calculator', description: 'Create a monthly budget plan', href: '/us/personal-finance/budget-calculator' },
    { title: 'Retirement Savings Calculator', description: 'Plan for retirement income', href: '/us/retirement-calculators/retirement-savings-calculator' },
  ],
  seo: {
    title: 'US Mortgage Calculator | Free Home Loan Payment Estimator',
    description: 'Calculate your US mortgage payments with taxes and insurance. Free calculator shows monthly payments, total interest, and amortization schedule.',
    keywords: ['mortgage calculator', 'home loan calculator', 'US mortgage', 'monthly payment', 'PITI calculator'],
    ogTitle: 'US Mortgage Calculator - Free Home Loan Payment Estimator',
    ogDescription: 'Calculate your monthly mortgage payments including principal, interest, taxes, and insurance.',
  },
};

export const autoLoanCalculator: CalculatorPageData = {
  title: 'US Auto Loan Calculator',
  description: 'Calculate your monthly car loan payments and total interest costs.',
  intro: 'Plan your next vehicle purchase with our free US auto loan calculator. Estimate monthly payments, total interest, and see how different terms and rates affect your loan costs.',
  inputs: [
    { label: 'Car Price', name: 'carPrice', type: 'currency', placeholder: '35,000', required: true },
    { label: 'Down Payment', name: 'downPayment', type: 'currency', placeholder: '5,000' },
    { label: 'Trade-In Value', name: 'tradeInValue', type: 'currency', placeholder: '0', hint: 'Value of your current vehicle' },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '6.0', min: 0, max: 25, step: 0.01, required: true },
    { label: 'Loan Term (Months)', name: 'loanTerm', type: 'months', placeholder: '60', min: 12, max: 84, step: 12, required: true },
  ],
  calculate: calculateAutoLoan,
  howItWorks: [
    'Enter the vehicle purchase price.',
    'Add your down payment and trade-in value.',
    'Input the annual interest rate and loan term.',
    'Calculate to see your monthly payment and total costs.',
  ],
  example: {
    title: 'Example: $35,000 Car Loan',
    description: 'For a $35,000 car with $5,000 down at 6% for 60 months:',
    inputs: { carPrice: 35000, downPayment: 5000, tradeInValue: 0, interestRate: 6, loanTerm: 60 },
    results: [
      { label: 'Monthly Payment', value: 579.98, formatted: '$579.98', isPrimary: true },
      { label: 'Total Interest', value: 4798.80, formatted: '$4,798.80' },
    ],
  },
  faqs: [
    { question: 'What is a good interest rate for an auto loan?', answer: 'Good auto loan rates typically range from 4-7% for new cars and 5-10% for used cars, depending on your credit score and the lender.' },
    { question: 'How long should my auto loan be?', answer: 'While 60 months is common, shorter terms (36-48 months) save on interest. Avoid loans longer than 72 months as you may owe more than the car is worth.' },
    { question: 'Should I make a larger down payment?', answer: 'A larger down payment reduces your monthly payment, total interest, and helps avoid being "upside down" on your loan.' },
  ],
  relatedCalculators: [
    { title: 'Personal Loan Calculator', description: 'Calculate personal loan payments', href: '/us/loan-calculators/personal-loan-calculator' },
    { title: 'Debt Payoff Calculator', description: 'Plan your debt repayment', href: '/us/personal-finance/debt-payoff-calculator' },
    { title: 'Budget Calculator', description: 'Manage your monthly budget', href: '/us/personal-finance/budget-calculator' },
  ],
  seo: {
    title: 'US Auto Loan Calculator | Car Payment Estimator',
    description: 'Calculate your monthly car loan payments. Free auto loan calculator shows payments, interest costs, and amortization.',
    keywords: ['auto loan calculator', 'car payment calculator', 'vehicle loan', 'monthly car payment'],
    ogTitle: 'US Auto Loan Calculator - Car Payment Estimator',
    ogDescription: 'Calculate your monthly car loan payments and total interest costs.',
  },
};

export const personalLoanCalculator: CalculatorPageData = {
  title: 'US Personal Loan Calculator',
  description: 'Calculate monthly payments and total cost for personal loans.',
  intro: 'Estimate your personal loan payments with our free calculator. See how interest rates and loan terms affect your monthly payment and total borrowing cost.',
  inputs: [
    { label: 'Loan Amount', name: 'loanAmount', type: 'currency', placeholder: '15,000', required: true },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '10.0', min: 0, max: 36, step: 0.01, required: true },
    { label: 'Loan Term (Months)', name: 'loanTerm', type: 'months', placeholder: '36', min: 12, max: 84, step: 6, required: true },
  ],
  calculate: calculatePersonalLoan,
  howItWorks: [
    'Enter the amount you want to borrow.',
    'Input the annual interest rate.',
    'Select your desired loan term in months.',
    'Calculate to see your monthly payment and total cost.',
  ],
  example: {
    title: 'Example: $15,000 Personal Loan',
    description: 'For a $15,000 loan at 10% APR for 36 months:',
    inputs: { loanAmount: 15000, interestRate: 10, loanTerm: 36 },
    results: [
      { label: 'Monthly Payment', value: 484.01, formatted: '$484.01', isPrimary: true },
      { label: 'Total Interest', value: 2424.36, formatted: '$2,424.36' },
    ],
  },
  faqs: [
    { question: 'What can I use a personal loan for?', answer: 'Personal loans can be used for debt consolidation, home improvements, medical expenses, weddings, travel, or other major purchases.' },
    { question: 'What credit score do I need?', answer: 'Most lenders require a credit score of 640+, but some work with scores as low as 580. Higher scores get better rates.' },
    { question: 'Are personal loans better than credit cards?', answer: 'Personal loans often have lower interest rates than credit cards and offer fixed payments, making budgeting easier.' },
  ],
  relatedCalculators: [
    { title: 'Debt Payoff Calculator', description: 'Plan debt repayment', href: '/us/personal-finance/debt-payoff-calculator' },
    { title: 'Credit Card Payoff Calculator', description: 'Pay off credit card debt', href: '/us/personal-finance/debt-payoff-calculator' },
    { title: 'Net Worth Calculator', description: 'Track your net worth', href: '/us/personal-finance/net-worth-calculator' },
  ],
  seo: {
    title: 'US Personal Loan Calculator | Payment Estimator',
    description: 'Calculate personal loan payments and total interest. Free calculator for debt consolidation and personal financing.',
    keywords: ['personal loan calculator', 'loan payment calculator', 'debt consolidation calculator'],
    ogTitle: 'US Personal Loan Calculator - Payment Estimator',
    ogDescription: 'Calculate monthly payments and total cost for personal loans.',
  },
};

export const studentLoanCalculator: CalculatorPageData = {
  title: 'US Student Loan Calculator',
  description: 'Calculate student loan payments and understand your repayment options.',
  intro: 'Plan your student loan repayment with our free calculator. Estimate monthly payments, total interest, and see how different repayment terms affect your loan.',
  inputs: [
    { label: 'Loan Amount', name: 'loanAmount', type: 'currency', placeholder: '40,000', required: true },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '5.5', min: 0, max: 15, step: 0.01, required: true },
    { label: 'Loan Term (Years)', name: 'loanTerm', type: 'years', placeholder: '10', min: 5, max: 30, required: true },
  ],
  calculate: calculateStudentLoan,
  howItWorks: [
    'Enter your total student loan balance.',
    'Input your interest rate.',
    'Select your repayment term.',
    'Calculate to see monthly payments and total costs.',
  ],
  example: {
    title: 'Example: $40,000 Student Loan',
    description: 'For a $40,000 loan at 5.5% over 10 years:',
    inputs: { loanAmount: 40000, interestRate: 5.5, loanTerm: 10 },
    results: [
      { label: 'Monthly Payment', value: 434.11, formatted: '$434.11', isPrimary: true },
      { label: 'Total Interest', value: 12093.20, formatted: '$12,093.20' },
    ],
  },
  faqs: [
    { question: 'What is the average student loan interest rate?', answer: 'Federal student loans currently range from 5.50% to 8.05%. Private loans vary from 4% to 15% depending on creditworthiness.' },
    { question: 'Can I refinance my student loans?', answer: 'Yes, refinancing can lower your interest rate and monthly payment. However, refinancing federal loans loses benefits like income-driven repayment.' },
    { question: 'What are income-driven repayment plans?', answer: 'These plans cap monthly payments at 10-20% of discretionary income and extend repayment to 20-25 years, with potential loan forgiveness.' },
  ],
  relatedCalculators: [
    { title: 'Debt Payoff Calculator', description: 'Plan debt repayment', href: '/us/personal-finance/debt-payoff-calculator' },
    { title: 'Budget Calculator', description: 'Create a budget', href: '/us/personal-finance/budget-calculator' },
    { title: 'Income Tax Calculator', description: 'Estimate taxes', href: '/us/tax-calculators/income-tax-calculator' },
  ],
  seo: {
    title: 'US Student Loan Calculator | Payment Estimator',
    description: 'Calculate student loan payments and total interest. Free calculator for federal and private student loans.',
    keywords: ['student loan calculator', 'student loan payment', 'college loan calculator'],
    ogTitle: 'US Student Loan Calculator - Payment Estimator',
    ogDescription: 'Calculate student loan payments and understand your repayment options.',
  },
};

export const homeEquityCalculator: CalculatorPageData = {
  title: 'US Home Equity Calculator',
  description: 'Calculate your available home equity and potential loan amounts.',
  intro: 'Determine how much equity you have in your home and estimate how much you could borrow with a home equity loan or HELOC.',
  inputs: [
    { label: 'Current Home Value', name: 'homeValue', type: 'currency', placeholder: '500,000', required: true },
    { label: 'Mortgage Balance', name: 'mortgageBalance', type: 'currency', placeholder: '300,000', required: true },
    { label: 'LTV Ratio', name: 'ltvRatio', type: 'percent', placeholder: '80', min: 50, max: 90, hint: 'Maximum loan-to-value ratio' },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '7.0', min: 0, max: 20, step: 0.01 },
    { label: 'Loan Term (Years)', name: 'loanTerm', type: 'years', placeholder: '15', min: 5, max: 30 },
  ],
  calculate: calculateHomeEquity,
  howItWorks: [
    'Enter your current home value and remaining mortgage balance.',
    'Set your desired loan-to-value (LTV) ratio.',
    'Add interest rate and term for payment estimates.',
    'Calculate to see available equity and loan options.',
  ],
  example: {
    title: 'Example: $500,000 Home',
    description: 'For a $500,000 home with $300,000 mortgage at 80% LTV:',
    inputs: { homeValue: 500000, mortgageBalance: 300000, ltvRatio: 80, interestRate: 7, loanTerm: 15 },
    results: [
      { label: 'Available Equity', value: 200000, formatted: '$200,000', isPrimary: true },
      { label: 'Maximum Loan', value: 160000, formatted: '$160,000', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is home equity?', answer: 'Home equity is the difference between your home\'s market value and your mortgage balance. It represents the portion of your home you truly own.' },
    { question: 'How much can I borrow with a home equity loan?', answer: 'Most lenders allow borrowing up to 80-85% of your home\'s value minus your mortgage balance. Some offer up to 90% LTV.' },
    { question: 'What is the difference between a home equity loan and HELOC?', answer: 'A home equity loan provides a lump sum with fixed payments. A HELOC is a revolving line of credit with variable rates.' },
  ],
  relatedCalculators: [
    { title: 'Mortgage Calculator', description: 'Calculate mortgage payments', href: '/us/loan-calculators/mortgage-calculator' },
    { title: 'Property Tax Calculator', description: 'Estimate property taxes', href: '/us/tax-calculators/property-tax-calculator' },
    { title: 'Net Worth Calculator', description: 'Track your net worth', href: '/us/personal-finance/net-worth-calculator' },
  ],
  seo: {
    title: 'US Home Equity Calculator | HELOC & Home Equity Loan',
    description: 'Calculate your home equity and potential loan amounts. Free calculator for HELOC and home equity loans.',
    keywords: ['home equity calculator', 'HELOC calculator', 'home equity loan', 'equity line of credit'],
    ogTitle: 'US Home Equity Calculator - HELOC & Home Equity Loan',
    ogDescription: 'Calculate your available home equity and potential loan amounts.',
  },
};

export const incomeTaxCalculator: CalculatorPageData = {
  title: 'US Income Tax Calculator',
  description: 'Estimate your federal and state income tax liability.',
  intro: 'Calculate your estimated US income tax for 2024. This tool considers federal tax brackets, filing status, deductions, and state taxes to provide an accurate estimate.',
  inputs: [
    { label: 'Annual Income', name: 'income', type: 'currency', placeholder: '75,000', required: true },
    { label: 'Filing Status', name: 'filingStatus', type: 'select', options: [{ value: '1', label: 'Single' }, { value: '2', label: 'Married Filing Jointly' }], required: true },
    { label: 'Deductions', name: 'deductions', type: 'currency', placeholder: '13,850', hint: 'Standard or itemized deductions' },
    { label: 'State Tax Rate', name: 'stateTaxRate', type: 'percent', placeholder: '5.0', min: 0, max: 15, step: 0.1, hint: 'Your state income tax rate' },
  ],
  calculate: calculateIncomeTax,
  howItWorks: [
    'Enter your annual gross income.',
    'Select your filing status.',
    'Input your deductions and state tax rate.',
    'Calculate to see your estimated tax liability.',
  ],
  example: {
    title: 'Example: $75,000 Income (Single)',
    description: 'For a single filer with $75,000 income and standard deduction:',
    inputs: { income: 75000, filingStatus: 1, deductions: 13850, stateTaxRate: 5 },
    results: [
      { label: 'Federal Tax', value: 9507, formatted: '$9,507', isPrimary: true },
      { label: 'State Tax', value: 3057.50, formatted: '$3,057.50' },
      { label: 'Total Tax', value: 12564.50, formatted: '$12,564.50', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is the standard deduction for 2024?', answer: 'For 2024, the standard deduction is $13,850 for single filers and $27,700 for married couples filing jointly.' },
    { question: 'How do tax brackets work?', answer: 'The US uses progressive tax brackets. Only income within each bracket is taxed at that rate, not your entire income.' },
    { question: 'Should I itemize or take the standard deduction?', answer: 'Itemize if your deductions exceed the standard amount. Common itemized deductions include mortgage interest, state taxes, and charitable donations.' },
  ],
  relatedCalculators: [
    { title: 'Capital Gains Tax Calculator', description: 'Calculate investment taxes', href: '/us/tax-calculators/capital-gains-tax-calculator' },
    { title: 'Self-Employment Tax Calculator', description: 'Calculate SE taxes', href: '/us/tax-calculators/self-employment-tax-calculator' },
    { title: 'Budget Calculator', description: 'Plan your budget', href: '/us/personal-finance/budget-calculator' },
  ],
  seo: {
    title: 'US Income Tax Calculator | 2024 Tax Estimator',
    description: 'Estimate your 2024 federal and state income taxes. Free calculator with current tax brackets and deductions.',
    keywords: ['income tax calculator', 'tax estimator', 'federal tax calculator', 'tax refund calculator'],
    ogTitle: 'US Income Tax Calculator - 2024 Tax Estimator',
    ogDescription: 'Estimate your federal and state income tax liability.',
  },
};

export const capitalGainsCalculator: CalculatorPageData = {
  title: 'US Capital Gains Tax Calculator',
  description: 'Calculate taxes on investment gains and losses.',
  intro: 'Estimate your capital gains tax on stocks, real estate, and other investments. This calculator distinguishes between short-term and long-term capital gains rates.',
  inputs: [
    { label: 'Purchase Price', name: 'purchasePrice', type: 'currency', placeholder: '50,000', required: true },
    { label: 'Sale Price', name: 'salePrice', type: 'currency', placeholder: '75,000', required: true },
    { label: 'Holding Period (Months)', name: 'holdingPeriod', type: 'months', placeholder: '12', min: 0, max: 600, hint: 'Months held before selling' },
    { label: 'Annual Income', name: 'income', type: 'currency', placeholder: '75,000', hint: 'For determining tax rate' },
  ],
  calculate: calculateCapitalGains,
  howItWorks: [
    'Enter your purchase price and sale price.',
    'Input how long you held the investment.',
    'Add your annual income for rate determination.',
    'Calculate to see estimated capital gains tax.',
  ],
  example: {
    title: 'Example: Stock Sale',
    description: 'For stock bought at $50,000 and sold at $75,000 after 18 months:',
    inputs: { purchasePrice: 50000, salePrice: 75000, holdingPeriod: 18, income: 75000 },
    results: [
      { label: 'Capital Gain', value: 25000, formatted: '$25,000', isPrimary: true },
      { label: 'Estimated Tax', value: 3750, formatted: '$3,750', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is the difference between short-term and long-term capital gains?', answer: 'Short-term gains (held <1 year) are taxed as ordinary income. Long-term gains (held >1 year) have preferential rates of 0%, 15%, or 20%.' },
    { question: 'Can I deduct capital losses?', answer: 'Yes, you can deduct up to $3,000 in net capital losses annually against ordinary income, with excess losses carried forward.' },
    { question: 'What is the 0% capital gains rate?', answer: 'For 2024, single filers with taxable income under $47,025 pay 0% on long-term capital gains.' },
  ],
  relatedCalculators: [
    { title: 'Income Tax Calculator', description: 'Calculate income taxes', href: '/us/tax-calculators/income-tax-calculator' },
    { title: 'Stock Return Calculator', description: 'Calculate investment returns', href: '/us/investment-calculators/stock-return-calculator' },
    { title: 'ROI Calculator', description: 'Calculate return on investment', href: '/us/investment-calculators/roi-calculator' },
  ],
  seo: {
    title: 'US Capital Gains Tax Calculator | Investment Tax',
    description: 'Calculate capital gains tax on stocks, crypto, and real estate. Free calculator for short-term and long-term gains.',
    keywords: ['capital gains calculator', 'investment tax calculator', 'stock tax calculator', 'crypto tax'],
    ogTitle: 'US Capital Gains Tax Calculator - Investment Tax',
    ogDescription: 'Calculate taxes on investment gains and losses.',
  },
};

export const selfEmploymentTaxCalculator: CalculatorPageData = {
  title: 'US Self-Employment Tax Calculator',
  description: 'Calculate self-employment tax for freelancers and business owners.',
  intro: 'Estimate your self-employment tax liability including Social Security and Medicare taxes. This calculator helps freelancers, contractors, and small business owners plan for tax season.',
  inputs: [
    { label: 'Net Self-Employment Income', name: 'netIncome', type: 'currency', placeholder: '60,000', required: true, hint: 'After business expenses' },
    { label: 'Deductible Percentage', name: 'deductionPercent', type: 'percent', placeholder: '50', min: 0, max: 100, hint: 'Usually 50% of SE tax' },
  ],
  calculate: calculateSelfEmploymentTax,
  howItWorks: [
    'Enter your net self-employment income.',
    'The calculator applies the 15.3% SE tax rate.',
    'Results show Social Security and Medicare components.',
    'Plan for quarterly estimated tax payments.',
  ],
  example: {
    title: 'Example: $60,000 Self-Employment Income',
    description: 'For $60,000 net self-employment income:',
    inputs: { netIncome: 60000, deductionPercent: 50 },
    results: [
      { label: 'Self-Employment Tax', value: 9180, formatted: '$9,180', isPrimary: true },
      { label: 'Social Security Tax', value: 7440, formatted: '$7,440' },
      { label: 'Medicare Tax', value: 1740, formatted: '$1,740' },
    ],
  },
  faqs: [
    { question: 'What is the self-employment tax rate?', answer: 'The self-employment tax rate is 15.3%, consisting of 12.4% for Social Security and 2.9% for Medicare.' },
    { question: 'Do I pay self-employment tax on all my income?', answer: 'You pay SE tax on 92.35% of your net self-employment income, after deducting business expenses.' },
    { question: 'Can I deduct self-employment tax?', answer: 'You can deduct 50% of your self-employment tax when calculating your adjusted gross income.' },
  ],
  relatedCalculators: [
    { title: 'Income Tax Calculator', description: 'Calculate income taxes', href: '/us/tax-calculators/income-tax-calculator' },
    { title: 'Budget Calculator', description: 'Plan your budget', href: '/us/personal-finance/budget-calculator' },
    { title: 'Retirement Savings Calculator', description: 'Plan for retirement', href: '/us/retirement-calculators/retirement-savings-calculator' },
  ],
  seo: {
    title: 'US Self-Employment Tax Calculator | 1099 Tax Estimator',
    description: 'Calculate self-employment tax for freelancers and contractors. Free calculator for 1099 workers and small business owners.',
    keywords: ['self employment tax calculator', '1099 tax calculator', 'freelancer tax', 'SE tax calculator'],
    ogTitle: 'US Self-Employment Tax Calculator - 1099 Tax Estimator',
    ogDescription: 'Calculate self-employment tax for freelancers and business owners.',
  },
};

export const propertyTaxCalculator: CalculatorPageData = {
  title: 'US Property Tax Calculator',
  description: 'Estimate your annual and monthly property tax payments.',
  intro: 'Calculate property taxes based on your home value and local tax rates. This tool helps homeowners budget for one of the largest ongoing housing expenses.',
  inputs: [
    { label: 'Home Value', name: 'homeValue', type: 'currency', placeholder: '400,000', required: true },
    { label: 'Property Tax Rate', name: 'taxRate', type: 'percent', placeholder: '1.2', min: 0, max: 5, step: 0.01, required: true, hint: 'Annual rate for your area' },
    { label: 'Assessment Ratio', name: 'assessmentRatio', type: 'percent', placeholder: '100', min: 0, max: 100, hint: 'Percentage of value taxed' },
  ],
  calculate: calculatePropertyTax,
  howItWorks: [
    'Enter your home\'s market value.',
    'Input your local property tax rate.',
    'Add the assessment ratio if applicable.',
    'Calculate to see annual and monthly tax amounts.',
  ],
  example: {
    title: 'Example: $400,000 Home',
    description: 'For a $400,000 home at 1.2% tax rate:',
    inputs: { homeValue: 400000, taxRate: 1.2, assessmentRatio: 100 },
    results: [
      { label: 'Annual Property Tax', value: 4800, formatted: '$4,800', isPrimary: true },
      { label: 'Monthly Property Tax', value: 400, formatted: '$400', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is the average property tax rate?', answer: 'US property tax rates average 1.07% nationally but vary widely by state, from 0.31% in Hawaii to 2.21% in New Jersey.' },
    { question: 'How is property tax calculated?', answer: 'Property tax is calculated by multiplying your home\'s assessed value by the local tax rate. Some areas use a percentage of market value.' },
    { question: 'Can I deduct property taxes?', answer: 'Yes, you can deduct up to $10,000 in state and local taxes (SALT), including property taxes, if you itemize deductions.' },
  ],
  relatedCalculators: [
    { title: 'Mortgage Calculator', description: 'Calculate mortgage payments', href: '/us/loan-calculators/mortgage-calculator' },
    { title: 'Home Equity Calculator', description: 'Calculate home equity', href: '/us/loan-calculators/home-equity-calculator' },
    { title: 'Income Tax Calculator', description: 'Calculate tax deductions', href: '/us/tax-calculators/income-tax-calculator' },
  ],
  seo: {
    title: 'US Property Tax Calculator | Annual & Monthly Estimate',
    description: 'Calculate property taxes by state and county. Free calculator for homeowners and buyers.',
    keywords: ['property tax calculator', 'real estate tax calculator', 'home tax calculator'],
    ogTitle: 'US Property Tax Calculator - Annual & Monthly Estimate',
    ogDescription: 'Estimate your annual and monthly property tax payments.',
  },
};

export const salesTaxCalculator: CalculatorPageData = {
  title: 'US Sales Tax Calculator',
  description: 'Calculate sales tax for any US state and locality.',
  intro: 'Quickly calculate sales tax on purchases. Enter your purchase amount and local tax rate to see the total cost including tax.',
  inputs: [
    { label: 'Purchase Amount', name: 'purchaseAmount', type: 'currency', placeholder: '100', required: true },
    { label: 'Sales Tax Rate', name: 'taxRate', type: 'percent', placeholder: '8.25', min: 0, max: 15, step: 0.01, required: true, hint: 'Combined state and local rate' },
  ],
  calculate: calculateSalesTax,
  howItWorks: [
    'Enter your purchase amount before tax.',
    'Input the combined sales tax rate.',
    'Calculate to see tax amount and total cost.',
  ],
  example: {
    title: 'Example: $100 Purchase',
    description: 'For a $100 purchase at 8.25% sales tax:',
    inputs: { purchaseAmount: 100, taxRate: 8.25 },
    results: [
      { label: 'Sales Tax', value: 8.25, formatted: '$8.25', isPrimary: true },
      { label: 'Total Amount', value: 108.25, formatted: '$108.25', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What states have no sales tax?', answer: 'Alaska, Delaware, Montana, New Hampshire, and Oregon have no statewide sales tax.' },
    { question: 'What is the highest sales tax rate?', answer: 'Combined rates can exceed 10% in some areas. California has the highest state rate at 7.25%.' },
    { question: 'Is sales tax deductible?', answer: 'You can choose to deduct either state income tax or state sales tax if you itemize deductions, but not both.' },
  ],
  relatedCalculators: [
    { title: 'Budget Calculator', description: 'Plan your spending', href: '/us/personal-finance/budget-calculator' },
    { title: 'Income Tax Calculator', description: 'Calculate income taxes', href: '/us/tax-calculators/income-tax-calculator' },
  ],
  seo: {
    title: 'US Sales Tax Calculator | State & Local Tax',
    description: 'Calculate sales tax for any US purchase. Free calculator with state and local tax rates.',
    keywords: ['sales tax calculator', 'sales tax estimator', 'purchase tax calculator'],
    ogTitle: 'US Sales Tax Calculator - State & Local Tax',
    ogDescription: 'Calculate sales tax for any US state and locality.',
  },
};

export const compoundInterestCalculator: CalculatorPageData = {
  title: 'US Compound Interest Calculator',
  description: 'See how compound interest grows your investments over time.',
  intro: 'Calculate the power of compound interest on your savings and investments. This tool shows how regular contributions and reinvested earnings accelerate wealth building.',
  inputs: [
    { label: 'Initial Investment', name: 'principal', type: 'currency', placeholder: '10,000', required: true },
    { label: 'Interest Rate', name: 'rate', type: 'percent', placeholder: '7', min: 0, max: 20, step: 0.01, required: true, hint: 'Annual return rate' },
    { label: 'Time (Years)', name: 'time', type: 'years', placeholder: '20', min: 1, max: 50, required: true },
    { label: 'Compound Frequency', name: 'compoundFrequency', type: 'select', options: [{ value: '1', label: 'Annually' }, { value: '4', label: 'Quarterly' }, { value: '12', label: 'Monthly' }, { value: '365', label: 'Daily' }], required: true },
    { label: 'Monthly Contribution', name: 'monthlyContribution', type: 'currency', placeholder: '500', hint: 'Optional regular contributions' },
  ],
  calculate: calculateCompoundInterest,
  howItWorks: [
    'Enter your starting investment amount.',
    'Input the expected annual return rate.',
    'Set the investment time horizon.',
    'Add optional monthly contributions.',
    'Calculate to see your future value and earnings.',
  ],
  example: {
    title: 'Example: $10,000 Investment',
    description: 'For $10,000 at 7% for 20 years with $500/month contributions:',
    inputs: { principal: 10000, rate: 7, time: 20, compoundFrequency: 12, monthlyContribution: 500 },
    results: [
      { label: 'Future Value', value: 303610, formatted: '$303,610', isPrimary: true },
      { label: 'Total Contributions', value: 130000, formatted: '$130,000' },
      { label: 'Interest Earned', value: 173610, formatted: '$173,610', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is compound interest?', answer: 'Compound interest is interest earned on both your principal and previously earned interest, creating exponential growth over time.' },
    { question: 'How often should interest compound?', answer: 'More frequent compounding (monthly vs. annually) yields slightly higher returns. Most investments compound monthly or daily.' },
    { question: 'What is the Rule of 72?', answer: 'Divide 72 by your interest rate to estimate how many years it takes to double your money. At 7%, money doubles in about 10 years.' },
  ],
  relatedCalculators: [
    { title: '401(k) Calculator', description: 'Calculate retirement savings', href: '/us/retirement-calculators/401k-calculator' },
    { title: 'Savings Goal Calculator', description: 'Reach your savings goals', href: '/us/personal-finance/savings-goal-calculator' },
    { title: 'Mutual Fund Calculator', description: 'Calculate fund returns', href: '/us/investment-calculators/mutual-fund-calculator' },
  ],
  seo: {
    title: 'US Compound Interest Calculator | Investment Growth',
    description: 'Calculate compound interest on savings and investments. Free calculator shows the power of compounding over time.',
    keywords: ['compound interest calculator', 'investment calculator', 'savings calculator', 'compound growth'],
    ogTitle: 'US Compound Interest Calculator - Investment Growth',
    ogDescription: 'See how compound interest grows your investments over time.',
  },
};

export const roiCalculator: CalculatorPageData = {
  title: 'US ROI Calculator',
  description: 'Calculate return on investment for any asset or project.',
  intro: 'Measure the profitability of your investments with our ROI calculator. Compare different opportunities and track performance over time.',
  inputs: [
    { label: 'Initial Investment', name: 'initialInvestment', type: 'currency', placeholder: '50,000', required: true },
    { label: 'Final Value', name: 'finalValue', type: 'currency', placeholder: '75,000', required: true },
    { label: 'Investment Period (Years)', name: 'investmentPeriod', type: 'years', placeholder: '5', min: 0.1, max: 50, hint: 'Time held' },
  ],
  calculate: calculateROI,
  howItWorks: [
    'Enter your initial investment amount.',
    'Input the current or final value.',
    'Add the investment period for annualized returns.',
    'Calculate to see total and annualized ROI.',
  ],
  example: {
    title: 'Example: Real Estate Investment',
    description: 'For a $50,000 investment now worth $75,000 after 5 years:',
    inputs: { initialInvestment: 50000, finalValue: 75000, investmentPeriod: 5 },
    results: [
      { label: 'ROI', value: 50, formatted: '50.00%', isPrimary: true },
      { label: 'Annualized ROI', value: 8.45, formatted: '8.45%', isPrimary: true },
      { label: 'Total Gain', value: 25000, formatted: '$25,000' },
    ],
  },
  faqs: [
    { question: 'What is a good ROI?', answer: 'A good ROI depends on the investment type. Stocks average 7-10% annually, real estate 8-12%, while business projects often target 15%+.' },
    { question: 'How is ROI calculated?', answer: 'ROI = (Final Value - Initial Investment) / Initial Investment × 100. It measures total return as a percentage.' },
    { question: 'What is the difference between ROI and annualized ROI?', answer: 'Total ROI shows overall return. Annualized ROI adjusts for time, allowing comparison of investments held for different periods.' },
  ],
  relatedCalculators: [
    { title: 'Stock Return Calculator', description: 'Calculate stock returns', href: '/us/investment-calculators/stock-return-calculator' },
    { title: 'Compound Interest Calculator', description: 'Calculate compound growth', href: '/us/investment-calculators/compound-interest-calculator' },
    { title: 'Capital Gains Calculator', description: 'Calculate investment taxes', href: '/us/tax-calculators/capital-gains-tax-calculator' },
  ],
  seo: {
    title: 'US ROI Calculator | Return on Investment',
    description: 'Calculate ROI for any investment. Free calculator for stocks, real estate, and business projects.',
    keywords: ['ROI calculator', 'return on investment calculator', 'investment return calculator'],
    ogTitle: 'US ROI Calculator - Return on Investment',
    ogDescription: 'Calculate return on investment for any asset or project.',
  },
};

export const dividendCalculator: CalculatorPageData = {
  title: 'US Dividend Calculator',
  description: 'Calculate dividend income from stocks and funds.',
  intro: 'Estimate your dividend income from stocks, ETFs, and mutual funds. This calculator shows annual income, yield, and the power of dividend reinvestment.',
  inputs: [
    { label: 'Number of Shares', name: 'shares', type: 'number', placeholder: '100', min: 0, required: true },
    { label: 'Dividend Per Share', name: 'dividendPerShare', type: 'currency', placeholder: '2.50', required: true, hint: 'Per dividend payment' },
    { label: 'Dividend Frequency', name: 'frequency', type: 'select', options: [{ value: '1', label: 'Annually' }, { value: '2', label: 'Semi-Annually' }, { value: '4', label: 'Quarterly' }, { value: '12', label: 'Monthly' }], required: true },
    { label: 'Share Price', name: 'sharePrice', type: 'currency', placeholder: '50', hint: 'For yield calculation' },
  ],
  calculate: calculateDividend,
  howItWorks: [
    'Enter your number of shares.',
    'Input the dividend per share.',
    'Select the dividend payment frequency.',
    'Add share price to calculate yield.',
    'Calculate to see your dividend income.',
  ],
  example: {
    title: 'Example: 100 Shares',
    description: 'For 100 shares paying $2.50 quarterly at $50/share:',
    inputs: { shares: 100, dividendPerShare: 2.50, frequency: 4, sharePrice: 50 },
    results: [
      { label: 'Annual Dividend Income', value: 1000, formatted: '$1,000', isPrimary: true },
      { label: 'Dividend Yield', value: 20, formatted: '20.00%', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is dividend yield?', answer: 'Dividend yield is annual dividends divided by share price. It shows the percentage return from dividends alone.' },
    { question: 'Are dividends taxable?', answer: 'Yes, qualified dividends are taxed at capital gains rates (0%, 15%, or 20%). Non-qualified dividends are taxed as ordinary income.' },
    { question: 'What are dividend aristocrats?', answer: 'Dividend aristocrats are S&P 500 companies that have increased dividends for 25+ consecutive years, indicating financial stability.' },
  ],
  relatedCalculators: [
    { title: 'Stock Return Calculator', description: 'Calculate total returns', href: '/us/investment-calculators/stock-return-calculator' },
    { title: 'Compound Interest Calculator', description: 'Reinvest dividends', href: '/us/investment-calculators/compound-interest-calculator' },
    { title: 'Capital Gains Calculator', description: 'Calculate dividend taxes', href: '/us/tax-calculators/capital-gains-tax-calculator' },
  ],
  seo: {
    title: 'US Dividend Calculator | Dividend Income Estimator',
    description: 'Calculate dividend income from stocks and funds. Free calculator for dividend yield and annual income.',
    keywords: ['dividend calculator', 'dividend yield calculator', 'dividend income calculator'],
    ogTitle: 'US Dividend Calculator - Dividend Income Estimator',
    ogDescription: 'Calculate dividend income from stocks and funds.',
  },
};

export const stockReturnCalculator: CalculatorPageData = {
  title: 'US Stock Return Calculator',
  description: 'Calculate total returns including capital gains and dividends.',
  intro: 'Measure your stock investment performance with our comprehensive return calculator. Includes capital gains, dividends received, and percentage returns.',
  inputs: [
    { label: 'Shares Purchased', name: 'shares', type: 'number', placeholder: '100', min: 0, required: true },
    { label: 'Purchase Price Per Share', name: 'purchasePrice', type: 'currency', placeholder: '50', required: true },
    { label: 'Current/Sale Price Per Share', name: 'currentPrice', type: 'currency', placeholder: '75', required: true },
    { label: 'Dividends Received', name: 'dividends', type: 'currency', placeholder: '200', hint: 'Total dividends during holding period' },
  ],
  calculate: calculateStockReturn,
  howItWorks: [
    'Enter shares purchased and purchase price.',
    'Input current or sale price.',
    'Add any dividends received.',
    'Calculate to see total return and performance.',
  ],
  example: {
    title: 'Example: 100 Shares',
    description: 'For 100 shares bought at $50, now at $75, with $200 dividends:',
    inputs: { shares: 100, purchasePrice: 50, currentPrice: 75, dividends: 200 },
    results: [
      { label: 'Total Return', value: 2700, formatted: '$2,700', isPrimary: true },
      { label: 'Return Percentage', value: 54, formatted: '54.00%', isPrimary: true },
      { label: 'Current Value', value: 7500, formatted: '$7,500' },
    ],
  },
  faqs: [
    { question: 'What is total return?', answer: 'Total return includes both capital appreciation (price increase) and income (dividends) as a percentage of your initial investment.' },
    { question: 'How do I calculate stock returns?', answer: 'Total Return = (Current Value - Cost Basis + Dividends) / Cost Basis × 100' },
    { question: 'Should I reinvest dividends?', answer: 'Reinvesting dividends typically increases long-term returns through compounding, especially in growth-oriented portfolios.' },
  ],
  relatedCalculators: [
    { title: 'ROI Calculator', description: 'Calculate ROI', href: '/us/investment-calculators/roi-calculator' },
    { title: 'Capital Gains Calculator', description: 'Calculate taxes', href: '/us/tax-calculators/capital-gains-tax-calculator' },
    { title: 'Dividend Calculator', description: 'Calculate dividend income', href: '/us/investment-calculators/dividend-calculator' },
  ],
  seo: {
    title: 'US Stock Return Calculator | Investment Performance',
    description: 'Calculate stock investment returns with dividends. Free calculator for capital gains and total return.',
    keywords: ['stock return calculator', 'stock profit calculator', 'investment return calculator'],
    ogTitle: 'US Stock Return Calculator - Investment Performance',
    ogDescription: 'Calculate total returns including capital gains and dividends.',
  },
};

export const mutualFundCalculator: CalculatorPageData = {
  title: 'US Mutual Fund Calculator',
  description: 'Calculate mutual fund returns and fees impact.',
  intro: 'Estimate your mutual fund investment growth while accounting for expense ratios and fees. Compare how different costs affect long-term returns.',
  inputs: [
    { label: 'Initial Investment', name: 'initialInvestment', type: 'currency', placeholder: '10,000', required: true },
    { label: 'Monthly Contribution', name: 'monthlyContribution', type: 'currency', placeholder: '500' },
    { label: 'Expected Return Rate', name: 'returnRate', type: 'percent', placeholder: '8', min: 0, max: 20, step: 0.01, required: true },
    { label: 'Investment Period (Years)', name: 'years', type: 'years', placeholder: '20', min: 1, max: 50, required: true },
    { label: 'Expense Ratio', name: 'expenseRatio', type: 'percent', placeholder: '0.5', min: 0, max: 3, step: 0.01, hint: 'Annual fund fee' },
  ],
  calculate: calculateMutualFund,
  howItWorks: [
    'Enter your initial investment and monthly contributions.',
    'Input expected annual return rate.',
    'Set your investment time horizon.',
    'Add the fund\'s expense ratio.',
    'Calculate to see growth and fee impact.',
  ],
  example: {
    title: 'Example: $10,000 Investment',
    description: 'For $10,000 at 8% return for 20 years with 0.5% expense ratio:',
    inputs: { initialInvestment: 10000, monthlyContribution: 500, returnRate: 8, years: 20, expenseRatio: 0.5 },
    results: [
      { label: 'Future Value', value: 278450, formatted: '$278,450', isPrimary: true },
      { label: 'Total Earnings', value: 148450, formatted: '$148,450', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is an expense ratio?', answer: 'The expense ratio is the annual fee expressed as a percentage of assets. A 1% ratio means you pay $10 per year per $1,000 invested.' },
    { question: 'What is a good expense ratio?', answer: 'Index funds typically charge 0.03-0.20%, actively managed funds 0.50-1.50%. Lower is generally better for long-term returns.' },
    { question: 'How do fees affect returns?', answer: 'Over 30 years, a 1% fee can reduce your final balance by 25% compared to a 0.25% fee, assuming identical gross returns.' },
  ],
  relatedCalculators: [
    { title: 'Compound Interest Calculator', description: 'Calculate growth', href: '/us/investment-calculators/compound-interest-calculator' },
    { title: '401(k) Calculator', description: 'Calculate retirement savings', href: '/us/retirement-calculators/401k-calculator' },
    { title: 'ROI Calculator', description: 'Calculate returns', href: '/us/investment-calculators/roi-calculator' },
  ],
  seo: {
    title: 'US Mutual Fund Calculator | Returns & Fees',
    description: 'Calculate mutual fund returns and expense ratio impact. Free calculator for fund investments.',
    keywords: ['mutual fund calculator', 'fund return calculator', 'expense ratio calculator'],
    ogTitle: 'US Mutual Fund Calculator - Returns & Fees',
    ogDescription: 'Calculate mutual fund returns and fees impact.',
  },
};

export const calculator401k: CalculatorPageData = {
  title: 'US 401(k) Calculator',
  description: 'Calculate your 401(k) retirement savings growth.',
  intro: 'Project your 401(k) balance at retirement with employer matching. This calculator shows how contributions, employer matches, and investment returns build your nest egg.',
  inputs: [
    { label: 'Annual Salary', name: 'salary', type: 'currency', placeholder: '75,000', required: true },
    { label: 'Contribution Percentage', name: 'contributionPercent', type: 'percent', placeholder: '6', min: 0, max: 100, required: true },
    { label: 'Employer Match', name: 'employerMatch', type: 'percent', placeholder: '50', min: 0, max: 100, hint: 'Percentage they match' },
    { label: 'Match Limit', name: 'matchLimit', type: 'percent', placeholder: '6', min: 0, max: 15, hint: 'Max salary % they match' },
    { label: 'Expected Return Rate', name: 'returnRate', type: 'percent', placeholder: '7', min: 0, max: 15, step: 0.01 },
    { label: 'Years Until Retirement', name: 'years', type: 'years', placeholder: '30', min: 1, max: 50 },
  ],
  calculate: calculate401k,
  howItWorks: [
    'Enter your annual salary.',
    'Set your contribution percentage.',
    'Add employer match details.',
    'Input expected return and years to retirement.',
    'Calculate to project your 401(k) balance.',
  ],
  example: {
    title: 'Example: $75,000 Salary',
    description: 'For $75,000 salary, 6% contribution, 50% match up to 6%, over 30 years at 7%:',
    inputs: { salary: 75000, contributionPercent: 6, employerMatch: 50, matchLimit: 6, returnRate: 7, years: 30 },
    results: [
      { label: '401(k) Balance', value: 567890, formatted: '$567,890', isPrimary: true },
      { label: 'Annual Contribution', value: 4500, formatted: '$4,500' },
      { label: 'Employer Match', value: 2250, formatted: '$2,250' },
    ],
  },
  faqs: [
    { question: 'What is a 401(k) employer match?', answer: 'Many employers match your contributions up to a limit. A 50% match up to 6% means if you contribute 6%, they add 3%.' },
    { question: 'What is the 401(k) contribution limit?', answer: 'For 2024, the 401(k) contribution limit is $23,000, with an additional $7,500 catch-up for those 50+.' },
    { question: 'Should I max out my 401(k)?', answer: 'Max out if possible, especially to get full employer match. The tax advantages and compound growth make 401(k)s powerful retirement tools.' },
  ],
  relatedCalculators: [
    { title: 'IRA Calculator', description: 'Calculate IRA growth', href: '/us/retirement-calculators/ira-calculator' },
    { title: 'Retirement Savings Calculator', description: 'Plan retirement income', href: '/us/retirement-calculators/retirement-savings-calculator' },
    { title: 'Compound Interest Calculator', description: 'See compounding power', href: '/us/investment-calculators/compound-interest-calculator' },
  ],
  seo: {
    title: 'US 401(k) Calculator | Retirement Savings Estimator',
    description: 'Calculate 401(k) growth with employer matching. Free retirement calculator for planning your nest egg.',
    keywords: ['401k calculator', '401(k) calculator', 'retirement calculator', 'employer match calculator'],
    ogTitle: 'US 401(k) Calculator - Retirement Savings Estimator',
    ogDescription: 'Calculate your 401(k) retirement savings growth.',
  },
};

export const iraCalculator: CalculatorPageData = {
  title: 'US IRA Calculator',
  description: 'Calculate Traditional and Roth IRA growth.',
  intro: 'Project your IRA balance at retirement. Compare Traditional and Roth IRAs to see which tax advantage works best for your situation.',
  inputs: [
    { label: 'Annual Contribution', name: 'contribution', type: 'currency', placeholder: '7,000', min: 0, max: 7000, required: true, hint: 'Max $7,000 for 2024' },
    { label: 'Current Age', name: 'currentAge', type: 'number', placeholder: '30', min: 18, max: 80, required: true },
    { label: 'Retirement Age', name: 'retirementAge', type: 'number', placeholder: '65', min: 50, max: 90, required: true },
    { label: 'Expected Return Rate', name: 'returnRate', type: 'percent', placeholder: '7', min: 0, max: 15, step: 0.01 },
    { label: 'Account Type', name: 'isRoth', type: 'select', options: [{ value: '0', label: 'Traditional IRA' }, { value: '1', label: 'Roth IRA' }] },
  ],
  calculate: calculateIRA,
  howItWorks: [
    'Enter your annual contribution amount.',
    'Input your current and retirement ages.',
    'Set expected investment return.',
    'Select Traditional or Roth IRA.',
    'Calculate to see projected balance.',
  ],
  example: {
    title: 'Example: $7,000 Annual Contribution',
    description: 'For $7,000/year from age 30 to 65 at 7% return:',
    inputs: { contribution: 7000, currentAge: 30, retirementAge: 65, returnRate: 7, isRoth: 1 },
    results: [
      { label: 'IRA Balance', value: 1078900, formatted: '$1,078,900', isPrimary: true },
      { label: 'Total Contributions', value: 245000, formatted: '$245,000' },
      { label: 'Investment Earnings', value: 833900, formatted: '$833,900', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'What is the IRA contribution limit?', answer: 'For 2024, you can contribute up to $7,000 ($8,000 if age 50+) to all your IRAs combined.' },
    { question: 'Traditional vs Roth IRA: Which is better?', answer: 'Traditional IRA offers tax deduction now; Roth offers tax-free withdrawals in retirement. Choose based on current vs expected future tax rates.' },
    { question: 'Can I have both a 401(k) and IRA?', answer: 'Yes, you can contribute to both. Income limits may affect Roth IRA eligibility and Traditional IRA deductibility.' },
  ],
  relatedCalculators: [
    { title: '401(k) Calculator', description: 'Calculate 401(k) growth', href: '/us/retirement-calculators/401k-calculator' },
    { title: 'Retirement Savings Calculator', description: 'Plan retirement', href: '/us/retirement-calculators/retirement-savings-calculator' },
    { title: 'Compound Interest Calculator', description: 'See growth potential', href: '/us/investment-calculators/compound-interest-calculator' },
  ],
  seo: {
    title: 'US IRA Calculator | Roth & Traditional IRA',
    description: 'Calculate IRA growth for retirement. Free calculator for Roth and Traditional IRA projections.',
    keywords: ['IRA calculator', 'Roth IRA calculator', 'Traditional IRA calculator', 'retirement IRA'],
    ogTitle: 'US IRA Calculator - Roth & Traditional IRA',
    ogDescription: 'Calculate Traditional and Roth IRA growth.',
  },
};

export const socialSecurityCalculator: CalculatorPageData = {
  title: 'US Social Security Calculator',
  description: 'Estimate your Social Security retirement benefits.',
  intro: 'Calculate your estimated Social Security benefits based on your earnings history and retirement age. Understand how claiming age affects your monthly payments.',
  inputs: [
    { label: 'Current Age', name: 'currentAge', type: 'number', placeholder: '35', min: 21, max: 70, required: true },
    { label: 'Planned Retirement Age', name: 'retirementAge', type: 'number', placeholder: '67', min: 62, max: 70, required: true },
    { label: 'Current Annual Salary', name: 'currentSalary', type: 'currency', placeholder: '60,000', required: true },
    { label: 'Years Worked', name: 'yearsWorked', type: 'number', placeholder: '15', min: 0, max: 50, hint: 'Total years contributing' },
  ],
  calculate: calculateSocialSecurity,
  howItWorks: [
    'Enter your current age and planned retirement age.',
    'Input your current annual salary.',
    'Add years you have worked.',
    'Calculate to estimate monthly benefits.',
  ],
  example: {
    title: 'Example: Age 35, Retiring at 67',
    description: 'For someone earning $60,000 who has worked 15 years:',
    inputs: { currentAge: 35, retirementAge: 67, currentSalary: 60000, yearsWorked: 15 },
    results: [
      { label: 'Monthly Benefit', value: 1800, formatted: '$1,800', isPrimary: true },
      { label: 'Annual Benefit', value: 21600, formatted: '$21,600' },
    ],
  },
  faqs: [
    { question: 'When should I claim Social Security?', answer: 'You can claim at 62, but benefits are reduced. Full retirement age is 67 for those born 1960+. Waiting until 70 maximizes benefits.' },
    { question: 'How are benefits calculated?', answer: 'Benefits are based on your 35 highest-earning years, adjusted for inflation. The formula replaces a percentage of your average indexed monthly earnings.' },
    { question: 'Will Social Security run out?', answer: 'The trust fund is projected to be depleted in the 2030s, but payroll taxes would still fund about 75-80% of promised benefits.' },
  ],
  relatedCalculators: [
    { title: 'Retirement Savings Calculator', description: 'Plan retirement income', href: '/us/retirement-calculators/retirement-savings-calculator' },
    { title: '401(k) Calculator', description: 'Calculate 401(k) growth', href: '/us/retirement-calculators/401k-calculator' },
    { title: 'IRA Calculator', description: 'Calculate IRA growth', href: '/us/retirement-calculators/ira-calculator' },
  ],
  seo: {
    title: 'US Social Security Calculator | Benefits Estimator',
    description: 'Estimate your Social Security retirement benefits. Free calculator for monthly and annual benefit projections.',
    keywords: ['social security calculator', 'SS benefits calculator', 'retirement benefits estimator'],
    ogTitle: 'US Social Security Calculator - Benefits Estimator',
    ogDescription: 'Estimate your Social Security retirement benefits.',
  },
};

export const annuityCalculator: CalculatorPageData = {
  title: 'US Annuity Calculator',
  description: 'Calculate annuity payments and growth.',
  intro: 'Estimate annuity payments for retirement income planning. Compare immediate annuities for income now versus deferred annuities for future growth.',
  inputs: [
    { label: 'Principal Amount', name: 'principal', type: 'currency', placeholder: '100,000', required: true },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '5', min: 0, max: 10, step: 0.01, required: true },
    { label: 'Term (Years)', name: 'years', type: 'years', placeholder: '20', min: 5, max: 40, required: true },
    { label: 'Annuity Type', name: 'isImmediate', type: 'select', options: [{ value: '1', label: 'Immediate (Income Now)' }, { value: '0', label: 'Deferred (Growth)' }] },
  ],
  calculate: calculateAnnuity,
  howItWorks: [
    'Enter your principal investment amount.',
    'Input the annuity interest rate.',
    'Set the term length.',
    'Choose immediate or deferred annuity.',
    'Calculate to see payments or growth.',
  ],
  example: {
    title: 'Example: $100,000 Immediate Annuity',
    description: 'For $100,000 immediate annuity at 5% for 20 years:',
    inputs: { principal: 100000, interestRate: 5, years: 20, isImmediate: 1 },
    results: [
      { label: 'Monthly Payment', value: 659.96, formatted: '$659.96', isPrimary: true },
      { label: 'Annual Payment', value: 7919.52, formatted: '$7,919.52' },
    ],
  },
  faqs: [
    { question: 'What is an annuity?', answer: 'An annuity is a financial product that provides regular payments in exchange for a lump sum investment, often used for retirement income.' },
    { question: 'What are the types of annuities?', answer: 'Immediate annuities start payments right away. Deferred annuities grow tax-deferred and start payments later. Both can be fixed or variable.' },
    { question: 'Are annuities a good investment?', answer: 'Annuities provide guaranteed income but often have high fees and limited liquidity. They work well for conservative investors seeking stable retirement income.' },
  ],
  relatedCalculators: [
    { title: 'Retirement Savings Calculator', description: 'Plan retirement', href: '/us/retirement-calculators/retirement-savings-calculator' },
    { title: 'Social Security Calculator', description: 'Estimate SS benefits', href: '/us/retirement-calculators/social-security-calculator' },
    { title: 'Compound Interest Calculator', description: 'Compare growth', href: '/us/investment-calculators/compound-interest-calculator' },
  ],
  seo: {
    title: 'US Annuity Calculator | Immediate & Deferred',
    description: 'Calculate annuity payments and growth. Free calculator for retirement income planning.',
    keywords: ['annuity calculator', 'immediate annuity calculator', 'deferred annuity', 'retirement annuity'],
    ogTitle: 'US Annuity Calculator - Immediate & Deferred',
    ogDescription: 'Calculate annuity payments and growth.',
  },
};

export const retirementSavingsCalculator: CalculatorPageData = {
  title: 'US Retirement Savings Calculator',
  description: 'Plan your retirement savings and income needs.',
  intro: 'Calculate how much you need to save for retirement and estimate your future retirement income. This comprehensive tool helps you plan for financial security in your golden years.',
  inputs: [
    { label: 'Current Age', name: 'currentAge', type: 'number', placeholder: '35', min: 18, max: 80, required: true },
    { label: 'Retirement Age', name: 'retirementAge', type: 'number', placeholder: '65', min: 50, max: 90, required: true },
    { label: 'Current Retirement Savings', name: 'currentSavings', type: 'currency', placeholder: '50,000', hint: '401(k), IRA, etc.' },
    { label: 'Monthly Contribution', name: 'monthlyContribution', type: 'currency', placeholder: '500', hint: 'Total across all accounts' },
    { label: 'Expected Return Rate', name: 'returnRate', type: 'percent', placeholder: '7', min: 0, max: 15, step: 0.01 },
    { label: 'Desired Monthly Retirement Income', name: 'desiredIncome', type: 'currency', placeholder: '5,000', hint: 'After-tax monthly need' },
  ],
  calculate: calculateRetirementSavings,
  howItWorks: [
    'Enter your current age and planned retirement age.',
    'Input current retirement savings balance.',
    'Set monthly contribution amount.',
    'Add expected investment return rate.',
    'Specify desired retirement income.',
    'Calculate to see if you are on track.',
  ],
  example: {
    title: 'Example: Planning from Age 35',
    description: 'Starting at 35 with $50,000, contributing $500/month at 7% return:',
    inputs: { currentAge: 35, retirementAge: 65, currentSavings: 50000, monthlyContribution: 500, returnRate: 7, desiredIncome: 5000 },
    results: [
      { label: 'Retirement Savings', value: 892000, formatted: '$892,000', isPrimary: true },
      { label: 'Monthly Retirement Income', value: 2973, formatted: '$2,973', isPrimary: true },
      { label: 'Income Gap', value: 2027, formatted: '$2,027' },
    ],
  },
  faqs: [
    { question: 'How much should I save for retirement?', answer: 'A common rule is to save 15% of your income. By age 30, have 1x salary saved; by 40, 3x; by 50, 6x; by 60, 8x.' },
    { question: 'What is the 4% rule?', answer: 'The 4% rule suggests withdrawing 4% of your retirement savings in year one, then adjusting for inflation. This aims to make savings last 30 years.' },
    { question: 'Can I retire early?', answer: 'Early retirement requires higher savings rates (20-50% of income) and may need strategies like the Rule of 55 or Roth conversion ladders.' },
  ],
  relatedCalculators: [
    { title: '401(k) Calculator', description: 'Calculate 401(k) growth', href: '/us/retirement-calculators/401k-calculator' },
    { title: 'IRA Calculator', description: 'Calculate IRA growth', href: '/us/retirement-calculators/ira-calculator' },
    { title: 'Social Security Calculator', description: 'Estimate SS benefits', href: '/us/retirement-calculators/social-security-calculator' },
  ],
  seo: {
    title: 'US Retirement Savings Calculator | Retirement Planner',
    description: 'Plan your retirement savings and income. Free calculator to see if you are on track for retirement.',
    keywords: ['retirement calculator', 'retirement savings calculator', 'retirement planner', 'retirement income calculator'],
    ogTitle: 'US Retirement Savings Calculator - Retirement Planner',
    ogDescription: 'Plan your retirement savings and income needs.',
  },
};

export const budgetCalculator: CalculatorPageData = {
  title: 'US Budget Calculator',
  description: 'Create a monthly budget and track spending.',
  intro: 'Build a personalized monthly budget with our calculator. Track income and expenses across categories to understand your cash flow and find savings opportunities.',
  inputs: [
    { label: 'Monthly Income', name: 'income', type: 'currency', placeholder: '5,000', required: true },
    { label: 'Housing (Rent/Mortgage)', name: 'housing', type: 'currency', placeholder: '1,500' },
    { label: 'Transportation', name: 'transportation', type: 'currency', placeholder: '500' },
    { label: 'Food & Groceries', name: 'food', type: 'currency', placeholder: '600' },
    { label: 'Utilities', name: 'utilities', type: 'currency', placeholder: '200' },
    { label: 'Insurance', name: 'insurance', type: 'currency', placeholder: '300' },
    { label: 'Debt Payments', name: 'debt', type: 'currency', placeholder: '400' },
    { label: 'Savings', name: 'savings', type: 'currency', placeholder: '500' },
    { label: 'Other Expenses', name: 'other', type: 'currency', placeholder: '500' },
  ],
  calculate: calculateBudget,
  howItWorks: [
    'Enter your total monthly income.',
    'Input expenses for each category.',
    'Include savings as an expense.',
    'Calculate to see your budget summary.',
    'Review percentages and adjust as needed.',
  ],
  example: {
    title: 'Example: $5,000 Monthly Budget',
    description: 'Sample budget breakdown for $5,000 income:',
    inputs: { income: 5000, housing: 1500, transportation: 500, food: 600, utilities: 200, insurance: 300, debt: 400, savings: 500, other: 500 },
    results: [
      { label: 'Total Expenses', value: 4500, formatted: '$4,500', isPrimary: true },
      { label: 'Remaining Balance', value: 500, formatted: '$500', isPrimary: true },
      { label: 'Housing % of Income', value: 30, formatted: '30.00%' },
    ],
  },
  faqs: [
    { question: 'What is the 50/30/20 rule?', answer: 'Allocate 50% to needs (housing, food), 30% to wants (entertainment), and 20% to savings and debt repayment.' },
    { question: 'How much should I spend on housing?', answer: 'The general rule is no more than 28-30% of gross income on housing costs, including mortgage/rent, taxes, and insurance.' },
    { question: 'What percentage should I save?', answer: 'Aim to save at least 20% of your income. Start with an emergency fund (3-6 months expenses), then focus on retirement.' },
  ],
  relatedCalculators: [
    { title: 'Debt Payoff Calculator', description: 'Plan debt repayment', href: '/us/personal-finance/debt-payoff-calculator' },
    { title: 'Emergency Fund Calculator', description: 'Calculate emergency savings', href: '/us/personal-finance/emergency-fund-calculator' },
    { title: 'Savings Goal Calculator', description: 'Reach savings goals', href: '/us/personal-finance/savings-goal-calculator' },
  ],
  seo: {
    title: 'US Budget Calculator | Monthly Budget Planner',
    description: 'Create a monthly budget with our free calculator. Track income and expenses to manage your money effectively.',
    keywords: ['budget calculator', 'monthly budget', 'budget planner', 'expense tracker'],
    ogTitle: 'US Budget Calculator - Monthly Budget Planner',
    ogDescription: 'Create a monthly budget and track spending.',
  },
};

export const netWorthCalculator: CalculatorPageData = {
  title: 'US Net Worth Calculator',
  description: 'Calculate your total net worth and track financial progress.',
  intro: 'Determine your net worth by comparing assets and liabilities. This snapshot of your financial health helps track progress toward your wealth-building goals.',
  inputs: [
    { label: 'Cash & Bank Accounts', name: 'cash', type: 'currency', placeholder: '25,000' },
    { label: 'Investment Accounts', name: 'investments', type: 'currency', placeholder: '50,000', hint: 'Stocks, bonds, mutual funds' },
    { label: 'Retirement Accounts', name: 'retirement', type: 'currency', placeholder: '100,000', hint: '401(k), IRA, etc.' },
    { label: 'Real Estate Value', name: 'realEstate', type: 'currency', placeholder: '400,000' },
    { label: 'Vehicle Value', name: 'vehicles', type: 'currency', placeholder: '20,000' },
    { label: 'Other Assets', name: 'otherAssets', type: 'currency', placeholder: '10,000' },
    { label: 'Mortgage Balance', name: 'mortgage', type: 'currency', placeholder: '300,000' },
    { label: 'Other Loans', name: 'loans', type: 'currency', placeholder: '15,000' },
    { label: 'Credit Card Debt', name: 'creditCards', type: 'currency', placeholder: '3,000' },
    { label: 'Other Debts', name: 'otherDebts', type: 'currency', placeholder: '5,000' },
  ],
  calculate: calculateNetWorth,
  howItWorks: [
    'Enter all your assets by category.',
    'Input all your liabilities/debts.',
    'Calculate to see your net worth.',
    'Track changes over time to measure progress.',
  ],
  example: {
    title: 'Example: Net Worth Calculation',
    description: 'Sample net worth for a typical household:',
    inputs: { cash: 25000, investments: 50000, retirement: 100000, realEstate: 400000, vehicles: 20000, otherAssets: 10000, mortgage: 300000, loans: 15000, creditCards: 3000, otherDebts: 5000 },
    results: [
      { label: 'Net Worth', value: 282000, formatted: '$282,000', isPrimary: true },
      { label: 'Total Assets', value: 605000, formatted: '$605,000' },
      { label: 'Total Liabilities', value: 323000, formatted: '$323,000' },
    ],
  },
  faqs: [
    { question: 'What is net worth?', answer: 'Net worth is the difference between what you own (assets) and what you owe (liabilities). It is a key measure of financial health.' },
    { question: 'What is a good net worth?', answer: 'Net worth varies by age. By 30, aim for 1x annual salary; by 40, 3x; by 50, 6x; by 60, 8x. The median US net worth is around $120,000.' },
    { question: 'How can I increase my net worth?', answer: 'Increase income, reduce debt, save more, invest wisely, and avoid lifestyle inflation that increases expenses faster than income.' },
  ],
  relatedCalculators: [
    { title: 'Budget Calculator', description: 'Manage your budget', href: '/us/personal-finance/budget-calculator' },
    { title: 'Debt Payoff Calculator', description: 'Reduce liabilities', href: '/us/personal-finance/debt-payoff-calculator' },
    { title: 'Investment Calculator', description: 'Grow assets', href: '/us/investment-calculators/compound-interest-calculator' },
  ],
  seo: {
    title: 'US Net Worth Calculator | Assets & Liabilities',
    description: 'Calculate your net worth by comparing assets and liabilities. Free calculator to track your financial progress.',
    keywords: ['net worth calculator', 'net worth tracker', 'assets calculator', 'wealth calculator'],
    ogTitle: 'US Net Worth Calculator - Assets & Liabilities',
    ogDescription: 'Calculate your total net worth and track financial progress.',
  },
};

export const debtPayoffCalculator: CalculatorPageData = {
  title: 'US Debt Payoff Calculator',
  description: 'Create a plan to pay off debt faster.',
  intro: 'Calculate how long it will take to pay off your debt and see how extra payments can accelerate your journey to financial freedom.',
  inputs: [
    { label: 'Current Balance', name: 'balance', type: 'currency', placeholder: '10,000', required: true },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '18', min: 0, max: 36, step: 0.01, required: true },
    { label: 'Monthly Payment', name: 'monthlyPayment', type: 'currency', placeholder: '300', required: true },
  ],
  calculate: calculateDebtPayoff,
  howItWorks: [
    'Enter your current debt balance.',
    'Input the annual interest rate.',
    'Set your planned monthly payment.',
    'Calculate to see payoff timeline and interest.',
  ],
  example: {
    title: 'Example: $10,000 Credit Card Debt',
    description: 'For $10,000 at 18% APR with $300/month payments:',
    inputs: { balance: 10000, interestRate: 18, monthlyPayment: 300 },
    results: [
      { label: 'Months to Payoff', value: 47, formatted: '47 months', isPrimary: true },
      { label: 'Total Interest', value: 3973, formatted: '$3,973', isPrimary: true },
    ],
  },
  faqs: [
    { question: 'Should I use the debt snowball or avalanche method?', answer: 'Debt avalanche (highest interest first) saves the most money. Debt snowball (smallest balance first) provides psychological wins. Choose what motivates you.' },
    { question: 'How can I pay off debt faster?', answer: 'Increase monthly payments, negotiate lower interest rates, use balance transfer cards, or consolidate with a personal loan.' },
    { question: 'Should I pay off debt or save?', answer: 'Build a small emergency fund first ($1,000), then aggressively pay high-interest debt (>7%). Low-interest debt can coexist with investing.' },
  ],
  relatedCalculators: [
    { title: 'Budget Calculator', description: 'Find money for debt payments', href: '/us/personal-finance/budget-calculator' },
    { title: 'Personal Loan Calculator', description: 'Consider consolidation', href: '/us/loan-calculators/personal-loan-calculator' },
    { title: 'Net Worth Calculator', description: 'Track progress', href: '/us/personal-finance/net-worth-calculator' },
  ],
  seo: {
    title: 'US Debt Payoff Calculator | Debt Repayment Planner',
    description: 'Calculate debt payoff timeline and interest savings. Free calculator for credit cards, loans, and debt consolidation.',
    keywords: ['debt payoff calculator', 'debt calculator', 'credit card payoff', 'debt repayment calculator'],
    ogTitle: 'US Debt Payoff Calculator - Debt Repayment Planner',
    ogDescription: 'Create a plan to pay off debt faster.',
  },
};

export const savingsGoalCalculator: CalculatorPageData = {
  title: 'US Savings Goal Calculator',
  description: 'Calculate how to reach your savings goals.',
  intro: 'Plan your path to any savings goal. Whether it is a vacation, down payment, or emergency fund, this calculator shows how much to save and for how long.',
  inputs: [
    { label: 'Savings Goal', name: 'goalAmount', type: 'currency', placeholder: '20,000', required: true },
    { label: 'Current Savings', name: 'currentSavings', type: 'currency', placeholder: '5,000' },
    { label: 'Monthly Contribution', name: 'monthlyContribution', type: 'currency', placeholder: '500', required: true },
    { label: 'Interest Rate', name: 'interestRate', type: 'percent', placeholder: '4', min: 0, max: 10, step: 0.01, hint: 'Savings account rate' },
  ],
  calculate: calculateSavingsGoal,
  howItWorks: [
    'Enter your savings goal amount.',
    'Input current savings balance.',
    'Set monthly contribution amount.',
    'Add interest rate if applicable.',
    'Calculate to see timeline to goal.',
  ],
  example: {
    title: 'Example: $20,000 Down Payment Goal',
    description: 'Saving $20,000 starting with $5,000, contributing $500/month at 4%:',
    inputs: { goalAmount: 20000, currentSavings: 5000, monthlyContribution: 500, interestRate: 4 },
    results: [
      { label: 'Months to Goal', value: 29, formatted: '2 years, 5 months', isPrimary: true },
      { label: 'Amount Needed', value: 15000, formatted: '$15,000' },
    ],
  },
  faqs: [
    { question: 'How much should I save monthly?', answer: 'Aim for at least 20% of income. For specific goals, divide the goal by months available to find required monthly savings.' },
    { question: 'Where should I keep my savings?', answer: 'Emergency funds belong in high-yield savings. Short-term goals (1-3 years) in savings or CDs. Long-term goals can include investments.' },
    { question: 'How do I save faster?', answer: 'Automate savings, reduce expenses, increase income through side jobs, and put windfalls (tax refunds, bonuses) toward goals.' },
  ],
  relatedCalculators: [
    { title: 'Emergency Fund Calculator', description: 'Build emergency savings', href: '/us/personal-finance/emergency-fund-calculator' },
    { title: 'Compound Interest Calculator', description: 'See growth potential', href: '/us/investment-calculators/compound-interest-calculator' },
    { title: 'Budget Calculator', description: 'Find savings in budget', href: '/us/personal-finance/budget-calculator' },
  ],
  seo: {
    title: 'US Savings Goal Calculator | Savings Planner',
    description: 'Calculate how to reach your savings goals. Free calculator for down payments, vacations, and major purchases.',
    keywords: ['savings goal calculator', 'savings calculator', 'goal planner', 'savings timeline'],
    ogTitle: 'US Savings Goal Calculator - Savings Planner',
    ogDescription: 'Calculate how to reach your savings goals.',
  },
};

export const emergencyFundCalculator: CalculatorPageData = {
  title: 'US Emergency Fund Calculator',
  description: 'Calculate your emergency fund needs.',
  intro: 'Determine how much you need in your emergency fund and create a plan to build it. Financial experts recommend 3-6 months of expenses for security.',
  inputs: [
    { label: 'Monthly Expenses', name: 'monthlyExpenses', type: 'currency', placeholder: '4,000', required: true, hint: 'Total monthly spending' },
    { label: 'Months to Cover', name: 'monthsCovered', type: 'select', options: [{ value: '3', label: '3 months (single earner)' }, { value: '6', label: '6 months (family)' }, { value: '9', label: '9 months (conservative)' }, { value: '12', label: '12 months (very conservative)' }], required: true },
    { label: 'Current Emergency Savings', name: 'currentSavings', type: 'currency', placeholder: '5,000' },
  ],
  calculate: calculateEmergencyFund,
  howItWorks: [
    'Enter your total monthly expenses.',
    'Select how many months to cover.',
    'Input current emergency savings.',
    'Calculate to see your target and gap.',
  ],
  example: {
    title: 'Example: $4,000 Monthly Expenses',
    description: 'For $4,000 monthly expenses targeting 6 months with $5,000 saved:',
    inputs: { monthlyExpenses: 4000, monthsCovered: 6, currentSavings: 5000 },
    results: [
      { label: 'Emergency Fund Target', value: 24000, formatted: '$24,000', isPrimary: true },
      { label: 'Amount Needed', value: 19000, formatted: '$19,000', isPrimary: true },
      { label: 'Percent Funded', value: 20.83, formatted: '20.83%' },
    ],
  },
  faqs: [
    { question: 'How much should my emergency fund be?', answer: 'Most experts recommend 3-6 months of essential expenses. Single earners need 6+ months; dual-income families may need 3-4 months.' },
    { question: 'What counts as an emergency?', answer: 'True emergencies include job loss, medical emergencies, major car repairs, and urgent home repairs. Vacations and sales do not count.' },
    { question: 'Where should I keep my emergency fund?', answer: 'Keep it in a high-yield savings account or money market account. It should be accessible but separate from daily spending accounts.' },
  ],
  relatedCalculators: [
    { title: 'Budget Calculator', description: 'Calculate expenses', href: '/us/personal-finance/budget-calculator' },
    { title: 'Savings Goal Calculator', description: 'Plan savings timeline', href: '/us/personal-finance/savings-goal-calculator' },
    { title: 'Debt Payoff Calculator', description: 'Balance savings and debt', href: '/us/personal-finance/debt-payoff-calculator' },
  ],
  seo: {
    title: 'US Emergency Fund Calculator | How Much to Save',
    description: 'Calculate your emergency fund needs. Free calculator to determine how much savings you need for financial security.',
    keywords: ['emergency fund calculator', 'emergency savings calculator', 'rainy day fund', 'savings goal'],
    ogTitle: 'US Emergency Fund Calculator - How Much to Save',
    ogDescription: 'Calculate your emergency fund needs.',
  },
};

// Export all calculators
export const allCalculators: Record<string, CalculatorPageData> = {
  'mortgage-calculator': mortgageCalculator,
  'auto-loan-calculator': autoLoanCalculator,
  'personal-loan-calculator': personalLoanCalculator,
  'student-loan-calculator': studentLoanCalculator,
  'home-equity-calculator': homeEquityCalculator,
  'income-tax-calculator': incomeTaxCalculator,
  'capital-gains-tax-calculator': capitalGainsCalculator,
  'self-employment-tax-calculator': selfEmploymentTaxCalculator,
  'property-tax-calculator': propertyTaxCalculator,
  'sales-tax-calculator': salesTaxCalculator,
  'compound-interest-calculator': compoundInterestCalculator,
  'roi-calculator': roiCalculator,
  'dividend-calculator': dividendCalculator,
  'stock-return-calculator': stockReturnCalculator,
  'mutual-fund-calculator': mutualFundCalculator,
  '401k-calculator': calculator401k,
  'ira-calculator': iraCalculator,
  'social-security-calculator': socialSecurityCalculator,
  'annuity-calculator': annuityCalculator,
  'retirement-savings-calculator': retirementSavingsCalculator,
  'budget-calculator': budgetCalculator,
  'net-worth-calculator': netWorthCalculator,
  'debt-payoff-calculator': debtPayoffCalculator,
  'savings-goal-calculator': savingsGoalCalculator,
  'emergency-fund-calculator': emergencyFundCalculator,
};

// State mortgage data
export const stateMortgageData: Record<string, StateMortgageData> = {
  california: {
    state: 'California',
    stateCode: 'CA',
    propertyTaxRate: 0.75,
    avgHomePrice: 750000,
    intro: 'California home buyers face some of the highest home prices in the nation. Our California mortgage calculator helps you estimate monthly payments including property taxes, which vary significantly by county.',
    propertyTaxDescription: 'California property taxes are capped at 1% of assessed value under Proposition 13, plus local assessments. The effective rate averages 0.75% statewide but can reach 1.2% in some counties.',
    localExample: 'For a median-priced $750,000 home in Los Angeles with 20% down, expect monthly property taxes around $470, significantly impacting your total payment.',
    stateSpecificFAQs: [
      { question: 'What is the average property tax rate in California?', answer: 'California\'s average effective property tax rate is 0.75%, though rates vary by county from 0.55% to 1.2%.' },
      { question: 'How does Proposition 13 affect California property taxes?', answer: 'Proposition 13 limits property tax to 1% of assessed value at purchase, with annual increases capped at 2%.' },
      { question: 'What is the median home price in California?', answer: 'As of 2024, California\'s median home price is approximately $750,000, though this varies significantly by region.' },
    ],
  },
  texas: {
    state: 'Texas',
    stateCode: 'TX',
    propertyTaxRate: 1.68,
    avgHomePrice: 340000,
    intro: 'Texas has no state income tax but higher property taxes. Our Texas mortgage calculator accounts for these rates, which are among the highest in the nation.',
    propertyTaxDescription: 'Texas property taxes average 1.68% of home value annually, with rates varying significantly by county and school district. There is no state income tax to offset this.',
    localExample: 'For a $340,000 home in Houston, expect annual property taxes around $5,700, or $475 monthly added to your mortgage payment.',
    stateSpecificFAQs: [
      { question: 'Why are Texas property taxes so high?', answer: 'Texas has no state income tax, so property taxes fund schools, roads, and local services. Rates average 1.68% statewide.' },
      { question: 'Do seniors get property tax relief in Texas?', answer: 'Yes, homeowners 65+ can claim a $10,000 school tax exemption and may qualify for additional local exemptions.' },
      { question: 'What is the homestead exemption in Texas?', answer: 'Texas offers a $40,000 school tax homestead exemption for primary residences, with additional local exemptions possible.' },
    ],
  },
  florida: {
    state: 'Florida',
    stateCode: 'FL',
    propertyTaxRate: 0.91,
    avgHomePrice: 390000,
    intro: 'Florida offers no state income tax and moderate property taxes. Our Florida mortgage calculator helps you estimate payments in this popular retirement and vacation destination.',
    propertyTaxDescription: 'Florida property taxes average 0.91% of home value. The state offers a $50,000 homestead exemption for primary residences, reducing taxable value.',
    localExample: 'For a $390,000 primary residence in Miami with the homestead exemption, expect annual property taxes around $3,100, or $258 monthly.',
    stateSpecificFAQs: [
      { question: 'What is the Florida homestead exemption?', answer: 'Florida offers a $50,000 homestead exemption: $25,000 for all property taxes and an additional $25,000 for non-school taxes.' },
      { question: 'Does Florida have property tax for seniors?', answer: 'Some Florida counties offer additional exemptions for seniors 65+ with limited incomes.' },
      { question: 'Are property taxes higher for vacation homes in Florida?', answer: 'Yes, vacation homes and investment properties do not qualify for homestead exemptions, resulting in higher tax bills.' },
    ],
  },
  'new-york': {
    state: 'New York',
    stateCode: 'NY',
    propertyTaxRate: 1.72,
    avgHomePrice: 450000,
    intro: 'New York state has high property taxes, especially in suburban counties. Our New York mortgage calculator includes these costs for accurate payment estimates.',
    propertyTaxDescription: 'New York property taxes average 1.72% statewide but exceed 2.5% in some downstate counties. New York City has different assessment methods.',
    localExample: 'For a $450,000 home in Westchester County, expect annual property taxes around $10,000+, or $833+ monthly.',
    stateSpecificFAQs: [
      { question: 'What are property taxes like in New York City?', answer: 'NYC uses different assessment methods with lower effective rates (0.5-1%) but high absolute amounts due to property values.' },
      { question: 'Does New York offer property tax relief?', answer: 'The STAR program provides school tax relief for primary residences, with enhanced benefits for seniors.' },
      { question: 'Which NY counties have the highest property taxes?', answer: 'Nassau, Suffolk, Westchester, and Rockland counties typically have the highest property tax rates in New York.' },
    ],
  },
  illinois: {
    state: 'Illinois',
    stateCode: 'IL',
    propertyTaxRate: 2.08,
    avgHomePrice: 280000,
    intro: 'Illinois has the second-highest property tax rate in the nation. Our Illinois mortgage calculator helps you understand the full cost of homeownership in the Prairie State.',
    propertyTaxDescription: 'Illinois property taxes average 2.08% of home value, second only to New Jersey. Rates are particularly high in Cook County and the Chicago suburbs.',
    localExample: 'For a $280,000 home in Cook County, expect annual property taxes around $5,800, or $483 monthly.',
    stateSpecificFAQs: [
      { question: 'Why are Illinois property taxes so high?', answer: 'High property taxes fund local governments and schools due to limited state funding. The state has the second-highest rate nationally.' },
      { question: 'What is the homestead exemption in Illinois?', answer: 'Illinois offers a $6,000-$10,000 general homestead exemption, with additional senior exemptions available.' },
      { question: 'Are property taxes higher in Chicago?', answer: 'Cook County (Chicago) has complex assessment methods. Effective rates vary but are generally among the highest in the state.' },
    ],
  },
  pennsylvania: {
    state: 'Pennsylvania',
    stateCode: 'PA',
    propertyTaxRate: 1.49,
    avgHomePrice: 260000,
    intro: 'Pennsylvania property taxes vary significantly by school district. Our Pennsylvania mortgage calculator helps you estimate payments across the Keystone State.',
    propertyTaxDescription: 'Pennsylvania property taxes average 1.49% but range from under 1% to over 2.5% depending on the school district and municipality.',
    localExample: 'For a $260,000 home in the Philadelphia suburbs, expect annual property taxes between $3,900-$6,500 depending on the school district.',
    stateSpecificFAQs: [
      { question: 'How are property taxes calculated in Pennsylvania?', answer: 'Pennsylvania uses millage rates set by counties, municipalities, and school districts. Rates vary significantly by location.' },
      { question: 'Does Pennsylvania offer property tax relief?', answer: 'The state offers a Property Tax/Rent Rebate Program for seniors and disabled residents with limited incomes.' },
      { question: 'Are property taxes higher in urban or rural PA?', answer: 'Urban and suburban areas, particularly around Philadelphia and Pittsburgh, typically have higher property taxes than rural areas.' },
    ],
  },
  ohio: {
    state: 'Ohio',
    stateCode: 'OH',
    propertyTaxRate: 1.52,
    avgHomePrice: 220000,
    intro: 'Ohio offers affordable home prices with moderate property taxes. Our Ohio mortgage calculator provides accurate payment estimates for the Buckeye State.',
    propertyTaxDescription: 'Ohio property taxes average 1.52% of home value. The state offers a homestead exemption for seniors and disabled homeowners.',
    localExample: 'For a $220,000 home in Columbus, expect annual property taxes around $3,300, or $275 monthly.',
    stateSpecificFAQs: [
      { question: 'What is the homestead exemption in Ohio?', answer: 'Ohio offers a homestead exemption that reduces property value by $25,000 for qualifying seniors and disabled homeowners.' },
      { question: 'How do Ohio property taxes compare nationally?', answer: 'Ohio\'s property taxes are slightly above the national average but offset by lower home prices.' },
      { question: 'When are property taxes due in Ohio?', answer: 'Ohio property taxes are typically paid semi-annually, with due dates varying by county (usually February and July/August).' },
    ],
  },
  georgia: {
    state: 'Georgia',
    stateCode: 'GA',
    propertyTaxRate: 0.92,
    avgHomePrice: 320000,
    intro: 'Georgia has below-average property taxes and growing home values. Our Georgia mortgage calculator helps you plan for homeownership in the Peach State.',
    propertyTaxDescription: 'Georgia property taxes average 0.92% of home value. The state offers a standard homestead exemption, with additional exemptions available in many counties.',
    localExample: 'For a $320,000 home in Atlanta with homestead exemption, expect annual property taxes around $2,650, or $221 monthly.',
    stateSpecificFAQs: [
      { question: 'What is the Georgia homestead exemption?', answer: 'Georgia offers a $2,000 state homestead exemption, with many counties providing additional exemptions up to $10,000-$30,000.' },
      { question: 'Do seniors get property tax relief in Georgia?', answer: 'Seniors 65+ may qualify for additional exemptions that freeze or reduce property taxes, varying by county.' },
      { question: 'How are property taxes calculated in Georgia?', answer: 'Georgia taxes 40% of assessed fair market value at millage rates set by counties, cities, and school districts.' },
    ],
  },
  'north-carolina': {
    state: 'North Carolina',
    stateCode: 'NC',
    propertyTaxRate: 0.82,
    avgHomePrice: 300000,
    intro: 'North Carolina offers low property taxes and affordable housing. Our North Carolina mortgage calculator helps you estimate payments in this growing state.',
    propertyTaxDescription: 'North Carolina property taxes average 0.82%, among the lowest in the Southeast. Rates vary by county but remain relatively affordable.',
    localExample: 'For a $300,000 home in Raleigh, expect annual property taxes around $2,460, or $205 monthly.',
    stateSpecificFAQs: [
      { question: 'What is the property tax rate in North Carolina?', answer: 'North Carolina\'s average effective property tax rate is 0.82%, with most counties between 0.6% and 1.0%.' },
      { question: 'Does North Carolina have a homestead exemption?', answer: 'North Carolina does not have a statewide homestead exemption, but some municipalities offer elderly or disabled exemptions.' },
      { question: 'Are property taxes higher in Charlotte or Raleigh?', answer: 'Mecklenburg County (Charlotte) and Wake County (Raleigh) have similar rates around 0.8-0.9% effective tax rate.' },
    ],
  },
  michigan: {
    state: 'Michigan',
    stateCode: 'MI',
    propertyTaxRate: 1.54,
    avgHomePrice: 230000,
    intro: 'Michigan property taxes are above average but home prices remain affordable. Our Michigan mortgage calculator provides accurate payment estimates statewide.',
    propertyTaxDescription: 'Michigan property taxes average 1.54% of home value. The state offers a principal residence exemption that reduces school operating mills for primary homes.',
    localExample: 'For a $230,000 primary residence in Detroit suburbs, expect annual property taxes around $3,500, or $292 monthly.',
    stateSpecificFAQs: [
      { question: 'What is the Principal Residence Exemption in Michigan?', answer: 'The PRE exempts primary residences from 18 mills of school operating taxes, saving homeowners significantly.' },
      { question: 'How do Michigan property taxes compare to neighbors?', answer: 'Michigan\'s property taxes are higher than Ohio and Indiana but lower than Illinois and Wisconsin.' },
      { question: 'When are property taxes due in Michigan?', answer: 'Summer taxes are due July 1-September 14; winter taxes are due December 1-February 14 (dates vary by locality).' },
    ],
  },
};

// Category mappings
export const calculatorCategories = {
  'loan-calculators': {
    title: 'US Loan Calculators',
    description: 'Calculate payments and costs for mortgages, auto loans, personal loans, and more.',
    calculators: ['mortgage-calculator', 'auto-loan-calculator', 'personal-loan-calculator', 'student-loan-calculator', 'home-equity-calculator'],
  },
  'tax-calculators': {
    title: 'US Tax Calculators',
    description: 'Estimate federal and state taxes, including income, capital gains, and property taxes.',
    calculators: ['income-tax-calculator', 'capital-gains-tax-calculator', 'self-employment-tax-calculator', 'property-tax-calculator', 'sales-tax-calculator'],
  },
  'investment-calculators': {
    title: 'US Investment Calculators',
    description: 'Calculate returns, growth, and performance for stocks, bonds, and mutual funds.',
    calculators: ['compound-interest-calculator', 'roi-calculator', 'dividend-calculator', 'stock-return-calculator', 'mutual-fund-calculator'],
  },
  'retirement-calculators': {
    title: 'US Retirement Calculators',
    description: 'Plan for retirement with 401(k), IRA, Social Security, and savings calculators.',
    calculators: ['401k-calculator', 'ira-calculator', 'social-security-calculator', 'annuity-calculator', 'retirement-savings-calculator'],
  },
  'personal-finance': {
    title: 'US Personal Finance Calculators',
    description: 'Manage your money with budgeting, net worth, debt payoff, and savings calculators.',
    calculators: ['budget-calculator', 'net-worth-calculator', 'debt-payoff-calculator', 'savings-goal-calculator', 'emergency-fund-calculator'],
  },
};
