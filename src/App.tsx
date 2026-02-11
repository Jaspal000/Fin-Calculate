import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { CategoryPage } from '@/pages/CategoryPage';
import { StateMortgagePage } from '@/pages/StateMortgagePage';
import { CalculatorPage } from '@/components/CalculatorPage';
import { allCalculators, calculatorCategories } from '@/data/calculators';

// Simple router based on pathname
function Router() {
  const path = window.location.pathname;

  // Home page
  if (path === '/' || path === '/index.html') {
    return <HomePage />;
  }

  // State mortgage pages
  const stateMatch = path.match(/\/us\/loan-calculators\/mortgage-calculator\/([a-z-]+)\/?$/);
  if (stateMatch) {
    return <StateMortgagePage stateKey={stateMatch[1]} />;
  }

  // Category pages
  const categoryMatch = path.match(/\/us\/([a-z-]+)\/?$/);
  if (categoryMatch) {
    const categoryKey = categoryMatch[1];
    if (calculatorCategories[categoryKey as keyof typeof calculatorCategories]) {
      return <CategoryPage categoryKey={categoryKey} />;
    }
  }

  // Calculator pages
  const calcMatch = path.match(/\/us\/([a-z-]+)\/([a-z0-9-]+)\/?$/);
  if (calcMatch) {
    const categoryKey = calcMatch[1];
    const calcKey = calcMatch[2];
    const calcData = allCalculators[calcKey];
    
    if (calcData) {
      const breadcrumbs = [
        { name: 'US', url: '/us/' },
        { name: calculatorCategories[categoryKey as keyof typeof calculatorCategories]?.title.replace('US ', '') || categoryKey, url: `/us/${categoryKey}/` },
        { name: calcData.title.replace('US ', ''), url: `/us/${categoryKey}/${calcKey}` },
      ];

      return (
        <CalculatorPage
          data={calcData}
          breadcrumbs={breadcrumbs}
          url={`/us/${categoryKey}/${calcKey}`}
        />
      );
    }
  }

  // 404 Page
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The calculator you are looking for does not exist. 
        Browse our available calculators below.
      </p>
      <a 
        href="/"
        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
      >
        Go Home
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
