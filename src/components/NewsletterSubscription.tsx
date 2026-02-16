import { useState } from 'react';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/services/newsletterApi';
import { cn } from '@/lib/utils';

interface NewsletterSubscriptionProps {
  className?: string;
  variant?: 'default' | 'compact' | 'inline';
}

const NewsletterSubscription = ({ className, variant = 'default' }: NewsletterSubscriptionProps) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast({
        title: 'Email Required',
        description: 'Please enter your email address.',
        variant: 'destructive',
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const response = await subscribeToNewsletter(email);
      
      if (response.success) {
        setSuccess(true);
        setEmail('');
        toast({
          title: 'Successfully Subscribed!',
          description: 'Thank you for subscribing to our newsletter.',
        });
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to subscribe. Please try again.';
      toast({
        title: 'Subscription Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={cn('w-full', className)}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading || success}
              className="pl-10 h-11"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={loading || success}
            className="w-full sm:w-auto min-w-[120px]"
            variant="accent"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Subscribing...</span>
              </>
            ) : success ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed!</span>
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={cn('w-full', className)}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="flex-1 w-full">
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-foreground mb-2">
              Subscribe to our newsletter
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="newsletter-email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || success}
                className="pl-10 h-11"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={loading || success}
            className="w-full sm:w-auto min-w-[140px] mt-6 sm:mt-0"
            variant="accent"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Subscribing...
              </>
            ) : success ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Subscribed!
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
      </div>
    );
  }

  // Default variant - Full featured
  return (
    <div className={cn('w-full bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20', className)}>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                Stay Updated
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the latest news and updates delivered to your inbox
              </p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full md:w-auto md:min-w-[400px]">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || success}
                className="pl-10 h-12 text-base"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading || success}
              className="w-full sm:w-auto min-w-[140px] h-12"
              variant="accent"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Subscribing...
                </>
              ) : success ? (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Subscribed!
                </>
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

