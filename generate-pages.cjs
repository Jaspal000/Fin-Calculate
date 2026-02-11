const fs = require('fs');
const path = require('path');

// Calculator data
const calculatorCategories = {
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

const calculatorTitles = {
  'mortgage-calculator': { title: 'US Mortgage Calculator', description: 'Calculate your monthly mortgage payments including principal, interest, taxes, and insurance.' },
  'auto-loan-calculator': { title: 'US Auto Loan Calculator', description: 'Calculate your monthly car loan payments and total interest costs.' },
  'personal-loan-calculator': { title: 'US Personal Loan Calculator', description: 'Calculate monthly payments and total cost for personal loans.' },
  'student-loan-calculator': { title: 'US Student Loan Calculator', description: 'Calculate student loan payments and understand your repayment options.' },
  'home-equity-calculator': { title: 'US Home Equity Calculator', description: 'Calculate your available home equity and potential loan amounts.' },
  'income-tax-calculator': { title: 'US Income Tax Calculator', description: 'Estimate your federal and state income tax liability.' },
  'capital-gains-tax-calculator': { title: 'US Capital Gains Tax Calculator', description: 'Calculate taxes on investment gains and losses.' },
  'self-employment-tax-calculator': { title: 'US Self-Employment Tax Calculator', description: 'Calculate self-employment tax for freelancers and business owners.' },
  'property-tax-calculator': { title: 'US Property Tax Calculator', description: 'Estimate your annual and monthly property tax payments.' },
  'sales-tax-calculator': { title: 'US Sales Tax Calculator', description: 'Calculate sales tax for any US state and locality.' },
  'compound-interest-calculator': { title: 'US Compound Interest Calculator', description: 'See how compound interest grows your investments over time.' },
  'roi-calculator': { title: 'US ROI Calculator', description: 'Calculate return on investment for any asset or project.' },
  'dividend-calculator': { title: 'US Dividend Calculator', description: 'Calculate dividend income from stocks and funds.' },
  'stock-return-calculator': { title: 'US Stock Return Calculator', description: 'Calculate total returns including capital gains and dividends.' },
  'mutual-fund-calculator': { title: 'US Mutual Fund Calculator', description: 'Calculate mutual fund returns and fees impact.' },
  '401k-calculator': { title: 'US 401(k) Calculator', description: 'Calculate your 401(k) retirement savings growth.' },
  'ira-calculator': { title: 'US IRA Calculator', description: 'Calculate Traditional and Roth IRA growth.' },
  'social-security-calculator': { title: 'US Social Security Calculator', description: 'Estimate your Social Security retirement benefits.' },
  'annuity-calculator': { title: 'US Annuity Calculator', description: 'Calculate annuity payments and growth.' },
  'retirement-savings-calculator': { title: 'US Retirement Savings Calculator', description: 'Plan your retirement savings and income needs.' },
  'budget-calculator': { title: 'US Budget Calculator', description: 'Create a monthly budget and track spending.' },
  'net-worth-calculator': { title: 'US Net Worth Calculator', description: 'Calculate your total net worth and track financial progress.' },
  'debt-payoff-calculator': { title: 'US Debt Payoff Calculator', description: 'Create a plan to pay off debt faster.' },
  'savings-goal-calculator': { title: 'US Savings Goal Calculator', description: 'Calculate how to reach your savings goals.' },
  'emergency-fund-calculator': { title: 'US Emergency Fund Calculator', description: 'Calculate your emergency fund needs.' },
};

const stateMortgageData = {
  california: { state: 'California', stateCode: 'CA', propertyTaxRate: 0.75, avgHomePrice: 750000 },
  texas: { state: 'Texas', stateCode: 'TX', propertyTaxRate: 1.68, avgHomePrice: 340000 },
  florida: { state: 'Florida', stateCode: 'FL', propertyTaxRate: 0.91, avgHomePrice: 390000 },
  'new-york': { state: 'New York', stateCode: 'NY', propertyTaxRate: 1.72, avgHomePrice: 450000 },
  illinois: { state: 'Illinois', stateCode: 'IL', propertyTaxRate: 2.08, avgHomePrice: 280000 },
  pennsylvania: { state: 'Pennsylvania', stateCode: 'PA', propertyTaxRate: 1.49, avgHomePrice: 260000 },
  ohio: { state: 'Ohio', stateCode: 'OH', propertyTaxRate: 1.52, avgHomePrice: 220000 },
  georgia: { state: 'Georgia', stateCode: 'GA', propertyTaxRate: 0.92, avgHomePrice: 320000 },
  'north-carolina': { state: 'North Carolina', stateCode: 'NC', propertyTaxRate: 0.82, avgHomePrice: 300000 },
  michigan: { state: 'Michigan', stateCode: 'MI', propertyTaxRate: 1.54, avgHomePrice: 230000 },
};

const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// HTML template
function generateHTML(title, description, url) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${description}">
  <link rel="canonical" href="https://fincalculate.com${url}">
  <title>${title}</title>
  <script type="module" crossorigin src="/assets/index.js"></script>
  <link rel="stylesheet" crossorigin href="/assets/index.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>`;
}

// Generate category pages
Object.entries(calculatorCategories).forEach(([key, category]) => {
  const categoryDir = path.join(distDir, 'us', key);
  fs.mkdirSync(categoryDir, { recursive: true });
  
  const html = generateHTML(category.title, category.description, `/us/${key}/`);
  fs.writeFileSync(path.join(categoryDir, 'index.html'), html);
  console.log(`Generated: /us/${key}/`);
});

// Generate calculator pages
Object.entries(calculatorCategories).forEach(([catKey, category]) => {
  category.calculators.forEach((calcKey) => {
    const calc = calculatorTitles[calcKey];
    if (!calc) return;
    
    const calcDir = path.join(distDir, 'us', catKey, calcKey);
    fs.mkdirSync(calcDir, { recursive: true });
    
    const html = generateHTML(calc.title, calc.description, `/us/${catKey}/${calcKey}/`);
    fs.writeFileSync(path.join(calcDir, 'index.html'), html);
    console.log(`Generated: /us/${catKey}/${calcKey}/`);
  });
});

// Generate state mortgage pages
const mortgageDir = path.join(distDir, 'us', 'loan-calculators', 'mortgage-calculator');
Object.entries(stateMortgageData).forEach(([stateKey, stateData]) => {
  const stateDir = path.join(mortgageDir, stateKey);
  fs.mkdirSync(stateDir, { recursive: true });
  
  const title = `${stateData.state} Mortgage Calculator | Property Taxes & Payments`;
  const description = `Calculate mortgage payments in ${stateData.state} including property taxes. Free calculator with state-specific rates and information.`;
  
  const html = generateHTML(title, description, `/us/loan-calculators/mortgage-calculator/${stateKey}/`);
  fs.writeFileSync(path.join(stateDir, 'index.html'), html);
  console.log(`Generated: /us/loan-calculators/mortgage-calculator/${stateKey}/`);
});

// Generate US index page
const usDir = path.join(distDir, 'us');
fs.mkdirSync(usDir, { recursive: true });
const usHtml = generateHTML('US Financial Calculators | FinCalculate', 'Free financial calculators for the US market. Calculate loans, taxes, investments, retirement, and personal finance.', '/us/');
fs.writeFileSync(path.join(usDir, 'index.html'), usHtml);
console.log('Generated: /us/');

console.log('\nAll static pages generated successfully!');
console.log(`Total pages: ${Object.keys(calculatorCategories).length * 6 + Object.keys(stateMortgageData).length + 1}`);
