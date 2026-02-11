import type { FAQItem } from '@/types/calculator';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQProps {
  faqs: FAQItem[];
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between text-left py-2"
            >
              <span className="font-medium text-foreground pr-4">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {openIndex === index && (
              <p className="text-muted-foreground mt-2 pb-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
