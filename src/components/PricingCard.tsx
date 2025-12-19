import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  delay = 0,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        'reveal relative rounded-2xl p-8 transition-all duration-500 flex flex-col',
        highlighted
          ? 'bg-primary text-primary-foreground scale-105 shadow-2xl z-10'
          : 'bg-card border border-border/50 shadow-card card-hover'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={cn(
            'text-xl font-heading font-bold mb-2',
            highlighted ? 'text-primary-foreground' : 'text-foreground'
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            'text-sm',
            highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span
          className={cn(
            'text-4xl font-heading font-bold',
            highlighted ? 'text-accent' : 'text-foreground'
          )}
        >
          {price}
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                highlighted ? 'bg-accent/20' : 'bg-accent/10'
              )}
            >
              <Check
                className={cn(
                  'w-3 h-3',
                  highlighted ? 'text-accent' : 'text-accent'
                )}
              />
            </div>
            <span
              className={cn(
                'text-sm',
                highlighted
                  ? 'text-primary-foreground/90'
                  : 'text-muted-foreground'
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? 'pricingAccent' : 'pricing'}
        size="lg"
        onClick={() => window.open('https://forms.simplyfound.com.na', '_blank')}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
