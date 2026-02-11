const fs = require('fs');
const path = require('path');

// Import calculator data
const { 
  allCalculators, 
  calculatorCategories, 
  stateMortgageData 
} = require('../src/data/calculators.ts');

const distDir = path.join(__dirname, '../dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Base HTML template
function generateHTML(title, description, content, breadcrumbs = [], faqs = []) {
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://fincalculate.com${crumb.url}`,
    })),
  } : null;

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const schemas = [breadcrumbSchema, faqSchema].filter(Boolean);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:site_name" content="FinCalculate" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${description}" />
    
    <title>${title}</title>
    
    ${schemas.length > 0 ? `<script type="application/ld+json">${JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}</script>` : ''}
    
    <script type="module" src="/assets/index.js"></script>
    <link rel="stylesheet" href="/assets/index.css" />
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
</html>`;
}

// Generate category pages
function generateCategoryPages() {
  Object.entries(calculatorCategories).forEach(([key, category]) => {
    const categoryDir = path.join(distDir, 'us', key);
    fs.mkdirSync(categoryDir, { recursive: true });
    
    const title = category.title;
    const description = category.description;
    const breadcrumbs = [
      { name: 'US', url: '/us/' },
      { name: category.title.replace('US ', ''), url: `/us/${key}/` },
    ];
    
    const content = `
      <div class="min-h-screen flex flex-col">
        <header class="sticky top-0 z-50 bg-white border-b">
          <div class="max-w-7xl mx-auto px-4 py-4">
            <a href="/" class="text-xl font-bold">FinCalculate</a>
          </div>
        </header>
        <main class="flex-1 max-w-7xl mx-auto px-4 py-8">
          <h1>${title}</h1>
          <p>${description}</p>
        </main>
      </div>
    `;
    
    const html = generateHTML(title, description, content, breadcrumbs);
    fs.writeFileSync(path.join(categoryDir, 'index.html'), html);
    console.log(`Generated: /us/${key}/`);
  });
}

// Generate calculator pages
function generateCalculatorPages() {
  Object.entries(allCalculators).forEach(([key, calc]) => {
    // Find which category this calculator belongs to
    let categoryKey = '';
    Object.entries(calculatorCategories).forEach(([catKey, cat]) => {
      if (cat.calculators.includes(key)) {
        categoryKey = catKey;
      }
    });
    
    if (!categoryKey) return;
    
    const calcDir = path.join(distDir, 'us', categoryKey, key);
    fs.mkdirSync(calcDir, { recursive: true });
    
    const breadcrumbs = [
      { name: 'US', url: '/us/' },
      { name: calculatorCategories[categoryKey].title.replace('US ', ''), url: `/us/${categoryKey}/` },
      { name: calc.title.replace('US ', ''), url: `/us/${categoryKey}/${key}` },
    ];
    
    const content = `
      <div class="min-h-screen flex flex-col">
        <header class="sticky top-0 z-50 bg-white border-b">
          <div class="max-w-7xl mx-auto px-4 py-4">
            <a href="/" class="text-xl font-bold">FinCalculate</a>
          </div>
        </header>
        <main class="flex-1 max-w-4xl mx-auto px-4 py-8">
          <h1>${calc.title}</h1>
          <p>${calc.description}</p>
        </main>
      </div>
    `;
    
    const html = generateHTML(calc.seo.title, calc.seo.description, content, breadcrumbs, calc.faqs);
    fs.writeFileSync(path.join(calcDir, 'index.html'), html);
    console.log(`Generated: /us/${categoryKey}/${key}/`);
  });
}

// Generate state mortgage pages
function generateStateMortgagePages() {
  const mortgageDir = path.join(distDir, 'us', 'loan-calculators', 'mortgage-calculator');
  
  Object.entries(stateMortgageData).forEach(([stateKey, stateData]) => {
    const stateDir = path.join(mortgageDir, stateKey);
    fs.mkdirSync(stateDir, { recursive: true });
    
    const breadcrumbs = [
      { name: 'US', url: '/us/' },
      { name: 'Loan Calculators', url: '/us/loan-calculators/' },
      { name: 'Mortgage Calculator', url: '/us/loan-calculators/mortgage-calculator' },
      { name: stateData.state, url: `/us/loan-calculators/mortgage-calculator/${stateKey}/` },
    ];
    
    const combinedFAQs = [...stateData.stateSpecificFAQs];
    
    const content = `
      <div class="min-h-screen flex flex-col">
        <header class="sticky top-0 z-50 bg-white border-b">
          <div class="max-w-7xl mx-auto px-4 py-4">
            <a href="/" class="text-xl font-bold">FinCalculate</a>
          </div>
        </header>
        <main class="flex-1 max-w-4xl mx-auto px-4 py-8">
          <h1>${stateData.state} Mortgage Calculator</h1>
          <p>${stateData.intro}</p>
        </main>
      </div>
    `;
    
    const title = `${stateData.state} Mortgage Calculator | Property Taxes & Payments`;
    const description = `Calculate mortgage payments in ${stateData.state} including property taxes. Free calculator with state-specific rates and information.`;
    
    const html = generateHTML(title, description, content, breadcrumbs, combinedFAQs);
    fs.writeFileSync(path.join(stateDir, 'index.html'), html);
    console.log(`Generated: /us/loan-calculators/mortgage-calculator/${stateKey}/`);
  });
}

// Generate all pages
console.log('Generating static pages...');
generateCategoryPages();
generateCalculatorPages();
generateStateMortgagePages();
console.log('Static page generation complete!');
