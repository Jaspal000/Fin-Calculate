import type { CalculatorResult } from '@/types/calculator';

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(2)}%`;
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

// Mortgage Calculator
export const calculateMortgage = (values: Record<string, number>): CalculatorResult[] => {
  const homePrice = values.homePrice || 0;
  const downPayment = values.downPayment || 0;
  const interestRate = (values.interestRate || 0) / 100 / 12;
  const loanTerm = (values.loanTerm || 30) * 12;
  const propertyTax = values.propertyTax || 0;
  const homeInsurance = values.homeInsurance || 0;
  const hoaFees = values.hoaFees || 0;

  const loanAmount = homePrice - downPayment;
  const monthlyPayment = loanAmount > 0 
    ? (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / 
      (Math.pow(1 + interestRate, loanTerm) - 1)
    : 0;
  
  const totalMonthly = monthlyPayment + propertyTax + homeInsurance + hoaFees;
  const totalCost = monthlyPayment * loanTerm;
  const totalInterest = totalCost - loanAmount;

  return [
    { label: 'Monthly Payment', value: monthlyPayment, formatted: formatCurrency(monthlyPayment), isPrimary: true },
    { label: 'Total Monthly Payment (with taxes & insurance)', value: totalMonthly, formatted: formatCurrency(totalMonthly) },
    { label: 'Loan Amount', value: loanAmount, formatted: formatCurrency(loanAmount) },
    { label: 'Total Interest Paid', value: totalInterest, formatted: formatCurrency(totalInterest) },
    { label: 'Total Cost of Loan', value: totalCost, formatted: formatCurrency(totalCost) },
  ];
};

// Auto Loan Calculator
export const calculateAutoLoan = (values: Record<string, number>): CalculatorResult[] => {
  const carPrice = values.carPrice || 0;
  const downPayment = values.downPayment || 0;
  const tradeInValue = values.tradeInValue || 0;
  const interestRate = (values.interestRate || 0) / 100 / 12;
  const loanTerm = (values.loanTerm || 60);

  const loanAmount = carPrice - downPayment - tradeInValue;
  const monthlyPayment = loanAmount > 0 && interestRate > 0
    ? (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / 
      (Math.pow(1 + interestRate, loanTerm) - 1)
    : loanAmount / loanTerm;
  
  const totalCost = monthlyPayment * loanTerm;
  const totalInterest = totalCost - loanAmount;

  return [
    { label: 'Monthly Payment', value: monthlyPayment, formatted: formatCurrency(monthlyPayment), isPrimary: true },
    { label: 'Loan Amount', value: loanAmount, formatted: formatCurrency(loanAmount) },
    { label: 'Total Interest Paid', value: totalInterest, formatted: formatCurrency(totalInterest) },
    { label: 'Total Cost of Loan', value: totalCost, formatted: formatCurrency(totalCost) },
  ];
};

// Personal Loan Calculator
export const calculatePersonalLoan = (values: Record<string, number>): CalculatorResult[] => {
  const loanAmount = values.loanAmount || 0;
  const interestRate = (values.interestRate || 0) / 100 / 12;
  const loanTerm = (values.loanTerm || 36);

  const monthlyPayment = loanAmount > 0 && interestRate > 0
    ? (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / 
      (Math.pow(1 + interestRate, loanTerm) - 1)
    : loanAmount / loanTerm;
  
  const totalCost = monthlyPayment * loanTerm;
  const totalInterest = totalCost - loanAmount;

  return [
    { label: 'Monthly Payment', value: monthlyPayment, formatted: formatCurrency(monthlyPayment), isPrimary: true },
    { label: 'Total Interest Paid', value: totalInterest, formatted: formatCurrency(totalInterest) },
    { label: 'Total Cost of Loan', value: totalCost, formatted: formatCurrency(totalCost) },
  ];
};

// Student Loan Calculator
export const calculateStudentLoan = (values: Record<string, number>): CalculatorResult[] => {
  const loanAmount = values.loanAmount || 0;
  const interestRate = (values.interestRate || 0) / 100 / 12;
  const loanTerm = (values.loanTerm || 10) * 12;

  const monthlyPayment = loanAmount > 0 && interestRate > 0
    ? (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / 
      (Math.pow(1 + interestRate, loanTerm) - 1)
    : loanAmount / loanTerm;
  
  const totalCost = monthlyPayment * loanTerm;
  const totalInterest = totalCost - loanAmount;

  return [
    { label: 'Monthly Payment', value: monthlyPayment, formatted: formatCurrency(monthlyPayment), isPrimary: true },
    { label: 'Total Interest Paid', value: totalInterest, formatted: formatCurrency(totalInterest) },
    { label: 'Total Cost of Loan', value: totalCost, formatted: formatCurrency(totalCost) },
  ];
};

// Home Equity Loan Calculator
export const calculateHomeEquity = (values: Record<string, number>): CalculatorResult[] => {
  const homeValue = values.homeValue || 0;
  const mortgageBalance = values.mortgageBalance || 0;
  const ltvRatio = (values.ltvRatio || 80) / 100;
  const interestRate = (values.interestRate || 0) / 100 / 12;
  const loanTerm = (values.loanTerm || 15) * 12;

  const availableEquity = homeValue - mortgageBalance;
  const maxLoanAmount = availableEquity * ltvRatio;
  
  const monthlyPayment = maxLoanAmount > 0 && interestRate > 0
    ? (maxLoanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / 
      (Math.pow(1 + interestRate, loanTerm) - 1)
    : 0;
  
  const totalCost = monthlyPayment * loanTerm;
  const totalInterest = totalCost - maxLoanAmount;

  return [
    { label: 'Available Equity', value: availableEquity, formatted: formatCurrency(availableEquity), isPrimary: true },
    { label: 'Maximum Loan Amount', value: maxLoanAmount, formatted: formatCurrency(maxLoanAmount), isPrimary: true },
    { label: 'Monthly Payment', value: monthlyPayment, formatted: formatCurrency(monthlyPayment) },
    { label: 'Total Interest Paid', value: totalInterest, formatted: formatCurrency(totalInterest) },
  ];
};

// Income Tax Calculator
export const calculateIncomeTax = (values: Record<string, number>): CalculatorResult[] => {
  const income = values.income || 0;
  const filingStatus = values.filingStatus || 1;
  const deductions = values.deductions || 0;
  const stateTaxRate = (values.stateTaxRate || 0) / 100;

  const taxableIncome = Math.max(0, income - deductions);
  
  // 2024 Federal Tax Brackets (simplified)
  let federalTax = 0;
  const brackets = filingStatus === 2 
    ? [[0, 23200, 0.1], [23200, 94300, 0.12], [94300, 201050, 0.22], [201050, 383900, 0.24], [383900, 487450, 0.32], [487450, 731200, 0.35], [731200, Infinity, 0.37]]
    : [[0, 11600, 0.1], [11600, 47150, 0.12], [47150, 100525, 0.22], [100525, 191950, 0.24], [191950, 243725, 0.32], [243725, 609350, 0.35], [609350, Infinity, 0.37]];
  
  for (const [min, max, rate] of brackets) {
    if (taxableIncome > min) {
      const bracketIncome = Math.min(taxableIncome, max as number) - (min as number);
      federalTax += bracketIncome * (rate as number);
    }
  }
  
  const stateTax = taxableIncome * stateTaxRate;
  const totalTax = federalTax + stateTax;
  const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
  const afterTaxIncome = income - totalTax;

  return [
    { label: 'Total Tax', value: totalTax, formatted: formatCurrency(totalTax), isPrimary: true },
    { label: 'Federal Tax', value: federalTax, formatted: formatCurrency(federalTax) },
    { label: 'State Tax', value: stateTax, formatted: formatCurrency(stateTax) },
    { label: 'Effective Tax Rate', value: effectiveRate, formatted: formatPercent(effectiveRate) },
    { label: 'After-Tax Income', value: afterTaxIncome, formatted: formatCurrency(afterTaxIncome) },
  ];
};

// Capital Gains Tax Calculator
export const calculateCapitalGains = (values: Record<string, number>): CalculatorResult[] => {
  const purchasePrice = values.purchasePrice || 0;
  const salePrice = values.salePrice || 0;
  const holdingPeriod = values.holdingPeriod || 12;
  const income = values.income || 0;

  const gain = salePrice - purchasePrice;
  const isLongTerm = holdingPeriod >= 12;
  
  let taxRate = 0;
  if (isLongTerm) {
    if (income <= 47025) taxRate = 0;
    else if (income <= 518900) taxRate = 15;
    else taxRate = 20;
  } else {
    taxRate = income <= 11600 ? 10 : income <= 47150 ? 12 : income <= 100525 ? 22 : 24;
  }
  
  const taxAmount = gain * (taxRate / 100);
  const netGain = gain - taxAmount;

  return [
    { label: 'Capital Gain', value: gain, formatted: formatCurrency(gain), isPrimary: true },
    { label: 'Estimated Tax', value: taxAmount, formatted: formatCurrency(taxAmount), isPrimary: true },
    { label: 'Tax Rate', value: taxRate, formatted: formatPercent(taxRate) },
    { label: 'Net Gain After Tax', value: netGain, formatted: formatCurrency(netGain) },
  ];
};

// Self-Employment Tax Calculator
export const calculateSelfEmploymentTax = (values: Record<string, number>): CalculatorResult[] => {
  const netIncome = values.netIncome || 0;
  const deductionPercent = values.deductionPercent || 50;

  const taxableIncome = netIncome * (1 - deductionPercent / 100);
  const socialSecurityTax = Math.min(taxableIncome, 168600) * 0.124;
  const medicareTax = taxableIncome * 0.029;
  const additionalMedicare = taxableIncome > 200000 ? (taxableIncome - 200000) * 0.009 : 0;
  const totalTax = socialSecurityTax + medicareTax + additionalMedicare;
  const effectiveRate = netIncome > 0 ? (totalTax / netIncome) * 100 : 0;

  return [
    { label: 'Self-Employment Tax', value: totalTax, formatted: formatCurrency(totalTax), isPrimary: true },
    { label: 'Social Security Tax', value: socialSecurityTax, formatted: formatCurrency(socialSecurityTax) },
    { label: 'Medicare Tax', value: medicareTax, formatted: formatCurrency(medicareTax) },
    { label: 'Effective Tax Rate', value: effectiveRate, formatted: formatPercent(effectiveRate) },
  ];
};

// Property Tax Calculator
export const calculatePropertyTax = (values: Record<string, number>): CalculatorResult[] => {
  const homeValue = values.homeValue || 0;
  const taxRate = (values.taxRate || 0) / 100;
  const assessmentRatio = (values.assessmentRatio || 100) / 100;

  const assessedValue = homeValue * assessmentRatio;
  const annualTax = assessedValue * taxRate;
  const monthlyTax = annualTax / 12;
  const effectiveRate = taxRate * 100;

  return [
    { label: 'Annual Property Tax', value: annualTax, formatted: formatCurrency(annualTax), isPrimary: true },
    { label: 'Monthly Property Tax', value: monthlyTax, formatted: formatCurrency(monthlyTax) },
    { label: 'Assessed Value', value: assessedValue, formatted: formatCurrency(assessedValue) },
    { label: 'Effective Tax Rate', value: effectiveRate, formatted: formatPercent(effectiveRate) },
  ];
};

// Sales Tax Calculator
export const calculateSalesTax = (values: Record<string, number>): CalculatorResult[] => {
  const purchaseAmount = values.purchaseAmount || 0;
  const taxRate = (values.taxRate || 0) / 100;

  const taxAmount = purchaseAmount * taxRate;
  const totalAmount = purchaseAmount + taxAmount;

  return [
    { label: 'Sales Tax', value: taxAmount, formatted: formatCurrency(taxAmount), isPrimary: true },
    { label: 'Total Amount', value: totalAmount, formatted: formatCurrency(totalAmount), isPrimary: true },
    { label: 'Subtotal', value: purchaseAmount, formatted: formatCurrency(purchaseAmount) },
  ];
};

// Compound Interest Calculator
export const calculateCompoundInterest = (values: Record<string, number>): CalculatorResult[] => {
  const principal = values.principal || 0;
  const rate = (values.rate || 0) / 100;
  const time = values.time || 0;
  const compoundFrequency = values.compoundFrequency || 12;
  const monthlyContribution = values.monthlyContribution || 0;

  const n = compoundFrequency;
  const t = time;
  const r = rate;
  const p = principal;
  const pmt = monthlyContribution;

  const amount = p * Math.pow(1 + r / n, n * t) + 
    pmt * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
  const totalContributions = p + pmt * 12 * t;
  const interestEarned = amount - totalContributions;

  return [
    { label: 'Future Value', value: amount, formatted: formatCurrency(amount), isPrimary: true },
    { label: 'Total Contributions', value: totalContributions, formatted: formatCurrency(totalContributions) },
    { label: 'Interest Earned', value: interestEarned, formatted: formatCurrency(interestEarned), isPrimary: true },
  ];
};

// ROI Calculator
export const calculateROI = (values: Record<string, number>): CalculatorResult[] => {
  const initialInvestment = values.initialInvestment || 0;
  const finalValue = values.finalValue || 0;
  const investmentPeriod = values.investmentPeriod || 1;

  const gain = finalValue - initialInvestment;
  const roi = initialInvestment > 0 ? (gain / initialInvestment) * 100 : 0;
  const annualizedRoi = initialInvestment > 0 ? (Math.pow(finalValue / initialInvestment, 1 / investmentPeriod) - 1) * 100 : 0;

  return [
    { label: 'Return on Investment (ROI)', value: roi, formatted: formatPercent(roi), isPrimary: true },
    { label: 'Annualized ROI', value: annualizedRoi, formatted: formatPercent(annualizedRoi), isPrimary: true },
    { label: 'Total Gain', value: gain, formatted: formatCurrency(gain) },
  ];
};

// Dividend Calculator
export const calculateDividend = (values: Record<string, number>): CalculatorResult[] => {
  const shares = values.shares || 0;
  const dividendPerShare = values.dividendPerShare || 0;
  const frequency = values.frequency || 4;
  const sharePrice = values.sharePrice || 0;

  const dividendPerPeriod = shares * dividendPerShare;
  const annualDividend = dividendPerPeriod * frequency;
  const portfolioValue = shares * sharePrice;
  const yieldPercent = portfolioValue > 0 ? (annualDividend / portfolioValue) * 100 : 0;

  return [
    { label: 'Annual Dividend Income', value: annualDividend, formatted: formatCurrency(annualDividend), isPrimary: true },
    { label: 'Dividend Per Period', value: dividendPerPeriod, formatted: formatCurrency(dividendPerPeriod) },
    { label: 'Dividend Yield', value: yieldPercent, formatted: formatPercent(yieldPercent) },
    { label: 'Portfolio Value', value: portfolioValue, formatted: formatCurrency(portfolioValue) },
  ];
};

// Stock Return Calculator
export const calculateStockReturn = (values: Record<string, number>): CalculatorResult[] => {
  const shares = values.shares || 0;
  const purchasePrice = values.purchasePrice || 0;
  const currentPrice = values.currentPrice || 0;
  const dividends = values.dividends || 0;

  const costBasis = shares * purchasePrice;
  const currentValue = shares * currentPrice;
  const capitalGain = currentValue - costBasis;
  const totalReturn = capitalGain + dividends;
  const returnPercent = costBasis > 0 ? (totalReturn / costBasis) * 100 : 0;

  return [
    { label: 'Total Return', value: totalReturn, formatted: formatCurrency(totalReturn), isPrimary: true },
    { label: 'Return Percentage', value: returnPercent, formatted: formatPercent(returnPercent), isPrimary: true },
    { label: 'Capital Gain', value: capitalGain, formatted: formatCurrency(capitalGain) },
    { label: 'Dividends Received', value: dividends, formatted: formatCurrency(dividends) },
    { label: 'Current Value', value: currentValue, formatted: formatCurrency(currentValue) },
  ];
};

// Mutual Fund Calculator
export const calculateMutualFund = (values: Record<string, number>): CalculatorResult[] => {
  const initialInvestment = values.initialInvestment || 0;
  const monthlyContribution = values.monthlyContribution || 0;
  const returnRate = (values.returnRate || 0) / 100;
  const years = values.years || 0;
  const expenseRatio = (values.expenseRatio || 0) / 100;

  const netReturn = returnRate - expenseRatio;
  const months = years * 12;
  const futureValue = initialInvestment * Math.pow(1 + netReturn / 12, months) + 
    monthlyContribution * ((Math.pow(1 + netReturn / 12, months) - 1) / (netReturn / 12));
  const totalContributions = initialInvestment + monthlyContribution * months;
  const earnings = futureValue - totalContributions;
  const totalExpenses = totalContributions * expenseRatio * years;

  return [
    { label: 'Future Value', value: futureValue, formatted: formatCurrency(futureValue), isPrimary: true },
    { label: 'Total Earnings', value: earnings, formatted: formatCurrency(earnings), isPrimary: true },
    { label: 'Total Contributions', value: totalContributions, formatted: formatCurrency(totalContributions) },
    { label: 'Total Expenses', value: totalExpenses, formatted: formatCurrency(totalExpenses) },
  ];
};

// 401k Calculator
export const calculate401k = (values: Record<string, number>): CalculatorResult[] => {
  const salary = values.salary || 0;
  const contributionPercent = (values.contributionPercent || 0) / 100;
  const employerMatch = (values.employerMatch || 0) / 100;
  const matchLimit = (values.matchLimit || 0) / 100;
  const returnRate = (values.returnRate || 0) / 100;
  const years = values.years || 0;

  const annualContribution = salary * contributionPercent;
  const employerContribution = Math.min(annualContribution, salary * matchLimit) * employerMatch;
  const totalAnnualContribution = annualContribution + employerContribution;
  
  const futureValue = totalAnnualContribution * ((Math.pow(1 + returnRate, years) - 1) / returnRate);
  const totalContributions = totalAnnualContribution * years;
  const earnings = futureValue - totalContributions;

  return [
    { label: '401(k) Balance', value: futureValue, formatted: formatCurrency(futureValue), isPrimary: true },
    { label: 'Total Contributions', value: totalContributions, formatted: formatCurrency(totalContributions) },
    { label: 'Investment Earnings', value: earnings, formatted: formatCurrency(earnings), isPrimary: true },
    { label: 'Annual Contribution', value: annualContribution, formatted: formatCurrency(annualContribution) },
    { label: 'Employer Match', value: employerContribution, formatted: formatCurrency(employerContribution) },
  ];
};

// IRA Calculator
export const calculateIRA = (values: Record<string, number>): CalculatorResult[] => {
  const contribution = Math.min(values.contribution || 0, 7000);
  const currentAge = values.currentAge || 30;
  const retirementAge = values.retirementAge || 65;
  const returnRate = (values.returnRate || 0) / 100;

  const years = retirementAge - currentAge;
  const futureValue = contribution * ((Math.pow(1 + returnRate, years) - 1) / returnRate);
  const totalContributions = contribution * years;
  const earnings = futureValue - totalContributions;

  return [
    { label: 'IRA Balance at Retirement', value: futureValue, formatted: formatCurrency(futureValue), isPrimary: true },
    { label: 'Total Contributions', value: totalContributions, formatted: formatCurrency(totalContributions) },
    { label: 'Investment Earnings', value: earnings, formatted: formatCurrency(earnings), isPrimary: true },
    { label: 'Years Until Retirement', value: years, formatted: `${years} years` },
  ];
};

// Social Security Calculator
export const calculateSocialSecurity = (values: Record<string, number>): CalculatorResult[] => {
  const retirementAge = values.retirementAge || 67;
  const currentSalary = values.currentSalary || 0;
  const yearsWorked = values.yearsWorked || 15;

  const fullRetirementAge = 67;
  const monthlyBenefit = currentSalary * 0.004 * Math.min(yearsWorked, 35);
  
  let adjustedBenefit = monthlyBenefit;
  if (retirementAge < fullRetirementAge) {
    adjustedBenefit *= 1 - (fullRetirementAge - retirementAge) * 0.00667;
  } else if (retirementAge > fullRetirementAge) {
    adjustedBenefit *= 1 + (retirementAge - fullRetirementAge) * 0.008;
  }

  const annualBenefit = adjustedBenefit * 12;
  const lifeExpectancy = 85;
  const totalBenefit = adjustedBenefit * 12 * (lifeExpectancy - retirementAge);

  return [
    { label: 'Monthly Benefit', value: adjustedBenefit, formatted: formatCurrency(adjustedBenefit), isPrimary: true },
    { label: 'Annual Benefit', value: annualBenefit, formatted: formatCurrency(annualBenefit) },
    { label: 'Estimated Lifetime Benefit', value: totalBenefit, formatted: formatCurrency(totalBenefit) },
  ];
};

// Annuity Calculator
export const calculateAnnuity = (values: Record<string, number>): CalculatorResult[] => {
  const principal = values.principal || 0;
  const interestRate = (values.interestRate || 0) / 100;
  const years = values.years || 0;
  const isImmediate = values.isImmediate === 1;

  if (isImmediate) {
    const monthlyPayment = principal * (interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -years * 12));
    const totalPayout = monthlyPayment * 12 * years;
    
    return [
      { label: 'Monthly Payment', value: monthlyPayment, formatted: formatCurrency(monthlyPayment), isPrimary: true },
      { label: 'Annual Payment', value: monthlyPayment * 12, formatted: formatCurrency(monthlyPayment * 12) },
      { label: 'Total Payout', value: totalPayout, formatted: formatCurrency(totalPayout) },
    ];
  } else {
    const futureValue = principal * Math.pow(1 + interestRate, years);
    const earnings = futureValue - principal;
    
    return [
      { label: 'Future Value', value: futureValue, formatted: formatCurrency(futureValue), isPrimary: true },
      { label: 'Total Earnings', value: earnings, formatted: formatCurrency(earnings), isPrimary: true },
      { label: 'Principal', value: principal, formatted: formatCurrency(principal) },
    ];
  }
};

// Retirement Savings Calculator
export const calculateRetirementSavings = (values: Record<string, number>): CalculatorResult[] => {
  const currentAge = values.currentAge || 30;
  const retirementAge = values.retirementAge || 65;
  const currentSavings = values.currentSavings || 0;
  const monthlyContribution = values.monthlyContribution || 0;
  const returnRate = (values.returnRate || 0) / 100;
  const desiredIncome = values.desiredIncome || 0;

  const years = retirementAge - currentAge;
  const months = years * 12;
  
  const futureValue = currentSavings * Math.pow(1 + returnRate / 12, months) + 
    monthlyContribution * ((Math.pow(1 + returnRate / 12, months) - 1) / (returnRate / 12));
  
  const totalContributions = currentSavings + monthlyContribution * months;
  const earnings = futureValue - totalContributions;
  
  // 4% withdrawal rule
  const annualWithdrawal = futureValue * 0.04;
  const monthlyWithdrawal = annualWithdrawal / 12;
  const savingsGap = Math.max(0, desiredIncome - monthlyWithdrawal);

  return [
    { label: 'Retirement Savings', value: futureValue, formatted: formatCurrency(futureValue), isPrimary: true },
    { label: 'Monthly Retirement Income', value: monthlyWithdrawal, formatted: formatCurrency(monthlyWithdrawal), isPrimary: true },
    { label: 'Total Contributions', value: totalContributions, formatted: formatCurrency(totalContributions) },
    { label: 'Investment Earnings', value: earnings, formatted: formatCurrency(earnings) },
    { label: 'Income Gap', value: savingsGap, formatted: formatCurrency(savingsGap) },
  ];
};

// Budget Calculator
export const calculateBudget = (values: Record<string, number>): CalculatorResult[] => {
  const income = values.income || 0;
  const housing = values.housing || 0;
  const transportation = values.transportation || 0;
  const food = values.food || 0;
  const utilities = values.utilities || 0;
  const insurance = values.insurance || 0;
  const debt = values.debt || 0;
  const savings = values.savings || 0;
  const other = values.other || 0;

  const totalExpenses = housing + transportation + food + utilities + insurance + debt + savings + other;
  const remaining = income - totalExpenses;
  
  const housingPercent = income > 0 ? (housing / income) * 100 : 0;
  const savingsPercent = income > 0 ? (savings / income) * 100 : 0;
  const debtPercent = income > 0 ? (debt / income) * 100 : 0;

  return [
    { label: 'Total Expenses', value: totalExpenses, formatted: formatCurrency(totalExpenses), isPrimary: true },
    { label: 'Remaining Balance', value: remaining, formatted: formatCurrency(remaining), isPrimary: true },
    { label: 'Housing % of Income', value: housingPercent, formatted: formatPercent(housingPercent) },
    { label: 'Savings Rate', value: savingsPercent, formatted: formatPercent(savingsPercent) },
    { label: 'Debt-to-Income', value: debtPercent, formatted: formatPercent(debtPercent) },
  ];
};

// Net Worth Calculator
export const calculateNetWorth = (values: Record<string, number>): CalculatorResult[] => {
  const cash = values.cash || 0;
  const investments = values.investments || 0;
  const retirement = values.retirement || 0;
  const realEstate = values.realEstate || 0;
  const vehicles = values.vehicles || 0;
  const otherAssets = values.otherAssets || 0;
  const mortgage = values.mortgage || 0;
  const loans = values.loans || 0;
  const creditCards = values.creditCards || 0;
  const otherDebts = values.otherDebts || 0;

  const totalAssets = cash + investments + retirement + realEstate + vehicles + otherAssets;
  const totalLiabilities = mortgage + loans + creditCards + otherDebts;
  const netWorth = totalAssets - totalLiabilities;
  const debtToAsset = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

  return [
    { label: 'Net Worth', value: netWorth, formatted: formatCurrency(netWorth), isPrimary: true },
    { label: 'Total Assets', value: totalAssets, formatted: formatCurrency(totalAssets) },
    { label: 'Total Liabilities', value: totalLiabilities, formatted: formatCurrency(totalLiabilities) },
    { label: 'Debt-to-Asset Ratio', value: debtToAsset, formatted: formatPercent(debtToAsset) },
  ];
};

// Debt Payoff Calculator
export const calculateDebtPayoff = (values: Record<string, number>): CalculatorResult[] => {
  const balance = values.balance || 0;
  const interestRate = (values.interestRate || 0) / 100 / 12;
  const monthlyPayment = values.monthlyPayment || 0;

  let months = 0;
  let remaining = balance;
  let totalInterest = 0;

  while (remaining > 0 && months < 600) {
    const interest = remaining * interestRate;
    totalInterest += interest;
    const principal = monthlyPayment - interest;
    remaining -= principal;
    months++;
    if (remaining <= 0) break;
  }

  const totalCost = balance + totalInterest;
  const payoffDate = new Date();
  payoffDate.setMonth(payoffDate.getMonth() + months);

  return [
    { label: 'Months to Payoff', value: months, formatted: `${months} months`, isPrimary: true },
    { label: 'Total Interest Paid', value: totalInterest, formatted: formatCurrency(totalInterest), isPrimary: true },
    { label: 'Total Cost', value: totalCost, formatted: formatCurrency(totalCost) },
    { label: 'Payoff Date', value: 0, formatted: payoffDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) },
  ];
};

// Savings Goal Calculator
export const calculateSavingsGoal = (values: Record<string, number>): CalculatorResult[] => {
  const goalAmount = values.goalAmount || 0;
  const currentSavings = values.currentSavings || 0;
  const monthlyContribution = values.monthlyContribution || 0;
  const interestRate = (values.interestRate || 0) / 100 / 12;

  const needed = goalAmount - currentSavings;
  
  let months = 0;
  let balance = currentSavings;
  
  while (balance < goalAmount && months < 600) {
    balance = balance * (1 + interestRate) + monthlyContribution;
    months++;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  const requiredMonthly = needed > 0 && interestRate > 0
    ? (needed * interestRate) / (Math.pow(1 + interestRate, 60) - 1)
    : needed / 60;

  return [
    { label: 'Months to Goal', value: months, formatted: `${years} years, ${remainingMonths} months`, isPrimary: true },
    { label: 'Amount Needed', value: needed, formatted: formatCurrency(needed) },
    { label: 'Required Monthly (5 years)', value: requiredMonthly, formatted: formatCurrency(requiredMonthly) },
  ];
};

// Emergency Fund Calculator
export const calculateEmergencyFund = (values: Record<string, number>): CalculatorResult[] => {
  const monthlyExpenses = values.monthlyExpenses || 0;
  const monthsCovered = values.monthsCovered || 6;
  const currentSavings = values.currentSavings || 0;

  const targetFund = monthlyExpenses * monthsCovered;
  const gap = Math.max(0, targetFund - currentSavings);
  const percentFunded = targetFund > 0 ? (currentSavings / targetFund) * 100 : 0;
  const monthlyToSave6Months = gap / 6;
  const monthlyToSave12Months = gap / 12;

  return [
    { label: 'Emergency Fund Target', value: targetFund, formatted: formatCurrency(targetFund), isPrimary: true },
    { label: 'Amount Needed', value: gap, formatted: formatCurrency(gap), isPrimary: true },
    { label: 'Percent Funded', value: percentFunded, formatted: formatPercent(percentFunded) },
    { label: 'Monthly to Save (6 mo)', value: monthlyToSave6Months, formatted: formatCurrency(monthlyToSave6Months) },
    { label: 'Monthly to Save (12 mo)', value: monthlyToSave12Months, formatted: formatCurrency(monthlyToSave12Months) },
  ];
};
