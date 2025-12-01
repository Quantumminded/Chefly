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
        <div class="aspect-square rounded-2xl border border-white/10 bg-white/5">
          <ResponsiveImage 
          src={firstImage[0].src} 
          alt={firstImage[0].alt} 
          srcset={firstImage[0].srcset}
          loading="lazy"
          decoding="async"
          
          class="h-full w-full object-cover" 
          />
        </div>
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
        <div class="order-1 aspect-square rounded-2xl border border-white/10 bg-white/5 md:order-1">
        
        <ResponsiveImage 
          src={secondImage[0].src} 
          alt={secondImage[0].alt} 
          srcset={secondImage[0].srcset}
          loading="lazy"
          decoding="async"
          
          class="h-full w-full object-cover" 
        />
        </div>
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
        <div class="aspect-square rounded-2xl border border-white/10 bg-white/5">
        <ResponsiveImage 
          src={thirdImage[0].src} 
          alt={thirdImage[0].alt} 
          srcset={thirdImage[0].srcset}
          loading="lazy"
          decoding="async"
          
          class="h-full w-full object-cover" 
        />
        </div>
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
        <div class="order-1 aspect-square rounded-2xl border border-white/10 bg-white/5 md:order-1">
        <ResponsiveImage 
          src={fourthImage[0].src} 
          alt={fourthImage[0].alt} 
          srcset={fourthImage[0].srcset}
          loading="lazy"
          decoding="async"
          
          class="h-full w-full object-cover" 
        />
        </div>
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
        <div class="aspect-square rounded-2xl border border-white/10 bg-white/5">
        <ResponsiveImage 
          src={fifthImage[0].src} 
          alt={fifthImage[0].alt} 
          srcset={fifthImage[0].srcset}
          loading="lazy"
          decoding="async"
          
          class="h-full w-full object-cover" 
        />
        </div>
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
</main>

<script lang="ts">
  import { heroVideoSrc, siteUrl, navLinksSecondary, heroPosterPath, dietaryOptions, } from '../../lib/content';
  import ResponsiveImage from '../../components/ResponsiveImage.svelte';

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

  const firstImage = [
    {  
        src: '/media/img04.jpg',
        alt: 'Chef serving a dish with fish and vegetables',
        caption: 'Privat chef service for events',
        srcset: {
          avif: '/media/img04.avif',
          webp: '/media/img04.webp',
          jpg: '/media/img04.jpg'
        }
    }
  ];

  const secondImage = [
    {  
      src: '/media/img05.jpg',
      alt: 'Chef serving bruschetta with meet and vegetables',
      caption: 'Privat chef serving bruschetta',
      srcset: {
        avif: '/media/img05.avif',
        webp: '/media/img05.webp',
        jpg: '/media/img05.jpg'
      }
    }
  ];
  const thirdImage = [
    {  
      src: '/media/img06.jpg',
      alt: 'Apetaizers with vegetables and cheese and flowers',
      caption: 'apetizers with vegetables and cheese and flowers',
      srcset: {
        avif: '/media/img06.avif',
        webp: '/media/img06.webp',
        jpg: '/media/img06.jpg'
      }
    }
  ];
  const fourthImage = [
    {  
      src: '/media/img07.jpg',
      alt: 'Chef serving a aubergine and tomatoes dish',
      caption: 'Privat chef service a veggy dinner',
      srcset: {
        avif: '/media/img07.avif',
        webp: '/media/img07.webp',
        jpg: '/media/img07.jpg' 
      }
    }
  ];

  const fifthImage = [
    {  
      src: '/media/img08.jpg',
      alt: 'Seefood spaghetti dish with salat and wine',
      caption: 'Seefood spaghetti dish with salat and wine',
      srcset: {
        avif: '/media/img08.avif',
        webp: '/media/img08.webp',
        jpg: '/media/img08.jpg' 
      }     
    }
  ];

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
