<svelte:head>
  <title>Private Chef for Events | Corporate, Weddings & Celebrations</title>
  <meta
    name="description"
    content="Elevate your private events with hand-selected chefs. Corporate dinners, romantic celebrations, birthdays, and exclusive at-home dining experiences on Lake Como."
  />
  <link rel="canonical" href="https://cheflycomo.com/events" />
  <meta property="og:title" content="Private Chef for Events | Corporate, Weddings & Celebrations" />
  <meta
    property="og:description"
    content="Elevate your private events with hand-selected chefs. Corporate dinners, romantic celebrations, birthdays, and exclusive at-home dining experiences on Lake Como."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cheflycomo.com/events" />
  <meta property="og:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1080" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Private Chef for Events | Corporate, Weddings & Celebrations" />
  <meta
    name="twitter:description"
    content="Hand-selected chefs for corporate events, romantic dinners, birthdays, and premium at-home dining."
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
        <div class="font-serif text-xl tracking-wide">Chefly Como</div>
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
      <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Private Events</p>
      <h1 id="hero-heading" class="mt-6 max-w-3xl font-serif text-4xl leading-snug text-white drop-shadow md:text-6xl">
        Elevate Every Celebration
      </h1>
      <p class="mt-6 max-w-xl text-lg text-[#f7f1e3]/90">
        Hand-selected private chefs specializing in corporate dinners, romantic occasions, and unforgettable milestone celebrations.
      </p>
      <button
        class="mt-10 w-fit rounded-full bg-[#d4af37] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#e5c158]"
        type="button"
        on:click={openForm}
      >
        Plan Your Event
      </button>
    </div>
  </section>

  <!-- Private Events Section -->
  <section class="border-t border-white/10 px-6 py-20" aria-labelledby="private-events-heading">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 id="private-events-heading" class="font-serif text-4xl text-[#d4af37]">Private Events</h2>
          <p class="mt-4 text-[#d9d2c6]/90">
            Transform intimate gatherings into unforgettable culinary experiences. From villa dinners to lakeside celebrations, our chefs craft bespoke menus tailored to your guest list, venue, and vision.
          </p>
          <p class="mt-3 text-[#d9d2c6]/80">
            Every detail—from wine pairings to service flow—is customized for your specific event, ensuring seamless hospitality.
          </p>
          <button
            class="mt-6 inline-block rounded-full border border-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            type="button"
            on:click={openForm}
          >
            Inquire About Your Event
          </button>
        </div>
        <div class="aspect-square rounded-2xl border border-white/10 bg-white/5"></div>
      </div>
    </div>
  </section>

  <!-- Corporate Events Section -->
  <section class="bg-[#06080d] border-t border-white/10 px-6 py-20" aria-labelledby="corporate-heading">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-2 md:items-center md:flex-row-reverse">
        <div class="order-2 md:order-2">
          <h2 id="corporate-heading" class="font-serif text-4xl text-[#d4af37]">Corporate Events</h2>
          <p class="mt-4 text-[#d9d2c6]/90">
            Impress clients and celebrate team milestones with refined, custom-curated dinners. Our chefs specialize in multi-course corporate experiences, executive lunches, and high-level hospitality for discerning guests.
          </p>
          <p class="mt-3 text-[#d9d2c6]/80">
            Professional service staff, sommelier coordination, and seamless execution ensure your corporate event reflects your brand's sophistication.
          </p>
          <button
            class="mt-6 inline-block rounded-full border border-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            type="button"
            on:click={openForm}
          >
            Plan Your Corporate Dinner
          </button>
        </div>
        <div class="order-1 aspect-square rounded-2xl border border-white/10 bg-white/5 md:order-1"></div>
      </div>
    </div>
  </section>

  <!-- Romantic Dinners Section -->
  <section class="border-t border-white/10 px-6 py-20" aria-labelledby="romantic-heading">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 id="romantic-heading" class="font-serif text-4xl text-[#d4af37]">Romantic Dinners</h2>
          <p class="mt-4 text-[#d9d2c6]/90">
            Create a magical evening for two with an intimate, chef-prepared tasting menu. Candlelit service, romantic plating, and wine pairings curated for romance transform any space into an unforgettable night.
          </p>
          <p class="mt-3 text-[#d9d2c6]/80">
            Perfect for anniversaries, engagements, or simply celebrating your love with culinary artistry.
          </p>
          <button
            class="mt-6 inline-block rounded-full border border-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            type="button"
            on:click={openForm}
          >
            Reserve Your Romantic Dinner
          </button>
        </div>
        <div class="aspect-square rounded-2xl border border-white/10 bg-white/5"></div>
      </div>
    </div>
  </section>

  <!-- Birthdays & Anniversaries Section -->
  <section class="bg-[#06080d] border-t border-white/10 px-6 py-20" aria-labelledby="milestones-heading">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-2 md:items-center md:flex-row-reverse">
        <div class="order-2 md:order-2">
          <h2 id="milestones-heading" class="font-serif text-4xl text-[#d4af37]">Birthdays & Anniversaries</h2>
          <p class="mt-4 text-[#d9d2c6]/90">
            Celebrate life's most precious moments with a personalized dinner experience. Our chefs craft menus honoring milestone birthdays, anniversaries, and special occasions with custom touches and carefully selected wine accompaniments.
          </p>
          <p class="mt-3 text-[#d9d2c6]/80">
            From intimate family gatherings to lavish celebrations with close friends, every detail is orchestrated for joy.
          </p>
          <button
            class="mt-6 inline-block rounded-full border border-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            type="button"
            on:click={openForm}
          >
            Celebrate Your Milestone
          </button>
        </div>
        <div class="order-1 aspect-square rounded-2xl border border-white/10 bg-white/5 md:order-1"></div>
      </div>
    </div>
  </section>

  <!-- At-Home Fine Dining Section -->
  <section class="border-t border-white/10 px-6 py-20" aria-labelledby="fine-dining-heading">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 id="fine-dining-heading" class="font-serif text-4xl text-[#d4af37]">At-Home Fine Dining</h2>
          <p class="mt-4 text-[#d9d2c6]/90">
            Experience Michelin-caliber dining in the comfort of your villa. Our hand-selected chefs deliver restaurant-quality tasting menus with refined plating, sophisticated service, and sommelier pairings—all prepared in your kitchen.
          </p>
          <p class="mt-3 text-[#d9d2c6]/80">
            No reservations needed. No crowds. Just elevated cuisine, impeccable service, and an evening of pure gastronomic delight.
          </p>
          <button
            class="mt-6 inline-block rounded-full border border-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            type="button"
            on:click={openForm}
          >
            Book Your Fine Dining Experience
          </button>
        </div>
        <div class="aspect-square rounded-2xl border border-white/10 bg-white/5"></div>
      </div>
    </div>
  </section>

  <!-- Trust Section -->
  <section class="bg-[#06080d] border-t border-white/10 px-6 py-20">
    <div class="mx-auto max-w-4xl text-center">
      <p class="font-serif text-2xl text-white">Trusted by hundreds of event hosts across Europe</p>
      <div class="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <div>
          <p class="font-serif text-3xl text-[#d4af37]">4.9/5</p>
          <p class="text-sm text-[#d9d2c6]/80">Average event rating</p>
        </div>
        <div class="h-12 w-px bg-white/10"></div>
        <div>
          <p class="font-serif text-3xl text-[#d4af37]">200+</p>
          <p class="text-sm text-[#d9d2c6]/80">Events last year</p>
        </div>
        <div class="h-12 w-px bg-white/10"></div>
        <div>
          <p class="font-serif text-3xl text-[#d4af37]">99%</p>
          <p class="text-sm text-[#d9d2c6]/80">Repeat booking rate</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#bcb3a2]">
    <p>Private Chef Events for Lake Como & Beyond</p>
    <div class="mt-4 flex justify-center gap-6">
      <a href="/#privacy" class="hover:text-white transition">Privacy Policy</a>
      <span class="text-white/20">•</span>
      <a href="/#terms" class="hover:text-white transition">Terms of Service</a>
    </div>
  </footer>
</main>

<script lang="ts">
  import { heroVideoSrc, siteUrl, navLinksSecondary, heroPosterPath } from '../../lib/content';

  let navOpen = false;
  let formOpen = false;
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

  let jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Chefly Events',
    description:
      'Elevate your private events with hand-selected chefs. Corporate dinners, romantic celebrations, birthdays, and exclusive at-home dining experiences on Lake Como.',
    url: 'https://cheflycomo.com/events',
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
    areaServed: 'Lake Como & Surrounding Regions',
    priceRange: '$$$',
    serviceType: 'Private Chef Service for Events'
  };
</script>
