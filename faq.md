<style>
  .faq-page {
    max-width: 900px;
    margin: 4rem auto;
    padding: 0 1.5rem 4rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #0f172a;
  }

  .faq-heading {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .faq-heading h1 {
    font-size: clamp(2.1rem, 3vw, 2.6rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 0.75rem;
    color: #020617;
  }

  .faq-heading p {
    font-size: 0.98rem;
    max-width: 520px;
    margin: 0 auto;
    color: #64748b;
  }

  .faq-container {
    margin-top: 2rem;
    background: #0f172a;
    border-radius: 1.25rem;
    padding: 2.25rem 1.75rem;
    box-shadow:
      0 18px 45px rgba(15, 23, 42, 0.45),
      0 0 0 1px rgba(148, 163, 184, 0.08);
  }

  @media (min-width: 768px) {
    .faq-container {
      padding: 2.75rem 2.5rem;
    }
  }

  .faq-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .faq-item {
    border-radius: 0.9rem;
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(148, 163, 184, 0.25);
    margin-bottom: 0.9rem;
    overflow: hidden;
    transition:
      border-color 160ms ease,
      background 160ms ease,
      box-shadow 160ms ease,
      transform 140ms ease;
  }

  .faq-item:last-child {
    margin-bottom: 0;
  }

  .faq-item:hover {
    border-color: #0ea5e9;
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.65);
    transform: translateY(-1px);
  }

  .faq-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem 1.1rem 1rem 1.15rem;
    gap: 1rem;
    user-select: none;
  }

  .faq-question {
    font-size: 0.98rem;
    font-weight: 600;
    color: #e5e7eb;
  }

  .faq-arrow {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.6);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
      transform 160ms ease,
      background 160ms ease,
      border-color 160ms ease;
  }

  .faq-arrow svg {
    width: 0.7rem;
    height: 0.7rem;
    fill: none;
    stroke: #e5e7eb;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: center;
    transition: transform 160ms ease;
  }

  .faq-item:hover .faq-arrow {
    background: rgba(15, 23, 42, 0.9);
    border-color: #0ea5e9;
  }

  .faq-answer {
    max-height: 0;
    opacity: 0;
    padding: 0 1.15rem;
    color: #cbd5f5;
    font-size: 0.92rem;
    line-height: 1.6;
    transition:
      max-height 200ms ease,
      opacity 180ms ease,
      padding-bottom 200ms ease;
  }

  .faq-answer p {
    margin: 0 0 0.45rem;
  }

  .faq-answer p:last-child {
    margin-bottom: 0.1rem;
  }

  /* Show answer on hover OR when opened with click */
  .faq-item:hover .faq-answer,
  .faq-item.open .faq-answer {
    max-height: 400px;
    opacity: 1;
    padding-bottom: 0.9rem;
  }

  .faq-item.open .faq-arrow,
  .faq-item:hover .faq-arrow {
    background: rgba(15, 23, 42, 0.9);
    border-color: #0ea5e9;
  }

  .faq-item.open .faq-arrow svg,
  .faq-item:hover .faq-arrow svg {
    transform: rotate(180deg);
  }

  .faq-footer-note {
    margin-top: 1.75rem;
    font-size: 0.9rem;
    color: #94a3b8;
    text-align: center;
  }
</style>

<div class="faq-page">
  <div class="faq-heading">
    <h1>Frequently Asked Questions</h1>
    <p>Clear, practical answers about how SimplyFound helps you get a professional web presence without unnecessary complexity.</p>
  </div>

  <div class="faq-container">
    <ul class="faq-list">
      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            1. What exactly does SimplyFound build and how is it different from a traditional web design agency?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>SimplyFound builds focused, conversion‑ready landing page websites that help small businesses get online quickly and professionally.</p>
          <p>We are not a traditional design agency that spends months on complex, fully custom builds. Our priority is clarity: people must immediately understand what you do and how to contact you.</p>
          <p>If you need something highly custom or complex, we can help with that too, but our core service is getting your business online properly without unnecessary technical or design overhead.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            2. Why shouldn’t I just build my own website on WordPress, Wix, or another DIY platform?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>You absolutely can build your own website, and many people do.</p>
          <p>The real challenge usually appears later. WordPress sites in particular rely heavily on plugins that all need to stay compatible and updated. Updates can conflict, plugins can be abandoned, and security issues can appear if maintenance slips.</p>
          <p>Most business owners don’t have the time or appetite to manage that ongoing risk. With SimplyFound, you are not left to wrestle with plugins or infrastructure—we handle the technical side so you can focus on running your business.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            3. Who is SimplyFound best suited for?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>We are a strong fit for small to medium businesses that want a professional, credible online presence without getting stuck in technical decisions.</p>
          <p>Service businesses, tradespeople, consultants, specialists, and local companies are ideal. If your goal is to be visible online, build trust, and make it effortless for people to contact you, we are aligned.</p>
          <p>If you need a complex e‑commerce platform or custom web software, we can still help—but we’ll treat that as a separate, clearly scoped project.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            4. How quickly can my business be online?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>Once we have your content and final approval, your website can typically go live within a few days.</p>
          <p>Because we follow a streamlined build process, there is no drawn‑out, open‑ended design phase unless you specifically request it.</p>
          <p>Speed matters—especially when you’re trying to establish credibility and start turning visitors into enquiries.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            5. What do you need from me to get started?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>We keep your side of the process simple.</p>
          <p>We’ll ask for your basic business details, a short description of your services, your logo (if you have one), and any images you’d like to feature. If you already have a domain, we’ll work with that; if not, we’ll help you secure one.</p>
          <p>If you’re unsure how to word things, we guide you through that so your message is clear and confident.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            6. Do you handle hosting, domains, and security updates?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>Yes. We take care of the full technical stack for you.</p>
          <p>We secure your domain, manage the hosting environment, and handle security and technical updates behind the scenes.</p>
          <p>For standard entry‑level websites, hosting is included—you pay a once‑off build fee and an annual domain renewal. If your site needs more resources or advanced functionality, we’ll outline any additional hosting costs upfront.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            7. What happens if my website goes down?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>Because we manage your hosting and infrastructure, we can step in quickly if something needs attention.</p>
          <p>With DIY platforms, diagnosis and troubleshooting usually land on your shoulders. With SimplyFound, that responsibility sits with us.</p>
          <p>Your website is actively managed, not a “build it and disappear” project.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            8. Will I need to worry about plugins, updates, or technical maintenance?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>No—that is exactly what we remove from your to‑do list.</p>
          <p>One of the biggest pain points with many WordPress setups is plugin maintenance. Plugins can become outdated, unsupported, or break when something else changes.</p>
          <p>We build in a way that reduces reliance on fragile plugin stacks and unnecessary add‑ons. Ongoing technical care and maintenance are handled by us.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            9. How much does a website with SimplyFound cost?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>Every build includes a once‑off website creation fee plus an annual domain renewal fee.</p>
          <p>For our standard websites, hosting is included—there are no separate monthly hosting charges at this level.</p>
          <p>If you need something more advanced, we’ll scope and quote it clearly so you always know what you’re paying for and why.</p>
        </div>
      </li>

      <li class="faq-item">
        <button class="faq-trigger" type="button">
          <span class="faq-question">
            10. Can you build a fully custom or complex website if I need one?
          </span>
          <span class="faq-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>Yes, we can.</p>
          <p>Our core focus is streamlined, effective landing page websites because that’s what most small businesses actually need to start winning work online.</p>
          <p>If you require custom design, integrations, or more advanced systems, we can scope and quote that as a separate project—always with the same mindset: keep it practical, keep it stable, and keep it professionally managed.</p>
        </div>
      </li>
    </ul>

    <div class="faq-footer-note">
      Still unsure about something specific? Reach out and we’ll give you a direct, practical answer for your situation.
    </div>
  </div>
</div>

<script>
  (function () {
    const items = document.querySelectorAll(".faq-item");

    items.forEach((item) => {
      const trigger = item.querySelector(".faq-trigger");
      if (!trigger) return;

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Close all items first so only one is open at a time
        items.forEach((i) => i.classList.remove("open"));

        // If it was not open before, open it
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    });
  })();
</script>