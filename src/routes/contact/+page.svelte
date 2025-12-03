<script lang="ts">
  import { navLinksSecondary, dietaryOptions } from '$lib/content';

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

</script>

<svelte:head>
  <title>Book Your Private Chef | Chefly</title>
  <meta
    name="description"
    content="Contact Chefly to book a private chef for your Lake Como event. Quick booking form, WhatsApp direct line, and email support available."
  />
  <meta property="og:title" content="Book Your Private Chef | Chefly" />
  <meta
    property="og:description"
    content="Get in touch with Chefly to book your private chef on Lake Como."
  />
  <meta property="og:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  <meta property="og:url" content="https://chefly10.vercel.app/contact" />
</svelte:head>

<main class="min-h-screen bg-[#050608]">
  <!-- Header/Navbar -->
  <header class="border-b border-white/10 bg-black/80 backdrop-blur" aria-label="Site header">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <a href="/" class="font-serif text-xl tracking-wide hover:text-[#d4af37] transition">Chefly</a>
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

  <!-- Hero Section -->
  <section class="relative py-20 text-center">
    <div class="mx-auto max-w-2xl px-6">
      <h1 class="mb-6 text-5xl font-serif text-white">Book Your Private Chef</h1>
      <p class="text-lg text-[#f7f1e3]/80">
        Fill out the form below and we'll connect you with the perfect chef for your event.
      </p>
    </div>
  </section>

  <!-- Quick Contact Options -->
  <section class="border-y border-white/10 bg-black/30 py-12">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="text-center">
          <h3 class="mb-4 text-sm uppercase tracking-widest text-[#d4af37]">Quick Contact</h3>
          <p class="mb-6 text-[#f7f1e3]/80">Prefer direct messaging?</p>
          <a
            href="https://wa.me/4917621567199"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block rounded-full bg-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242]"
          >
            WhatsApp Us
          </a>
        </div>
        <div class="text-center">
          <h3 class="mb-4 text-sm uppercase tracking-widest text-[#d4af37]">Email</h3>
          <p class="mb-6 text-[#f7f1e3]/80">Send us a message</p>
          <a
            href="mailto:hello@chefly.io"
            class="inline-block rounded-full bg-[#d4af37] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242]"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-20">
    <div class="mx-auto max-w-2xl px-6">
      <h2 class="mb-2 font-serif text-3xl text-white">Arranging your dinner takes a minute.</h2>
      <form class="mt-8 space-y-5" on:submit={handleSubmit}>
        <div class="grid gap-5 md:grid-cols-2">
          <div>
            <label for="request-name" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
              >Full Name</label
            >
            <input
              type="text"
              id="request-name"
              placeholder="Your name"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none"
              name="fullName"
              required
            />
          </div>
          <div>
            <label for="request-email" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
              >Email</label
            >
            <input
              type="email"
              id="request-email"
              placeholder="you@email.com"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none"
              name="email"
              required
            />
          </div>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <div>
            <label for="request-date" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
              >Date</label
            >
            <input
              type="date"
              id="request-date"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#d4af37] focus:outline-none"
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
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none"
              name="location"
            />
          </div>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <div>
            <label for="request-guests" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
              >Number of Guests</label
            >
            <input
              type="number"
              min="2"
              placeholder="8"
              id="request-guests"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none"
              name="guests"
            />
          </div>
          <div>
            <label for="request-diet" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
              >Cuisine Preference</label
            >
            <select
              id="request-diet"
              class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#d4af37] focus:outline-none"
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
            class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-[#d4af37] focus:outline-none"
            name="requirements"
          >
            <option value="">Select requirement</option>
            {#each dietaryOptions as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        </div>
        <div>
          <label for="request-notes" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
            >Special Requests</label
          >
          <textarea
            id="request-notes"
            rows="3"
            placeholder="Allergies, wine pairing preferences, service style..."
            class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none"
            name="notes"
          ></textarea>
        </div>
        <div>
          <label for="request-whatsapp" class="text-sm uppercase tracking-wide text-[#bcb3a2]"
            >WhatsApp Number</label
          >
          <input
            type="tel"
            placeholder="+1 415 555 2211"
            id="request-whatsapp"
            class="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none"
            name="whatsapp"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          class="mt-4 w-full rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c39242] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
        >
          {#if submitting}
            Sending...
          {:else}
            Send via WhatsApp
          {/if}
        </button>
        {#if submitMessage}
          <div class="rounded-xl bg-green-900/20 border border-green-500/30 p-4">
            <p class="text-sm text-green-300">{submitMessage}</p>
          </div>
        {/if}
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#bcb3a2]">
    <p>Curated Private Chefs for Lake Como</p>
    <div class="mt-3 space-x-6 text-[0.7rem] normal-case tracking-[0.2em]">
      <a href="/privacy" class="hover:text-white">Privacy</a>
      <span class="text-white/30">•</span>
      <a href="/terms" class="hover:text-white">Terms</a>
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
