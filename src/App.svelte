<svelte:head>
  <title>Private Chef on Lake Como | Luxury Villa Dining</title>
  <meta
    name="description"
    content="Book a hand-selected private chef on Lake Como. Bespoke menus, villa dining, and zero planning for ultra-luxury vacations."
  />
  <meta
    name="keywords"
    content="Lake Como private chef, villa dining experience, luxury catering Italy, chef at home Lake Como, bespoke tasting menu"
  />
  <link rel="canonical" href="https://cheflycomo.com/" />
  <meta property="og:title" content="Private Chef on Lake Como — Chefly Como" />
  <meta
    property="og:description"
    content="No menus, no planning. Share your preferences and we deliver an unforgettable villa dinner with a Lake Como private chef."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cheflycomo.com/" />
  <meta property="og:image" content="https://chefly10.vercel.app/media/hero-img.jpg" />
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1080" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Chefly Como | Private Chef on Lake Como" />
  <meta
    name="twitter:description"
    content="Tailored private chef experiences for Lake Como villas. Seafood, vegan, classic Italian and more."
  />
  <meta name="twitter:image" content="https://chefly10.vercel.app/media/hero-img.jpg" />
  <!-- Preload modern image formats for LCP candidate (hero poster) -->
  <link rel="preload" as="image" href="/media/hero-img.avif" type="image/avif" fetchpriority="high" />
  <link rel="preload" as="image" href="/media/hero-img.webp" type="image/webp" fetchpriority="high" />
  <link rel="preload" as="image" href="/media/hero-img.jpg" type="image/jpeg" fetchpriority="high" />
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

<main class="min-h-screen bg-[#050608] text-[#f7f1e3]">
  <section class="relative min-h-screen w-full overflow-hidden bg-black">
    <video
      class="absolute inset-0 h-full w-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="Cinematic view of a private chef preparing dishes"
      poster={heroPoster}
      width="1920"
      height="1080"
      fetchpriority="high"
    >
      <source src={heroVideoSrc} type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/20"></div>
    <header class="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur" aria-label="Site header">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div class="font-serif text-xl tracking-wide">Chefly Como</div>
        <nav class="hidden gap-8 text-sm uppercase tracking-[0.3em] lg:flex" aria-label="Primary navigation">
          {#each navLinks as link}
            <a class="text-[#f7f1e3]/80 transition hover:text-white" href={link.href}>{link.label}</a>
          {/each}
        </nav>
        <button
          class="hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/20 lg:inline-flex"
          type="button"
          on:click={openForm}
        >
          Book
        </button>
        <button
          class="lg:hidden ml-4 rounded-full border border-white/20 bg-white/10 p-2"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          on:click={() => (navOpen = !navOpen)}
          type="button"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      {#if navOpen}
        <div class="border-t border-white/10 bg-black/80 px-6 py-4 lg:hidden">
          <nav class="flex flex-col gap-4 text-sm uppercase tracking-[0.3em]" aria-label="Mobile navigation">
            {#each navLinks as link}
              <a class="text-[#f7f1e3] hover:text-white" href={link.href} on:click={() => (navOpen = false)}
                >{link.label}</a
              >
            {/each}
            <button
              class="mt-2 rounded-full bg-[#b6893f] px-4 py-3 text-xs font-semibold tracking-wide text-black"
              on:click={openForm}
              type="button"
            >
              Request Your Chef
            </button>
          </nav>
        </div>
      {/if}
    </header>
    <div class="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-24">
      <p class="text-sm uppercase tracking-[0.3em] text-[#d7c39f]/80">Lake Como • Private Dining</p>
      <h1 class="mt-6 max-w-3xl font-serif text-4xl leading-snug text-white drop-shadow md:text-6xl">
        Your Private Chef on Lake Como — Tailored Menus, Effortless Experience
      </h1>
      <p class="mt-6 max-w-xl text-lg text-[#f7f1e3]/90">
        Tell us your preferences. We handle the rest.
      </p>
      <button
        class="mt-10 w-fit rounded-full bg-[#b6893f] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]"
        type="button"
        on:click={openForm}
      >
        Request Your Chef — 60 Seconds
      </button>
    </div>
    <p class="absolute bottom-6 right-8 text-xs uppercase tracking-[0.3em] text-[#f7f1e3]/70">
      Trusted by villa guests from US • UK • DE • CH
    </p>
  </section>

  {#if formOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
      <button
        type="button"
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close form"
        on:click={closeForm}
      ></button>
      <div
        class="relative z-10 w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0e13] p-8 shadow-2xl"
        style="max-height: 90vh;"
      >
        <button
          class="absolute right-4 top-4 rounded-full border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10"
          type="button"
          aria-label="Close form"
          on:click={closeForm}
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
            <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <p class="text-xs uppercase tracking-[0.3em] text-[#d9d2c6]">Ultra-short form</p>
        <h3 class="mt-3 font-serif text-3xl">Arranging your dinner takes a minute.</h3>
        <form class="mt-8 space-y-5" on:submit={handleSubmit}>
          <div class="grid gap-5 md:grid-cols-2">
            <div>
              <label for="request-name" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Full Name</label>
              <input
                type="text"
                id="request-name"
                placeholder="Your name"
                class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
                name="fullName"
              />
            </div>
            <div>
              <label for="request-email" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Email</label>
              <input
                type="email"
                id="request-email"
                placeholder="you@email.com"
                class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
                name="email"
              />
            </div>
          </div>
          <div class="grid gap-5 md:grid-cols-2">
            <div>
              <label for="request-date" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Date</label>
              <input
                type="date"
                id="request-date"
                class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#b6893f] focus:outline-none"
                name="date"
              />
            </div>
            <div>
              <label for="request-location" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
                >Location / Villa Name</label
              >
              <input
                type="text"
                placeholder="Villa del Lago"
                id="request-location"
                class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
                name="location"
              />
            </div>
          </div>
          <div class="grid gap-5 md:grid-cols-2">
            <div>
              <label for="request-guests" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Number of Guests</label>
              <input
                type="number"
                min="2"
                placeholder="8"
                id="request-guests"
                class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
                name="guests"
              />
            </div>
            <div>
              <label for="request-diet" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Dietary Preferences</label>
              <select
                id="request-diet"
                class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#b6893f] focus:outline-none"
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
            <label for="request-requirements" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
              >Dietary Requirements</label
            >
            <select
              id="request-requirements"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#b6893f] focus:outline-none"
              name="requirements"
            >
              <option value="">Select requirement</option>
              {#each dietaryOptions as option}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
          </div>
          <div>
            <label for="request-notes" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Special Requests</label>
            <textarea
              id="request-notes"
              rows="3"
              placeholder="Allergies, wine pairing preferences, service style..."
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
              name="notes"
            ></textarea>
          </div>
          <div>
            <label for="request-whatsapp" class="text-sm uppercase tracking-wide text-[#bcb3a2]">WhatsApp Number</label>
            <input
              type="tel"
              placeholder="+1 415 555 2211"
              id="request-whatsapp"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
              name="whatsapp"
            />
          </div>
          <button
            class="mt-4 w-full rounded-full bg-[#b6893f] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]"
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
        class="mx-auto mt-12 rounded-full bg-[#b6893f] px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]"
        type="button"
        on:click={openForm}
      >
        Plan My Dinner
      </button>
    </svelte:component>
  {:else}
    <div bind:this={howAnchor} class="mx-auto max-w-6xl px-6 py-12 text-center">
      <p class="text-sm text-[#d9d2c6]/80">Learn how it works</p>
      <button
        class="mx-auto mt-6 rounded-full bg-[#b6893f] px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-[#c39242]"
        on:click={() => { void loadHow(); openForm(); }}
      >
        Plan My Dinner
      </button>
    </div>
  {/if}

  <section class="bg-[#06080d] px-6 py-16" aria-labelledby="chef-menu-heading">
    <div class="mx-auto max-w-5xl text-center">
      <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Chef & Menu Studio</p>
      <h2 id="chef-menu-heading" class="mt-4 font-serif text-3xl">Menus written around your guests, not templates</h2>
      <p class="mt-3 text-[#d9d2c6]/80">
        We pair you with chefs trained in Michelin-starred brigades across Milan, Paris, and New York—each adapting the
        menu to dietary requirements, villa kitchens, and wine cellars.
      </p>
    </div>
    <div class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
      <article class="rounded-3xl border border-white/10 bg-white/10 p-6 text-left">
        <h3 class="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Sample Tasting Menu</h3>
        <p class="mt-3 font-serif text-2xl">Lake Como Degustation</p>
        <ul class="mt-4 space-y-2 text-sm text-white/80">
          <li>Crudo of missoltini with Amalfi lemon granita</li>
          <li>Risotto with saffron, burnt butter, and alpine chives</li>
          <li>Line-caught Branzino, chamomile fumet, charred fennel</li>
          <li>Dark chocolate textures with grappa gelato</li>
        </ul>
        <p class="mt-6 text-xs uppercase tracking-[0.3em] text-white/60">Designed for 6–12 guests</p>
      </article>
      <article class="rounded-3xl border border-white/10 bg-white/10 p-6 text-left">
        <h3 class="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Chef Backgrounds</h3>
        <p class="mt-3 font-serif text-2xl">Elite culinary team</p>
        <ul class="mt-4 space-y-2 text-sm text-white/80">
          <li>Former sous-chefs at Il Sereno, Armani Ristorante, and Osteria Francescana partner kitchens</li>
          <li>Trilingual service standards familiar with UHNW villa etiquette</li>
          <li>Comfortable with kosher kitchens, vegan tasting menus, and last-minute headcounts</li>
          <li>Secure NDAs and private travel arrangements available</li>
        </ul>
        <p class="mt-6 text-xs uppercase tracking-[0.3em] text-white/60">Bookable for one-offs or weeklong stays</p>
      </article>
      <article class="rounded-3xl border border-white/10 bg-white/10 p-6 text-left">
        <h3 class="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Formats We Run</h3>
        <p class="mt-3 font-serif text-2xl">Choose your experience</p>
        <ul class="mt-4 space-y-2 text-sm text-white/80">
          <li>Aperitivo cruises with canapés + champagne service</li>
          <li>Family-style brunches with kids’ tasting menu</li>
          <li>Seven-course wine-paired dinners with sommeliers</li>
          <li>Chef-led cooking classes and market tours</li>
        </ul>
        <p class="mt-6 text-xs uppercase tracking-[0.3em] text-white/60">All menus customized pre-arrival</p>
      </article>
    </div>
    <div class="mt-12 text-center">
      <button
        class="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
        type="button"
        on:click={openForm}
      >
        Request Menu Concepts
      </button>
    </div>
  </section>

  <section class="bg-[#090b0f] px-6 py-16" aria-labelledby="testimonials-heading">
    <div class="mx-auto max-w-4xl text-center">
      <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Testimonials</p>
      <h2 id="testimonials-heading" class="mt-4 font-serif text-3xl">Guests who hosted unforgettable dinners</h2>
      <p class="mt-2 text-[#d9d2c6]/80">
        “The chef treated our villa like a Michelin restaurant. Every course was a story about Lake Como.” — Isabella P.
      </p>
    </div>
    <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
      <blockquote class="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-[#d9d2c6]/90">
        <p>
          “Chefly managed a 12-person anniversary dinner with zero brief. The sommelier pairings blew us away.”
        </p>
        <footer class="mt-4 text-xs uppercase tracking-[0.3em] text-white/70">Villa Cipressi • US Guests</footer>
      </blockquote>
      <blockquote class="rounded-2xl border border-white/10 bg.white/5 p-6 text-sm text-[#d9d2c6]/90">
        <p>
          “They sourced vegan ingredients from Milan the same day. The chef even arranged service staff and plateware.”
        </p>
        <footer class="mt-4 text-xs uppercase tracking-[0.3em] text-white/70">Villa Sofia • UK Guests</footer>
      </blockquote>
      <blockquote class="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-[#d9d2c6]/90">
        <p>
          “Morning markets, custom aperitivo, five courses, dessert trolley. Our hosts felt like movie stars.”
        </p>
        <footer class="mt-4 text-xs uppercase tracking-[0.3em] text-white/70">Villa Carlotta • DE Guests</footer>
      </blockquote>
    </div>
  </section>

  <section id="contact" class="px-6 pb-10 text-center text-sm text-[#bcb3a2]">
    <p>Over 120 villa dinners organized last season.</p>
    <p class="mt-1">Rated 4.9/5 by international guests.</p>
  </section>

  {#if FaqSection}
    <svelte:component this={FaqSection} {faqs} />
  {:else}
    <div bind:this={faqAnchor} class="mx-auto max-w-6xl px-6 py-12 text-center">
      <p class="text-sm text-[#d9d2c6]/80">Frequently asked questions</p>
    </div>
  {/if}

  <footer class="border-t border-white/10 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#bcb3a2]">
    <p>Curated Private Chefs for Lake Como</p>
    <div class="mt-3 space-x-6 text-[0.7rem] normal-case tracking-[0.2em]">
      <a href="/privacy" class="hover:text-white">Privacy</a>
      <span class="text-white/30">•</span>
      <a href="/terms" class="hover:text-white">Terms</a>
    </div>
  </footer>
</main>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
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
  const _timers: number[] = [];

  // lazy-load helpers: preload (warm) and actual load
  const preloadServices = () => { void import('./components/ServicesSection.svelte'); };
  const loadServices = async () => {
    if (!ServicesSection) {
      ServicesSection = (await import('./components/ServicesSection.svelte')).default;
    }
  };

  const preloadGallery = () => { void import('./components/GallerySection.svelte'); };
  const loadGallery = async () => {
    if (!GallerySection) {
      GallerySection = (await import('./components/GallerySection.svelte')).default;
    }
  };

  const preloadHow = () => { void import('./components/HowItWorksSection.svelte'); };
  const loadHow = async () => {
    if (!HowItWorksSection) {
      HowItWorksSection = (await import('./components/HowItWorksSection.svelte')).default;
    }
  };

  const preloadFaq = () => { void import('./components/FaqSection.svelte'); };
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
          preloadServices();
          void loadServices();
          observer.unobserve(el);
        } else if (el === galleryAnchor) {
          preloadGallery();
          void loadGallery();
          observer.unobserve(el);
        } else if (el === howAnchor) {
          preloadHow();
          void loadHow();
          observer.unobserve(el);
        } else if (el === faqAnchor) {
          preloadFaq();
          void loadFaq();
          observer.unobserve(el);
        }
      }
    }, { root: null, rootMargin: '300px', threshold: 0.05 });

    if (servicesAnchor) observer.observe(servicesAnchor);
    if (galleryAnchor) observer.observe(galleryAnchor);
    if (howAnchor) observer.observe(howAnchor);
    if (faqAnchor) observer.observe(faqAnchor);

    // Fallback timers: if IntersectionObserver isn't supported or the user never scrolls,
    // load critical sections after a short delay so content is visible without clicking.
    _timers.push(window.setTimeout(() => { if (!ServicesSection) { preloadServices(); void loadServices(); } }, 2500));
    _timers.push(window.setTimeout(() => { if (!GallerySection) { preloadGallery(); void loadGallery(); } }, 3200));
    _timers.push(window.setTimeout(() => { if (!HowItWorksSection) { preloadHow(); void loadHow(); } }, 4200));
    _timers.push(window.setTimeout(() => { if (!FaqSection) { preloadFaq(); void loadFaq(); } }, 5000));

    return () => {
      observer.disconnect();
      for (const t of _timers) clearTimeout(t);
    };
  });

  onDestroy(() => {
    // ensure timers cleared if component unmounts unexpectedly
    for (const t of _timers) clearTimeout(t);
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


