<svelte:head>
  <title>Private Chef in Como | Luxury Villa Dining Experience</title>
  <meta
    name="description"
    content="Discover Chefly Como: hand-selected private chefs for Lake Como villas. Tailored menus, zero planning, premium dining at home."
  />
  <link rel="canonical" href="https://cheflycomo.com/private-chef-como" />
  <meta property="og:title" content="Private Chef in Como | Luxury Villa Dining Experience" />
  <meta
    property="og:description"
    content="Discover Chefly Como: hand-selected private chefs for Lake Como villas. Tailored menus, zero planning, premium dining at home."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cheflycomo.com/private-chef-como" />
  <meta property="og:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1080" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Private Chef in Como | Luxury Villa Dining Experience" />
  <meta
    name="twitter:description"
    content="Hand-selected private chefs, tailored menus, zero planning. Premium villa dining on Lake Como."
  />
  <meta name="twitter:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  <script type="application/ld+json">
    {JSON.stringify(jsonLd)}
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
    >
      <source src={heroVideoSrc} type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/20"></div>
    <header class="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur" aria-label="Site header">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div class="font-serif text-xl tracking-wide">Chefly</div>
        <nav class="hidden gap-8 text-sm uppercase tracking-[0.3em] lg:flex" aria-label="Primary navigation">
          {#each navLinksSecondary as link}
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
            {#each navLinksSecondary as link}
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
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Lake Como Private Dining</p>
        <h1 class="mt-6 max-w-3xl font-serif text-4xl leading-snug text-white drop-shadow md:text-6xl">
          Private Chef in Como
        </h1>
        <p class="mt-6 max-w-xl text-lg text-[#f7f1e3]/90">
          Michelin-trained chefs, bespoke menus, and flawless service at your Lake Como villa. No planning. Pure luxury.
        </p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/#contact"
            class="rounded-full bg-[#d4af37] px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#e5c158]"
          >
            Book Your Private Chef
          </a>
          <a
            href="/#contact"
            class="rounded-full border border-[#d4af37] px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-[#d4af37] transition hover:bg-[#d4af37]/10"
          >
            Request a Custom Menu
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="bg-[#06080d] px-6 py-20" aria-labelledby="services-heading">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">What We Offer</p>
        <h2 id="services-heading" class="mt-4 font-serif text-4xl">Premium Private Chef Services</h2>
        <p class="mt-3 text-[#d9d2c6]/80">
          From intimate dinners to multi-day culinary experiences, we curate every detail.
        </p>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-3">
        <article class="rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
          <h3 class="font-serif text-2xl text-[#d4af37]">Zero Planning</h3>
          <p class="mt-3 text-[#d9d2c6]/90">
            Share your preferences. We handle menu design, sourcing, staffing, and setup. Arrive to a fully staffed kitchen.
          </p>
          <ul class="mt-6 space-y-2 text-sm text-white/70">
            <li>• Dietary accommodations (vegan, kosher, halal, allergies)</li>
            <li>• Wine & beverage pairing</li>
            <li>• Full mise en place & cleanup</li>
          </ul>
        </article>

        <article class="rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
          <h3 class="font-serif text-2xl text-[#d4af37]">Elite Chef Selection</h3>
          <p class="mt-3 text-[#d9d2c6]/90">
            Vetted chefs from Michelin-starred kitchens in Milan, Paris, and New York. Multilingual service standards.
          </p>
          <ul class="mt-6 space-y-2 text-sm text-white/70">
            <li>• Former sous-chefs & head cooks</li>
            <li>• UHNW villa experience</li>
            <li>• Secure background checks & NDAs</li>
          </ul>
        </article>

        <article class="rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
          <h3 class="font-serif text-2xl text-[#d4af37]">Tailored Formats</h3>
          <p class="mt-3 text-[#d9d2c6]/90">
            Choose your experience: aperitivo cruises, tasting dinners, family brunches, or multi-course wine pairings.
          </p>
          <ul class="mt-6 space-y-2 text-sm text-white/70">
            <li>• 3-course to 7-course menus</li>
            <li>• Sommelier-led wine service</li>
            <li>• Kids' menus & cooking classes</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <!-- Tailored Menus Section -->
  <section class="bg-[#050608] px-6 py-20" aria-labelledby="menus-heading">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Culinary Excellence</p>
        <h2 id="menus-heading" class="mt-4 font-serif text-4xl">Menus Designed Around You</h2>
        <p class="mt-3 text-[#d9d2c6]/80">
          Every course reflects your preferences, villa kitchen, wine collection, and guest count.
        </p>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-2">
        <article class="rounded-3xl border border-[#d4af37]/30 bg-[#0a0d12] p-8">
          <h3 class="font-serif text-2xl text-[#d4af37]">Lake Como Signature Menu</h3>
          <p class="mt-2 text-sm text-[#d9d2c6]/70">Seasonal tasting experience</p>
          <ul class="mt-6 space-y-3 text-sm text-[#f7f1e3]">
            <li>Crudo of missoltini with Amalfi lemon granita</li>
            <li>Risotto with saffron, burnt butter, alpine chives</li>
            <li>Line-caught branzino, chamomile fumet, charred fennel</li>
            <li>Dark chocolate textures with grappa gelato</li>
          </ul>
          <p class="mt-6 text-xs uppercase tracking-[0.2em] text-white/60">Designed for 6–12 guests</p>
        </article>

        <article class="rounded-3xl border border-[#d4af37]/30 bg-[#0a0d12] p-8">
          <h3 class="font-serif text-2xl text-[#d4af37]">Custom Creations</h3>
          <p class="mt-2 text-sm text-[#d9d2c6]/70">Your vision, our expertise</p>
          <ul class="mt-6 space-y-3 text-sm text-[#f7f1e3]">
            <li>Vegan fine dining tasting menus</li>
            <li>Wine-paired 7-course degustations</li>
            <li>Family-style Italian comfort classics</li>
            <li>Breakfast, lunch, or aperitivo concepts</li>
          </ul>
          <p class="mt-6 text-xs uppercase tracking-[0.2em] text-white/60">Pre-arrival menu planning</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="bg-[#06080d] px-6 py-20" aria-labelledby="experience-heading">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Why Choose Chefly</p>
        <h2 id="experience-heading" class="mt-4 font-serif text-4xl">The Chefly Experience</h2>
      </div>

      <div class="mt-14 space-y-12">
        <div class="flex flex-col gap-8 md:flex-row md:items-center">
          <div class="md:w-1/2">
            <h3 class="font-serif text-2xl text-[#d4af37]">Trusted by International Guests</h3>
            <p class="mt-4 text-[#d9d2c6]/90">
              Over 120 villa dinners organized last season. Rated 4.9/5 by guests from the US, UK, Germany, and Switzerland.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-white/80">
              <li>✓ Same-day confirmations in peak season</li>
              <li>✓ Full coordination with villa concierge</li>
              <li>✓ Secure NDAs and private arrangements</li>
              <li>✓ 24/7 support throughout your event</li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <div class="aspect-square rounded-2xl border border-white/10 bg-white/5">
              <ResponsiveImage 
              src={privatchefImageSecond[0].src} 
              alt={privatchefImageSecond[0].alt} 
              srcset={privatchefImageSecond[0].srcset}
              loading="lazy"
              decoding="async"
              
              class="h-full w-full object-cover" 
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-8 md:flex-row-reverse md:items-center">
          <div class="md:w-1/2">
            <h3 class="font-serif text-2xl text-[#d4af37]">Seamless Villa Integration</h3>
            <p class="mt-4 text-[#d9d2c6]/90">
              Our chefs arrive with everything needed: premium ingredients, proper equipment rentals, service staff, and full cleanup.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-white/80">
              <li>✓ Kitchen assessment & optimization</li>
              <li>✓ Equipment & dishware rentals arranged</li>
              <li>✓ Sommelier service available</li>
              <li>✓ Photography & documentation optional</li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <div class="aspect-square rounded-2xl border border-white/10 bg-white/5">
              <ResponsiveImage 
              src={privatchefImageFirst[0].src} 
              alt={privatchefImageFirst[0].alt} 
              srcset={privatchefImageFirst[0].srcset}
              loading="lazy"
              decoding="async"
              
              class="h-full w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Service Area Section -->
  <section class="bg-[#06080d] px-6 py-20" aria-labelledby="service-area-heading">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Serving Lake Como</p>
        <h2 id="service-area-heading" class="mt-4 font-serif text-4xl">Where We Operate</h2>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="font-serif text-2xl text-[#d4af37]">Lake Como Towns</h3>
          <p class="mt-4 text-[#d9d2c6]/90">
            We serve all major Lake Como villas and resorts, including:
          </p>
          <ul class="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
            <li>• Como</li>
            <li>• Bellagio</li>
            <li>• Menaggio</li>
            <li>• Varenna</li>
            <li>• Tremezzo</li>
            <li>• Cadenabbia</li>
            <li>• Argegno</li>
            <li>• Lecco</li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-2xl text-[#d4af37]">Coverage</h3>
          <p class="mt-4 text-[#d9d2c6]/90">
            Lake Como basin from Como city center to the northern Alps border.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-white/80">
            <li>• 30-minute average response time</li>
            <li>• Local sourcing from Como & Milan markets</li>
            <li>• Coordination with villa concierges</li>
            <li>• Available year-round</li>
          </ul>
          <p class="mt-6 text-xs text-[#d4af37]">
            Special arrangements for extended stays, multi-villa bookings, and international coordination.
          </p>
        </div>
      </div>

      <div class="mt-14 rounded-3xl border border-[#d4af37]/30 bg-[#0a0d12] p-12 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Ready to book?</p>
        <h3 class="mt-4 font-serif text-3xl text-white">Start Planning Your Dinner</h3>
        <p class="mt-3 text-[#d9d2c6]/80">
          Share your preferences in under 60 seconds. We'll confirm availability and chef match within hours.
        </p>
        <a
          href="/#contact"
          class="mt-8 inline-block rounded-full bg-[#d4af37] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#e5c158]"
        >
          Request Your Chef Now
        </a>
      </div>
    </div>
  </section>

  <!-- Trust Section -->
  <section class="bg-[#050608] px-6 py-20">
    <div class="mx-auto max-w-4xl text-center">
      <p class="font-serif text-2xl text-white">Trusted by 500+ villa guests across Europe</p>
      <div class="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <div>
          <p class="font-serif text-3xl text-[#d4af37]">4.9/5</p>
          <p class="text-sm text-[#d9d2c6]/80">Average guest rating</p>
        </div>
        <div class="h-12 w-px bg-white/10"></div>
        <div>
          <p class="font-serif text-3xl text-[#d4af37]">120+</p>
          <p class="text-sm text-[#d9d2c6]/80">Dinners last season</p>
        </div>
        <div class="h-12 w-px bg-white/10"></div>
        <div>
          <p class="font-serif text-3xl text-[#d4af37]">98%</p>
          <p class="text-sm text-[#d9d2c6]/80">Repeat booking rate</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#bcb3a2]">
    <p>Curated Private Chefs for Lake Como</p>
    <div class="mt-4 flex justify-center gap-6">
      <a href="/#privacy" class="hover:text-white transition">Privacy Policy</a>
      <span class="text-white/20">•</span>
      <a href="/#terms" class="hover:text-white transition">Terms of Service</a>
    </div>
  </footer>
</main>

<script lang="ts">
  import {  heroVideoSrc, siteUrl, navLinksSecondary, heroPosterPath } from '../../lib/content';
  import ResponsiveImage from '../../components/ResponsiveImage.svelte';

  let navOpen = false;
  let formOpen = false;
  let submitMessage = '';
  const heroVideo = heroVideoSrc;

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

  const privatchefImageFirst= [
    {  
      src: '/media/img11.jpg',
      alt: 'Chef pooring red sauce on a plate with vegetables and chees',
      caption: 'Chef serving for a privat dinner in como villa',
      srcset: {
        avif: '/media/img11.avif',
        webp: '/media/img11.webp',
        jpg: '/media/img11.jpg' 
      }     
    }
  ];

  const privatchefImageSecond= [
    {  
      src: '/media/img12.jpg',
      alt: 'Fine dinner with wine and scallops on a plate',
      caption: 'Plate of scallops with wine and vegetables',
      srcset: {
        avif: '/media/img12.avif',
        webp: '/media/img12.webp',
        jpg: '/media/img12.jpg' 
      }
    }
  ];

  let jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Chefly Como',
    description:
      'Hand-selected private chefs for Lake Como villas. Tailored menus, zero planning, premium dining at home.',
    url: 'https://cheflycomo.com/private-chef-como',
    image: 'https://chefly10.vercel.app/media/hero-img.webp',
    telephone: '+39 031 000 0000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Regina 28',
      addressLocality: 'Como',
      addressRegion: 'CO',
      postalCode: '22100',
      addressCountry: 'IT'
    },
    areaServed: 'Lake Como',
    priceRange: '$$$',
    serviceType: 'Private Chef Service'
  };
</script>
