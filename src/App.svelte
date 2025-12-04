<svelte:head>
  <title>Maravellion | Private Dining for Luxury Villas on Lake Como</title>
  <meta
    name="description"
    content="Discreet, uncompromising private dining experiences for luxury villas on Lake Como. Closed network of elite chefs available year-round."
  />
  <meta
    name="keywords"
    content="Lake Como private chef, luxury villa dining, UHNW private dining, exclusive chef service Lake Como, private villa experiences"
  />
  <link rel="canonical" href="https://maravellion.com/" />
  <meta property="og:title" content="Maravellion — Private Dining for Luxury Villas" />
  <meta
    property="og:description"
    content="Tell us your desires. Our private network handles the rest. Limited availability year-round."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://maravellion.com/" />
  <meta property="og:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1080" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Maravellion | Private Dining for Luxury Villas" />
  <meta
    name="twitter:description"
    content="Discreet, uncompromising private dining experiences for luxury villas on Lake Como."
  />
  <meta name="twitter:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Source+Sans+3:wght@400;500&display=swap"
    rel="stylesheet"
  />
  <script type="application/ld+json">
    {JSON.stringify(schemaOrg)}
  </script>
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
</svelte:head>

<main class="min-h-screen bg-luxury-bg text-luxury-text">
  <section class="relative min-h-screen w-full overflow-hidden bg-black">
    <video
      class="absolute inset-0 h-full w-full object-cover"
      style="filter: blur(0.5px);"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="Cinematic view of a private chef preparing dishes"
      poster={heroPoster}
      width="1920"
      height="1080"
    >
      <source src={heroVideoSrc} type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/35"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    <div class="absolute inset-0" style="box-shadow: inset 0 0 200px rgba(0,0,0,0.15);"></div>
    
    <header class="relative z-10 border-b border-luxury-divider/50 bg-black/10 backdrop-blur-sm" aria-label="Site header">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:py-6">
        <div class="flex items-center gap-2.5 lg:gap-3">
          <img src="/Logo_Maravellion.png" alt="Maravellion" class="h-7 w-auto lg:h-9" />
          <div class="font-serif text-base lg:text-xl tracking-[0.06em] text-luxury-gold" style="font-weight: 400; letter-spacing: 0.06em;">Maravellion</div>
        </div>
        
        <button
          class="luxury-cta inline-flex items-center justify-center"
          type="button"
          on:click={openForm}
        >
          Book
        </button>
      </div>
    </header>
    <div class="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-32">
      <p class="text-sm uppercase tracking-[0.35em] text-luxury-gold-muted/70">Lake Como • Private Dining</p>
      <h1 class="mt-8 max-w-3xl font-serif text-5xl leading-tight text-white md:text-[56px] md:leading-[1.1]" style="letter-spacing: -0.01em; font-weight: 500;">
        Private Dining for Luxury Villas — Discreet, Uncompromising, Designed Around You.
      </h1>
      <p class="mt-8 max-w-xl text-lg leading-luxury text-luxury-text-muted">
        Tell us your desires. Our private network handles the rest.
      </p>
      <button
        class="mt-12 w-fit luxury-cta"
        type="button"
        on:click={openForm}
      >
        Request Access — 60 Seconds
      </button>
      <p class="mt-5 text-sm leading-relaxed text-luxury-text-muted/70">
        Limited availability year-round — priority access for villa guests.
      </p>
    </div>
  </section>

  {#if formOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
      <button
        type="button"
        class="absolute inset-0 bg-black/90 backdrop-blur-md"
        aria-label="Close form"
        on:click={closeForm}
      ></button>
      <div
        class="relative z-10 w-full max-w-2xl overflow-y-auto luxury-card p-10"
        style="max-height: 90vh; border-radius: 20px;"
      >
        <button
          class="absolute right-6 top-6 rounded-full border border-luxury-divider bg-luxury-dark/50 p-2 text-luxury-text-muted hover:bg-luxury-dark transition-colors"
          type="button"
          aria-label="Close form"
          on:click={closeForm}
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
            <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <p class="text-xs uppercase tracking-[0.35em] text-luxury-gold">Ultra-short form</p>
        <h3 class="mt-4 font-serif text-3xl text-luxury-text" style="letter-spacing: -0.005em; font-weight: 500;">Arranging your dinner takes a minute.</h3>
        <form class="mt-10 space-y-6" on:submit={handleSubmit}>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="request-name" class="text-sm uppercase tracking-wide text-luxury-text-muted">Full Name</label>
              <input
                type="text"
                id="request-name"
                placeholder="Your name"
                class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text placeholder:text-luxury-text-muted/40 focus:border-luxury-gold focus:outline-none transition-colors"
                name="fullName"
              />
            </div>
            <div>
              <label for="request-email" class="text-sm uppercase tracking-wide text-luxury-text-muted">Email</label>
              <input
                type="email"
                id="request-email"
                placeholder="you@email.com"
                class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text placeholder:text-luxury-text-muted/40 focus:border-luxury-gold focus:outline-none transition-colors"
                name="email"
              />
            </div>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="request-date" class="text-sm uppercase tracking-wide text-luxury-text-muted">Date</label>
              <input
                type="date"
                id="request-date"
                class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text focus:border-luxury-gold focus:outline-none transition-colors"
                name="date"
              />
            </div>
            <div>
              <label for="request-location" class="text-sm uppercase tracking-wide text-luxury-text-muted"
                >Location / Villa Name</label
              >
              <input
                type="text"
                placeholder="Villa del Lago"
                id="request-location"
                class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text placeholder:text-luxury-text-muted/40 focus:border-luxury-gold focus:outline-none transition-colors"
                name="location"
              />
            </div>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label for="request-guests" class="text-sm uppercase tracking-wide text-luxury-text-muted">Number of Guests</label>
              <input
                type="number"
                min="2"
                placeholder="8"
                id="request-guests"
                class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text placeholder:text-luxury-text-muted/40 focus:border-luxury-gold focus:outline-none transition-colors"
                name="guests"
              />
            </div>
            <div>
              <label for="request-diet" class="text-sm uppercase tracking-wide text-luxury-text-muted">Dietary Preferences</label>
              <select
                id="request-diet"
                class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text focus:border-luxury-gold focus:outline-none transition-colors"
                name="preference"
              >
                <option>Italian Classic</option>
                <option>Seafood</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Chef Choice</option>
              </select>
            </div>
          </div>
          <div>
            <label for="request-requirements" class="text-sm uppercase tracking-wide text-luxury-text-muted"
              >Dietary Requirements</label
            >
            <select
              id="request-requirements"
              class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text focus:border-luxury-gold focus:outline-none transition-colors"
              name="requirements"
            >
              <option value="">Select requirement</option>
              {#each dietaryOptions as option}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
          </div>
          <div>
            <label for="request-notes" class="text-sm uppercase tracking-wide text-luxury-text-muted">Special Requests</label>
            <textarea
              id="request-notes"
              rows="3"
              placeholder="Allergies, wine pairing preferences, service style..."
              class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text placeholder:text-luxury-text-muted/40 focus:border-luxury-gold focus:outline-none transition-colors"
              name="notes"
            ></textarea>
          </div>
          <div>
            <label for="request-whatsapp" class="text-sm uppercase tracking-wide text-luxury-text-muted">WhatsApp Number</label>
            <input
              type="tel"
              placeholder="+1 415 555 2211"
              id="request-whatsapp"
              class="mt-2 w-full rounded-2xl border border-luxury-divider bg-luxury-dark/40 px-4 py-3 text-sm text-luxury-text placeholder:text-luxury-text-muted/40 focus:border-luxury-gold focus:outline-none transition-colors"
              name="whatsapp"
            />
          </div>
          <button
            class="mt-6 w-full luxury-cta !h-14"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Confirm Request'}
          </button>
          {#if submitMessage}
            <p class="text-center text-sm text-[#69dba1]" aria-live="polite">{submitMessage}</p>
          {/if}
        </form>
      </div>
    </div>
  {/if}

  {#if ServicesSection}
    <svelte:component this={ServicesSection} services={services} />
  {:else}
    <div bind:this={servicesAnchor} class="mx-auto max-w-6xl px-6 py-12 text-center">
      <p class="text-sm text-[#d9d2c6]/80">Loading services…</p>
    </div>
  {/if}

  {#if GallerySection}
    <svelte:component this={GallerySection} images={galleryImages} />
  {:else}
    <div bind:this={galleryAnchor} class="mx-auto max-w-6xl px-6 py-12 text-center">
      <p class="text-sm text-[#d9d2c6]/80">Loading gallery…</p>
    </div>
  {/if}

  {#if HowItWorksSection}
    <svelte:component this={HowItWorksSection} {steps}>
      <button
        slot="cta"
        class="mx-auto mt-16 luxury-cta"
        type="button"
        on:click={openForm}
      >
        Plan My Dinner
      </button>
    </svelte:component>
  {:else}
    <div bind:this={howAnchor} class="mx-auto max-w-6xl px-6 py-12 text-center">
      <p class="text-sm text-luxury-text-muted">Learn how it works</p>
      <button
        class="mx-auto mt-6 luxury-cta"
        on:click={() => { void loadHow(); openForm(); }}
      >
        Plan My Dinner
      </button>
    </div>
  {/if}

  <section class="px-6 py-32 bg-luxury-bg" aria-labelledby="testimonials-heading">
    <div class="section-divider mx-auto mb-20 max-w-md"></div>
    <div class="mx-auto max-w-4xl text-center">
      <p class="text-sm uppercase tracking-[0.4em] text-luxury-gold">Testimonials</p>
      <p class="mt-4 font-serif text-sm uppercase tracking-[0.3em] text-luxury-gold-muted/60">Trusted by international guests arriving from the US, UK, UAE, CH.</p>
      <h2 id="testimonials-heading" class="mt-6 font-serif text-5xl" style="letter-spacing: -0.01em; font-weight: 500;">Guests who hosted unforgettable dinners</h2>
      <p class="mt-6 leading-luxury text-luxury-text-muted italic">
        "The chef treated our villa like a Michelin restaurant. Every course was a story about Lake Como." — Isabella P.
      </p>
    </div>
    <div class="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
      <blockquote class="luxury-card p-8 text-sm leading-luxury fade-in relative" style="background: transparent; border: 1px solid #222;">
        <span class="absolute top-6 left-6 text-4xl text-luxury-gold/40 font-serif">"</span>
        <p class="mt-8 text-luxury-text-muted">
          Maravellion managed a 12-person anniversary dinner with zero brief. The sommelier pairings blew us away.
        </p>
        <footer class="mt-6 text-xs uppercase tracking-[0.25em] text-luxury-text-muted/60">Villa Cipressi — US Guests</footer>
      </blockquote>
      <blockquote class="luxury-card p-8 text-sm leading-luxury fade-in relative" style="background: transparent; border: 1px solid #222;">
        <span class="absolute top-6 left-6 text-4xl text-luxury-gold/40 font-serif">"</span>
        <p class="mt-8 text-luxury-text-muted">
          They sourced vegan ingredients from Milan the same day. The chef even arranged service staff and plateware.
        </p>
        <footer class="mt-6 text-xs uppercase tracking-[0.25em] text-luxury-text-muted/60">Villa Sofia — UK Guests</footer>
      </blockquote>
      <blockquote class="luxury-card p-8 text-sm leading-luxury fade-in relative" style="background: transparent; border: 1px solid #222;">
        <span class="absolute top-6 left-6 text-4xl text-luxury-gold/40 font-serif">"</span>
        <p class="mt-8 text-luxury-text-muted">
          Morning markets, custom aperitivo, five courses, dessert trolley. Our hosts felt like movie stars.
        </p>
        <footer class="mt-6 text-xs uppercase tracking-[0.25em] text-luxury-text-muted/60">Villa Carlotta — DE Guests</footer>
      </blockquote>
    </div>
  </section>

  {#if FaqSection}
    <svelte:component this={FaqSection} {faqs} />
  {:else}
    <div bind:this={faqAnchor} class="mx-auto max-w-6xl px-6 py-12 text-center">
      <p class="text-sm text-luxury-text-muted">Frequently asked questions</p>
    </div>
  {/if}

  <!-- By Invitation Only Section -->
  <section class="px-6 py-20 bg-luxury-darker">
    <div class="section-divider mx-auto mb-16 max-w-md"></div>
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="font-serif text-3xl text-luxury-text" style="letter-spacing: -0.005em; font-weight: 500;">By invitation only</h2>
      <p class="mt-6 leading-luxury text-luxury-text-muted">
        Private network. Limited access. We accept a small number of new clients each season.
      </p>
    </div>
  </section>

  {#if privacyOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
      <button
        type="button"
        class="absolute inset-0 bg-black/90 backdrop-blur-md"
        aria-label="Close privacy policy"
        on:click={closePrivacyModal}
      ></button>
      <div class="relative z-10 w-full max-w-2xl overflow-y-auto luxury-card p-8" style="max-height: 85vh; border-radius: 20px;">
        <button
          class="absolute right-6 top-6 rounded-full border border-luxury-divider bg-luxury-dark/50 p-2 text-luxury-text-muted hover:bg-luxury-dark transition-colors"
          type="button"
          aria-label="Close"
          on:click={closePrivacyModal}
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
            <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <p class="text-xs uppercase tracking-[0.35em] text-luxury-gold">Privacy</p>
        <h3 class="mt-3 font-serif text-3xl text-luxury-text" style="letter-spacing: -0.005em; font-weight: 500;">How we handle your data</h3>
        <div class="mt-6 space-y-4 text-sm leading-luxury text-luxury-text-muted">
          <p>We collect only the details you provide in the request form (name, email, date, villa/location, guests, preferences, notes, WhatsApp).</p>
          <p>We use this information solely to arrange your dining experience. We do not sell data or share it beyond our private chef network strictly for your booking.</p>
          <p>Data is processed in the EU and retained up to 12 months for coordination and accounting, unless you ask us to delete it sooner.</p>
          <p>To request access, correction, or deletion, contact <a href="mailto:privacy@maravellion.com" class="text-luxury-gold hover:opacity-80">privacy@maravellion.com</a>.</p>
        </div>
        <button class="mt-8 luxury-cta w-full !h-12" type="button" on:click={closePrivacyModal}>Close</button>
      </div>
    </div>
  {/if}

  {#if termsOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
      <button
        type="button"
        class="absolute inset-0 bg-black/90 backdrop-blur-md"
        aria-label="Close terms"
        on:click={closeTermsModal}
      ></button>
      <div class="relative z-10 w-full max-w-2xl overflow-y-auto luxury-card p-8" style="max-height: 85vh; border-radius: 20px;">
        <button
          class="absolute right-6 top-6 rounded-full border border-luxury-divider bg-luxury-dark/50 p-2 text-luxury-text-muted hover:bg-luxury-dark transition-colors"
          type="button"
          aria-label="Close"
          on:click={closeTermsModal}
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
            <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <p class="text-xs uppercase tracking-[0.35em] text-luxury-gold">Terms</p>
        <h3 class="mt-3 font-serif text-3xl text-luxury-text" style="letter-spacing: -0.005em; font-weight: 500;">Key service terms</h3>
        <div class="mt-6 space-y-4 text-sm leading-luxury text-luxury-text-muted">
          <p>Maravellion coordinates private dining with a network of independent professionals. Availability is limited and not guaranteed until confirmed.</p>
          <p>Allergies and dietary restrictions must be disclosed in writing when booking. We will advise feasibility; final responsibility remains with the host for undisclosed conditions.</p>
          <p>Typical cancellation: 50% within 7 days; 100% within 72 hours of the event. Any third‑party costs (staff, rentals, special sourcing) may be non‑refundable once committed.</p>
          <p>Liability is limited to fees paid for the specific booking. Governing law: Italy. For questions, contact <a href="mailto:concierge@maravellion.com" class="text-luxury-gold hover:opacity-80">concierge@maravellion.com</a>.</p>
        </div>
        <button class="mt-8 luxury-cta w-full !h-12" type="button" on:click={closeTermsModal}>Close</button>
      </div>
    </div>
  {/if}

  <footer class="border-t border-luxury-divider px-6 py-16 text-center bg-luxury-bg">
    <div class="font-serif text-sm uppercase tracking-[0.35em] text-luxury-gold-muted/80" style="letter-spacing: 0.15em;">
      Discreet. Private. Limited.
    </div>
    <div class="mt-8 space-x-6 text-xs text-luxury-text-muted/60">
      <a href="/privacy" aria-haspopup="dialog" on:click|preventDefault={openPrivacyModal} class="hover:text-luxury-gold transition-colors">Privacy</a>
      <span class="text-luxury-divider">•</span>
      <a href="/terms" aria-haspopup="dialog" on:click|preventDefault={openTermsModal} class="hover:text-luxury-gold transition-colors">Terms</a>
    </div>
  </footer>
</main>

<script lang="ts">
  import { onMount } from 'svelte';
  // Dynamically-imported components (reduce initial bundle)
  let ServicesSection: any = null;
  let GallerySection: any = null;
  let HowItWorksSection: any = null;
  let FaqSection: any = null;

  // DOM anchors used to auto-load sections when they come into view
  let servicesAnchor: HTMLElement | null = null;
  let galleryAnchor: HTMLElement | null = null;
  let howAnchor: HTMLElement | null = null;
  let faqAnchor: HTMLElement | null = null;
  

  // lazy-load helpers: load on demand only
  const loadServices = async () => {
    if (!ServicesSection) {
      ServicesSection = (await import('./components/ServicesSection.svelte')).default;
    }
  };

  const loadGallery = async () => {
    if (!GallerySection) {
      GallerySection = (await import('./components/GallerySection.svelte')).default;
    }
  };

  const loadHow = async () => {
    if (!HowItWorksSection) {
      HowItWorksSection = (await import('./components/HowItWorksSection.svelte')).default;
    }
  };

  const loadFaq = async () => {
    if (!FaqSection) {
      FaqSection = (await import('./components/FaqSection.svelte')).default;
    }
  };

  // Auto-load dynamic sections when they scroll into view (or after a short fallback timeout)
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (el === servicesAnchor) {
          void loadServices();
          observer.unobserve(el);
        } else if (el === galleryAnchor) {
          void loadGallery();
          observer.unobserve(el);
        } else if (el === howAnchor) {
          void loadHow();
          observer.unobserve(el);
        } else if (el === faqAnchor) {
          void loadFaq();
          observer.unobserve(el);
        }
      }
    }, { root: null, rootMargin: '300px', threshold: 0.05 });

    if (servicesAnchor) observer.observe(servicesAnchor);
    if (galleryAnchor) observer.observe(galleryAnchor);
    if (howAnchor) observer.observe(howAnchor);
    if (faqAnchor) observer.observe(faqAnchor);

    return () => {
      observer.disconnect();
    };
  });
  
  
  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (formOpen) formOpen = false;
        if (privacyOpen) privacyOpen = false;
        if (termsOpen) termsOpen = false;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  import {
    siteUrl,
    heroPosterPath,
    heroVideoSrc,
    navLinks,
    services,
    galleryImages,
    steps,
    dietaryOptions,
    faqs
  } from './lib/content';

  let navOpen = false;
  let formOpen = false;
  let submitting = false;
  let submitMessage = '';
  let privacyOpen = false;
  let termsOpen = false;

  const heroPoster = heroPosterPath;
  const heroPosterAbsolute = `${siteUrl}${heroPosterPath}`;
  const heroVideoAbsolute = `${siteUrl}${heroVideoSrc}`;

  const openForm = () => {
    formOpen = true;
    navOpen = false;
  };

  const closeForm = () => {
    formOpen = false;
    submitMessage = '';
  };

  const openPrivacyModal = () => { privacyOpen = true; };
  const closePrivacyModal = () => { privacyOpen = false; };
  const openTermsModal = () => { termsOpen = true; };
  const closeTermsModal = () => { termsOpen = false; };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    submitting = true;
    submitMessage = '';

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload: Record<string, FormDataEntryValue> = {};
    for (const [key, value] of formData.entries()) {
      payload[key] = value;
    }

    const lines = [
      'Richiesta nuova cena 👨‍🍳',
      `Nome: ${payload.fullName || '-'}`,
      `Email: ${payload.email || '-'}`,
      `Data: ${payload.date || '-'}`,
      `Villa: ${payload.location || '-'}`,
      `Ospiti: ${payload.guests || '-'}`,
      `Preferenze: ${payload.preference || '-'}`,
      `Requisiti: ${payload.requirements || '-'}`,
      `WhatsApp Cliente: ${payload.whatsapp || '-'}`,
      `Note: ${payload.notes || '-'}`,
      `Form inviato alle ${new Date().toLocaleString()}`
    ];

    const whatsappNumber = '4917621567199';
    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    submitting = false;
    submitMessage = 'Grazie! Si apre WhatsApp per completare la richiesta.';
    form.reset();
  };


  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': ['FoodEstablishment', 'LocalBusiness'],
    name: 'Chefly Como',
    url: siteUrl,
    image: heroPosterAbsolute,
    description:
      'Chefly Como arranges private chef services for luxury villas around Lake Como, matching travelers with bespoke culinary experiences.',
    servesCuisine: ['Italian', 'Seafood', 'Vegan', 'Fine Dining'],
    priceRange: '$$$',
    telephone: '+39 031 000 0000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Regina 28',
      addressLocality: 'Como',
      addressRegion: 'CO',
      postalCode: '22100',
      addressCountry: 'IT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.8081',
      longitude: '9.0852'
    },
    areaServed: 'Lake Como, Italy',
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Lake Como'
    },
    sameAs: ['https://www.instagram.com/cheflycomo', 'https://www.facebook.com/cheflycomo'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Private chef experiences',
      itemListElement: steps.map((step) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: step.title,
          description: step.copy
        }
      }))
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private chef for Lake Como villa',
          url: siteUrl
        }
      }
    ],
    video: {
      '@type': 'VideoObject',
      name: 'Lake Como private chef experience',
      thumbnailUrl: heroPosterAbsolute,
      contentUrl: heroVideoAbsolute
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
</script>