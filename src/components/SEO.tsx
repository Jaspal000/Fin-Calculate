import type { SEOMetadata, FAQItem } from '@/types/calculator';

interface SEOProps {
  metadata: SEOMetadata;
  url: string;
  breadcrumbs?: { name: string; url: string }[];
  faqs?: FAQItem[];
}

export function SEO({ metadata, url, breadcrumbs, faqs }: SEOProps) {
  const structuredData: Record<string, unknown>[] = [];

  // Breadcrumb structured data
  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `https://fincalculate.com${crumb.url}`,
      })),
    });
  }

  // FAQ structured data
  if (faqs && faqs.length > 0) {
    structuredData.push({
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
    });
  }

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      <link rel="canonical" href={`https://fincalculate.com${url}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://fincalculate.com${url}`} />
      <meta property="og:title" content={metadata.ogTitle} />
      <meta property="og:description" content={metadata.ogDescription} />
      <meta property="og:site_name" content="FinCalculate" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://fincalculate.com${url}`} />
      <meta property="twitter:title" content={metadata.ogTitle} />
      <meta property="twitter:description" content={metadata.ogDescription} />

      {/* Structured Data */}
      {structuredData.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData.length === 1 ? structuredData[0] : structuredData)}
        </script>
      )}
    </>
  );
}
