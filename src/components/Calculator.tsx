import { useState, useCallback } from 'react';
import type { CalculatorInput, CalculatorResult } from '@/types/calculator';
import { Calculator as CalculatorIcon, RotateCcw } from 'lucide-react';

interface CalculatorProps {
  inputs: CalculatorInput[];
  calculate: (values: Record<string, number>) => CalculatorResult[];
}

export function Calculator({ inputs, calculate }: CalculatorProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [results, setResults] = useState<CalculatorResult[] | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    inputs.forEach(input => {
      if (input.required && (!values[input.name] || values[input.name] === '')) {
        newErrors[input.name] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleCalculate = useCallback(() => {
    if (!validate()) return;

    const numericValues: Record<string, number> = {};
    inputs.forEach(input => {
      const val = parseFloat(values[input.name] || '0');
      numericValues[input.name] = isNaN(val) ? 0 : val;
    });

    const calculatedResults = calculate(numericValues);
    setResults(calculatedResults);
  }, [values, inputs, calculate]);

  const handleReset = () => {
    setValues({});
    setResults(null);
    setErrors({});
  };

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {inputs.map((input) => (
            <div key={input.name} className="space-y-2">
              <label 
                htmlFor={input.name}
                className="block text-sm font-medium text-foreground"
              >
                {input.label}
                {input.required && <span className="text-destructive ml-1">*</span>}
              </label>
              
              {input.type === 'select' ? (
                <select
                  id={input.name}
                  value={values[input.name] || ''}
                  onChange={(e) => handleInputChange(input.name, e.target.value)}
                  className="calculator-input"
                >
                  <option value="">Select...</option>
                  {input.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="relative">
                  {(input.type === 'currency' || input.type === 'percent') && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {input.type === 'currency' ? '$' : ''}
                    </span>
                  )}
                  <input
                    id={input.name}
                    type="number"
                    value={values[input.name] || ''}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                    placeholder={input.placeholder}
                    min={input.min}
                    max={input.max}
                    step={input.step || (input.type === 'percent' ? 0.01 : 1)}
                    className={`calculator-input ${input.type === 'currency' || input.type === 'percent' ? 'pl-8' : ''} ${input.type === 'percent' ? 'pr-8' : ''}`}
                  />
                  {input.type === 'percent' && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      %
                    </span>
                  )}
                </div>
              )}
              
              {input.hint && (
                <p className="text-xs text-muted-foreground">{input.hint}</p>
              )}
              {errors[input.name] && (
                <p className="text-xs text-destructive">{errors[input.name]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleCalculate}
            className="calculator-btn flex-1"
          >
            <CalculatorIcon className="w-4 h-4 mr-2" />
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="calculator-btn-secondary"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </button>
        </div>
      </div>

      {results && (
        <div className="result-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Results</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  result.isPrimary
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white border border-border'
                }`}
              >
                <p className={`text-sm ${result.isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {result.label}
                </p>
                <p className={`text-2xl font-bold ${result.isPrimary ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {result.formatted}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
