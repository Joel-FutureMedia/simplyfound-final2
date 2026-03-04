import { useState } from 'react';

const faqItems = [
  {
    question:
      '1. What exactly does SimplyFound build and how is it different from a traditional web design agency?',
    answer: [
      'SimplyFound builds focused, conversion‑ready landing page websites that help small businesses get online quickly and professionally.',
      'We are not a traditional design agency that spends months on complex, fully custom builds. Our priority is clarity: people must immediately understand what you do and how to contact you.',
      'If you need something highly custom or complex, we can help with that too, but our core service is getting your business online properly without unnecessary technical or design overhead.',
    ],
  },
  {
    question:
      '2. Why shouldn’t I just build my own website on WordPress, Wix, or another DIY platform?',
    answer: [
      'You absolutely can build your own website, and many people do.',
      'The real challenge usually appears later. WordPress sites in particular rely heavily on plugins that all need to stay compatible and updated. Updates can conflict, plugins can be abandoned, and security issues can appear if maintenance slips.',
      'Most business owners don’t have the time or appetite to manage that ongoing risk. With SimplyFound, you are not left to wrestle with plugins or infrastructure—we handle the technical side so you can focus on running your business.',
    ],
  },
  {
    question: '3. Who is SimplyFound best suited for?',
    answer: [
      'We are a strong fit for small to medium businesses that want a professional, credible online presence without getting stuck in technical decisions.',
      'Service businesses, tradespeople, consultants, specialists, and local companies are ideal. If your goal is to be visible online, build trust, and make it effortless for people to contact you, we are aligned.',
      'If you need a complex e‑commerce platform or custom web software, we can still help—but we’ll treat that as a separate, clearly scoped project.',
    ],
  },
  {
    question: '4. How quickly can my business be online?',
    answer: [
      'Once we have your content and final approval, your website can typically go live within a few days.',
      'Because we follow a streamlined build process, there is no drawn‑out, open‑ended design phase unless you specifically request it.',
      'Speed matters—especially when you’re trying to establish credibility and start turning visitors into enquiries.',
    ],
  },
  {
    question: '5. What do you need from me to get started?',
    answer: [
      'We keep your side of the process simple.',
      'We’ll ask for your basic business details, a short description of your services, your logo (if you have one), and any images you’d like to feature. If you already have a domain, we’ll work with that; if not, we’ll help you secure one.',
      'If you’re unsure how to word things, we guide you through that so your message is clear and confident.',
    ],
  },
  {
    question: '6. Do you handle hosting, domains, and security updates?',
    answer: [
      'Yes. We take care of the full technical stack for you.',
      'We secure your domain, manage the hosting environment, and handle security and technical updates behind the scenes.',
      'For standard entry‑level websites, hosting is included—you pay a once‑off build fee and an annual domain renewal. If your site needs more resources or advanced functionality, we’ll outline any additional hosting costs upfront.',
    ],
  },
  {
    question: '7. What happens if my website goes down?',
    answer: [
      'Because we manage your hosting and infrastructure, we can step in quickly if something needs attention.',
      'With DIY platforms, diagnosis and troubleshooting usually land on your shoulders. With SimplyFound, that responsibility sits with us.',
      'Your website is actively managed, not a “build it and disappear” project.',
    ],
  },
  {
    question: '8. Will I need to worry about plugins, updates, or technical maintenance?',
    answer: [
      'No—that is exactly what we remove from your to‑do list.',
      'One of the biggest pain points with many WordPress setups is plugin maintenance. Plugins can become outdated, unsupported, or break when something else changes.',
      'We build in a way that reduces reliance on fragile plugin stacks and unnecessary add‑ons. Ongoing technical care and maintenance are handled by us.',
    ],
  },
  {
    question: '9. How much does a website with SimplyFound cost?',
    answer: [
      'Every build includes a once‑off website creation fee plus an annual domain renewal fee.',
      'For our standard websites, hosting is included—there are no separate monthly hosting charges at this level.',
      'If you need something more advanced, we’ll scope and quote it clearly so you always know what you’re paying for and why.',
    ],
  },
  {
    question: '10. Can you build a fully custom or complex website if I need one?',
    answer: [
      'Yes, we can.',
      'Our core focus is streamlined, effective landing page websites because that’s what most small businesses actually need to start winning work online.',
      'If you require custom design, integrations, or more advanced systems, we can scope and quote that as a separate project—always with the same mindset: keep it practical, keep it stable, and keep it professionally managed.',
    ],
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="section-padding bg-background border-t border-border"
    >
      <div className="container-max mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3"
          >
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground">
            Clear, practical answers about how SimplyFound helps you get a professional web presence
            without unnecessary complexity.
          </p>
        </div>

        <div className="glass-card shadow-[var(--shadow-md)] p-4 md:p-7">
          <ul className="space-y-3">
            {faqItems.map((item, index) => (
              <li
                key={item.question}
                className={`group rounded-xl border bg-card/90 transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 ${
                  openIndex === index ? 'border-primary shadow-md' : 'border-border/70'
                }`}
                onMouseEnter={() => setOpenIndex(index)}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-4 cursor-pointer select-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-left text-sm md:text-base font-semibold text-foreground">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-border inline-flex items-center justify-center bg-secondary/60 transition-colors duration-150 group-hover:border-primary/80">
                    <svg
                      viewBox="0 0 16 16"
                      className={`w-3.5 h-3.5 stroke-primary-foreground transition-transform duration-150 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        fill="none"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden px-4 md:px-5 text-sm md:text-[0.94rem] leading-relaxed text-muted-foreground transition-all duration-200 ease-out ${
                    openIndex === index ? 'max-h-80 opacity-100 pb-3' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div className="py-1">
                    {item.answer.map((paragraph) => (
                      <p key={paragraph} className="mb-2 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col items-center gap-4 text-center">
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
              Still unsure about something specific? Reach out and we’ll give you a direct, practical answer
              for your situation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-accent to-highlight text-highlight-foreground text-sm font-semibold shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

