interface AdPlaceholderProps {
  position: 'intro' | 'results' | 'mid-content' | 'sidebar';
}

export function AdPlaceholder({ position }: AdPlaceholderProps) {
  const labels: Record<string, string> = {
    intro: 'Advertisement',
    results: 'Advertisement',
    'mid-content': 'Advertisement',
    sidebar: 'Advertisement',
  };

  const heights: Record<string, string> = {
    intro: 'min-h-[90px]',
    results: 'min-h-[90px]',
    'mid-content': 'min-h-[250px]',
    sidebar: 'min-h-[600px]',
  };

  return (
    <div className={`ad-placeholder ${heights[position]}`}>
      <span>{labels[position]}</span>
    </div>
  );
}
