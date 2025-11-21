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
  <meta property="og:image" content="https://cheflycomo.com/media/louis-hansel-0sYLBZjgTTw-unsplash.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Chefly Como | Private Chef on Lake Como" />
  <meta
    name="twitter:description"
    content="Tailored private chef experiences for Lake Como villas. Seafood, vegan, classic Italian and more."
  />
  <meta name="twitter:image" content="https://cheflycomo.com/media/louis-hansel-0sYLBZjgTTw-unsplash.jpg" />
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
</svelte:head>

<main class="min-h-screen bg-[#050608] text-[#f7f1e3]">
  <section class="relative min-h-screen w-full overflow-hidden bg-black">
    <video
      class="absolute inset-0 h-full w-full object-cover"
      autoplay
      muted
      loop
      playsinline
      poster="/media/louis-hansel-0sYLBZjgTTw-unsplash.jpg"
    >
      <source src="/media/hero-video.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/20"></div>
    <header class="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div class="font-serif text-xl tracking-wide">Chefly Como</div>
        <nav class="hidden gap-8 text-sm uppercase tracking-[0.3em] lg:flex">
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
          <nav class="flex flex-col gap-4 text-sm uppercase tracking-[0.3em]">
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
        Your Private Chef on Lake Como — No Menus. No Planning. Just Arrive.
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

  <section id="services" class="mx-auto max-w-6xl px-6 py-16">
    <div class="grid gap-8 md:grid-cols-3">
      <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#b6893f]/20 text-white">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h3 class="mt-5 font-serif text-2xl">Zero Planning</h3>
        <p class="mt-3 text-base text-[#d9d2c6]">You’re on vacation. We take care of everything.</p>
      </div>
      <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#b6893f]/20 text-white">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="m12 3 2.09 6.26H21l-5.17 3.76L17.91 21 12 16.77 6.09 21l1.08-7.98L2 9.26h6.91z" />
          </svg>
        </div>
        <h3 class="mt-5 font-serif text-2xl">Hand-Selected Chefs</h3>
        <p class="mt-3 text-base text-[#d9d2c6]">Top private chefs in Lake Como, trusted by luxury villas.</p>
      </div>
      <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#b6893f]/20 text-white">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M7 10c-1 0-2 1-2 2v6h14v-6c0-1-1-2-2-2H7Z" />
            <path d="M9 6s.5-2 3-2 3 2 3 2" stroke-linecap="round" />
          </svg>
        </div>
        <h3 class="mt-5 font-serif text-2xl">Tailored Experience</h3>
        <p class="mt-3 text-base text-[#d9d2c6]">Seafood, vegan, classic Italian — we adapt to your taste.</p>
      </div>
    </div>
  </section>

  <section id="gallery" class="bg-[#090b0f] px-6 py-12">
    <div class="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
      {#each galleryImages as image}
        <div
          class="h-52 overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center"
          style={`background-image:url('${image}');`}
        ></div>
      {/each}
    </div>
  </section>

  <section id="about" class="mx-auto max-w-6xl px-6 py-16">
    <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-[#b6893f]">How it works</p>
        <h2 class="mt-4 font-serif text-4xl">Effortless from arrival to dessert.</h2>
        <div class="mt-8 space-y-8">
          {#each steps as step, index}
            <div class="flex gap-5">
              <div class="text-lg font-semibold text-[#b6893f]">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h3 class="font-serif text-2xl">{step.title}</h3>
                <p class="mt-2 text-[#d9d2c6]">{step.copy}</p>
              </div>
            </div>
          {/each}
        </div>
        <button
          class="mt-10 rounded-full bg-[#b6893f] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]"
          type="button"
          on:click={openForm}
        >
          Request Your Chef — 60 Seconds
        </button>
      </div>
      <div class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p class="text-xs uppercase tracking-[0.3em] text-[#d9d2c6]">Ultra-short form</p>
        <h3 class="mt-3 font-serif text-3xl">Arranging your dinner takes a minute.</h3>
        <p class="mt-4 text-[#d9d2c6]">
          Share your event date, villa details, guest count, dietary needs, and any special notes. We’ll confirm on
          WhatsApp within minutes and plan everything for you.
        </p>
        <button
          class="mt-8 w-full rounded-full bg-[#b6893f] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]"
          type="button"
          on:click={openForm}
        >
          Open Request Form
        </button>
      </div>
    </div>
  </section>

  <section id="contact" class="px-6 pb-10 text-center text-sm text-[#bcb3a2]">
    <p>Over 120 villa dinners organized last season.</p>
    <p class="mt-1">Rated 4.9/5 by international guests.</p>
  </section>

  <section id="faq" class="mx-auto max-w-5xl px-6 pb-16">
    <h2 class="text-center font-serif text-3xl">Lake Como Private Chef FAQs</h2>
    <p class="mt-4 text-center text-[#d9d2c6]">
      Helpful answers for travelers planning exclusive villa dining on Lake Como.
    </p>
    <div class="mt-10 space-y-6">
      {#each faqs as item}
        <details class="rounded-2xl border border-white/10 bg-white/5 p-6">
          <summary class="cursor-pointer font-serif text-2xl text-[#f7f1e3]">
            {item.question}
          </summary>
          <p class="mt-3 text-[#d9d2c6]">{item.answer}</p>
        </details>
      {/each}
    </div>
  </section>

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
  let navOpen = false;
  let formOpen = false;
  let submitting = false;
  let submitMessage = '';

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

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const payload: Record<string, FormDataEntryValue> = {};
    for (const [key, value] of formData.entries()) {
      payload[key] = value;
    }
    // console.info('Fake request payload:', JSON.stringify(payload, null, 2));

    submitting = false;
    submitMessage = 'Thanks! Your request is logged. We will follow up shortly.';
    form.reset();
  };

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Chefly Como',
    url: 'https://chefly-liart.vercel.app/',
    image: 'https://chefly-liart.vercel.app/media/louis-hansel-0sYLBZjgTTw-unsplash.jpg',
    description:
      'Chefly Como arranges private chef services for luxury villas around Lake Como, matching travelers with bespoke culinary experiences.',
    servesCuisine: ['Italian', 'Seafood', 'Vegan', 'Fine Dining'],
    areaServed: 'Lake Como, Italy',
    telephone: '+39 031 000 0000',
    priceRange: '$$$',
    sameAs: ['https://www.instagram.com/cheflycomo', 'https://www.facebook.com/cheflycomo']
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const galleryImages = [
    '/media/ben-koorengevel-Vd0_Htlb-Kk-unsplash.jpg',
    '/media/signal-2025-11-21-103942.jpeg',
    '/media/creative-assortment-delicious-food.jpg',
    '/media/signal-2025-11-20-175804.jpeg'
  ];

  const steps = [
    {
      title: 'You send your preferences',
      copy: 'Share allergies, cuisine preferences, travel dates, and guest count in one short brief.'
    },
    {
      title: 'We match you with a top chef',
      copy: 'Within minutes we confirm availability with vetted private chefs throughout Lake Como.'
    },
    {
      title: 'Chef arrives at your villa',
      copy: 'They arrive with a fully personalized menu, premium ingredients, and service staff if desired.'
    }
  ];

  const dietaryOptions = [
    { label: 'None', value: 'none' },
    { label: 'Gluten Free', value: 'gluten-free' },
    { label: 'Dairy Free', value: 'dairy-free' },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Vegetarian', value: 'vegetarian' },
    { label: 'Kosher', value: 'kosher' },
    { label: 'Halal', value: 'halal' },
    { label: 'Other', value: 'other' }
  ];

  const faqs = [
    {
      question: 'How far in advance should we book a private chef on Lake Como?',
      answer:
        'We specialize in quick turnarounds. Many dinners confirm within a few days, even in peak season. Share your details and we’ll assign an available chef right away.'
    },
    {
      question: 'Can the chef accommodate allergies and dietary restrictions?',
      answer:
        'Absolutely. We collect detailed dietary requirements up front and curate a chef who specializes in those needs—vegan, gluten-free, kosher, halal, or fully bespoke.'
    },
    {
      question: 'Do you provide wine pairings and service staff?',
      answer:
        'Yes. Sommelier-selected wine pairings, mixologists, and service staff can be added to any dinner. Simply include your request in the form and we will arrange the full hospitality team.'
    }
  ];
</script>


