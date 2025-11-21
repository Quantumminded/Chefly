<svelte:head>
  <title>Private Chef on Lake Como</title>
  <meta
    name="description"
    content="Tailored private chef experiences on Lake Como. Zero planning, just arrive."
  />
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
</svelte:head>

<main class="min-h-screen bg-[#050608] text-[#f7f1e3]">
  <section
    class="relative min-h-screen w-full bg-cover bg-center"
    style="background-image: url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2100&q=80');"
  >
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
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
        >
          Book
        </button>
        <button
          class="lg:hidden ml-4 rounded-full border border-white/20 bg-white/10 p-2"
          aria-label="Toggle navigation"
          on:click={() => (navOpen = !navOpen)}
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
              on:click={() => (navOpen = false)}
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
      <button class="mt-10 w-fit rounded-full bg-[#b6893f] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]">
        Request Your Chef — 60 Seconds
      </button>
    </div>
    <p class="absolute bottom-6 right-8 text-xs uppercase tracking-[0.3em] text-[#f7f1e3]/70">
      Trusted by villa guests from US • UK • DE • CH
    </p>
  </section>

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
        <button class="mt-10 rounded-full bg-[#b6893f] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]">
          Request Your Chef — 60 Seconds
        </button>
      </div>
      <div class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p class="text-xs uppercase tracking-[0.3em] text-[#d9d2c6]">Ultra-short form</p>
        <h3 class="mt-3 font-serif text-3xl">Arranging your dinner takes a minute.</h3>
        <form class="mt-8 space-y-5">
          <div>
            <label for="request-date" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Date</label>
            <input
              type="date"
              id="request-date"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#b6893f] focus:outline-none"
            />
          </div>
          <div>
            <label for="request-location" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Location / Villa Name</label>
            <input
              type="text"
              placeholder="Villa del Lago"
              id="request-location"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
            />
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
              />
            </div>
            <div>
              <label for="request-diet" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Dietary Preferences</label>
              <select
                id="request-diet"
                class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#b6893f] focus:outline-none"
              >
                <option>Italian Classic</option>
                <option>Seafood</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Chef Choice</option>
              </select>
            </div>
          </div>
          <fieldset class="rounded-2xl border border-white/10 bg-black/20 p-6">
            <legend class="text-sm uppercase tracking-[0.4em] text-[#b6893f]">Dietary Requirements</legend>
            <div class="mt-4 grid gap-4 md:grid-cols-2">
              {#each dietaryOptions as option}
                <label class="flex items-center gap-3 text-sm text-[#e6dfd1]">
                  <input
                    type="checkbox"
                    name="dietary"
                    value={option.value}
                    class="h-4 w-4 rounded border-white/30 bg-transparent text-[#b6893f] focus:ring-[#b6893f]"
                  />
                  <span>{option.label}</span>
                </label>
              {/each}
            </div>
          </fieldset>
          <div>
            <label for="request-notes" class="text-sm uppercase tracking-wide text-[#bcb3a2]">Special Requests</label>
            <textarea
              id="request-notes"
              rows="3"
              placeholder="Allergies, wine pairing preferences, service style..."
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
            ></textarea>
          </div>
          <div>
            <label for="request-whatsapp" class="text-sm uppercase tracking-wide text-[#bcb3a2]">WhatsApp Number</label>
            <input
              type="tel"
              placeholder="+1 415 555 2211"
              id="request-whatsapp"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#b6893f] focus:outline-none"
            />
          </div>
          <button class="mt-4 w-full rounded-full bg-[#b6893f] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7f1e3]">
            Confirm Request
          </button>
        </form>
      </div>
    </div>
  </section>

  <section id="contact" class="px-6 pb-10 text-center text-sm text-[#bcb3a2]">
    <p>Over 120 villa dinners organized last season.</p>
    <p class="mt-1">Rated 4.9/5 by international guests.</p>
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

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1470123808288-1e59739efff5?auto=format&fit=crop&w=1200&q=80'
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
</script>


