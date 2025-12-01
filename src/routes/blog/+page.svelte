<svelte:head>
  <title>Private Chef Blog | Luxury Dining Insights & Tips</title>
  <meta
    name="description"
    content="Discover insights on private dining, chef selection, menu planning, and luxury culinary experiences on Lake Como."
  />
  <link rel="canonical" href="https://cheflycomo.com/blog" />
  <meta property="og:title" content="Private Chef Blog | Luxury Dining Insights & Tips" />
  <meta
    property="og:description"
    content="Expert articles on private chef services, menu planning, and unforgettable villa dining experiences."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cheflycomo.com/blog" />
  <meta property="og:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  <script type="application/ld+json">
    {JSON.stringify(jsonLd)}
  </script>
</svelte:head>

<main class="min-h-screen bg-[#050608] text-[#f7f1e3]">
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
    <div class="mx-auto max-w-3xl px-6">
      <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Culinary Insights</p>
      <h1 class="mt-4 font-serif text-5xl md:text-6xl text-white">
        Private Dining Guide
      </h1>
      <p class="mt-6 text-lg text-[#d9d2c6]/90">
        Expert articles on hiring private chefs, planning luxury dinners, and elevating your culinary experiences.
      </p>
    </div>
  </section>

  <!-- Blog Articles Grid -->
  <section class="border-t border-white/10 px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {#each articles as article (article.slug)}
          <article class="group flex flex-col rounded-2xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition">
            <div class="bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
              <div class="w-full h-full">
                <ResponsiveImage 
                    src={article.img.src} 
                    alt={article.img.alt} 
                    srcset={article.img.srcset}
                    loading="lazy"
                    decoding="async"
                    
                    class="h-56 w-full object-cover" 
                />
              </div>
            </div>
            <div class="flex-1 flex flex-col p-6">
              <div class="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                <span class="text-[#d4af37]">{article.category}</span>
                <span class="text-white/30">•</span>
                <span class="text-white/60">{article.readTime} min read</span>
              </div>
              <h2 class="mt-3 font-serif text-xl text-white group-hover:text-[#d4af37] transition">
                {article.title}
              </h2>
              <p class="mt-3 flex-1 text-sm text-[#d9d2c6]/80">
                {article.excerpt}
              </p>
              <a
                href="/blog/{article.slug}"
                class="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-[#d4af37] hover:text-[#e5c158] transition"
              >
                Read Article →
              </a>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="border-t border-white/10 bg-[#06080d] px-6 py-20">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="font-serif text-3xl text-white">Ready to experience private dining?</h2>
      <p class="mt-4 text-[#d9d2c6]/80">
        Our expert chefs are ready to create an unforgettable culinary experience for your next event.
      </p>
      <a
        href="/contact"
        class="mt-8 inline-block rounded-full bg-[#d4af37] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-black hover:bg-[#e5c158] transition"
      >
        Book Your Chef
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#bcb3a2]">
    <p>Curated Private Chefs for Lake Como</p>
    <div class="mt-3 space-x-6 text-[0.7rem] normal-case tracking-[0.2em]">
      <a href="/privacy" class="hover:text-white transition">Privacy</a>
      <span class="text-white/30">•</span>
      <a href="/terms" class="hover:text-white transition">Terms</a>
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
  import { navLinksSecondary, dietaryOptions } from '../../lib/content';
  import ResponsiveImage from '../../components/ResponsiveImage.svelte';

  let navOpen = false;
  let formOpen = false;
  let submitting = false;
  let submitMessage = '';


  function openForm() {
    formOpen = true;
  }

  function closeForm() {
    formOpen = false;
  }

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

  const articles = [
    {
      slug: 'how-to-plan-the-perfect-private-dinner',
      title: 'How to Plan the Perfect Private Dinner',
      excerpt: 'Master the art of orchestrating an unforgettable private dining experience. From guest selection to menu curation, we guide you through every detail.',
      category: 'Planning',
      readTime: 6,
      img: {      
        src: '/media/img01.jpg',
        alt: 'Seefood dish with brocoli and vegetables',
        caption: 'Seefood tasting menu preparation',
        srcset: {
          avif: '/media/img01.avif',
          webp: '/media/img01.webp',
          jpg: '/media/img01.jpg'
        }
      }
    },
    {
      slug: 'private-chef-costs-in-2025',
      title: 'Private Chef Costs in 2025',
      excerpt: 'Understanding pricing for private chef services. Explore what influences costs and how to get maximum value for your investment.',
      category: 'Pricing',
      readTime: 5,
      img: {      
        src: '/media/img02.jpg',
        alt: 'Two Oyster on a dish with vinagrette sauce ',
        caption: 'Oyster and wine degustation',
        srcset: {
          avif: '/media/img02.avif',
          webp: '/media/img02.webp',
          jpg: '/media/img02.jpg'
        }
      }
    },
    {
      slug: 'benefits-of-hiring-a-private-chef',
      title: 'Benefits of Hiring a Private Chef',
      excerpt: 'Discover why luxury travelers and villa owners are choosing private chefs. From personalization to convenience, learn the advantages.',
      category: 'Insights',
      readTime: 7,
      img: {      
        src: '/media/img03.jpg',
        alt: 'Salmon steak with vegetables and sauce',
        caption: 'Salmon steak with vegetables and sauce',
        srcset: {
          avif: '/media/img03.avif',
          webp: '/media/img03.webp',
          jpg: '/media/img03.jpg'
        }
      }
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Chefly Blog',
    description: 'Expert insights on private dining, chef selection, and luxury culinary experiences.',
    url: 'https://cheflycomo.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Chefly'
    }
  };

  const blogImages = [
  {
    src: '/media/img01.jpg',
    alt: 'Seefood dish with brocoli and vegetables',
    caption: 'Seefood tasting menu preparation',
    srcset: {
      avif: '/media/img01.avif',
      webp: '/media/img01.webp',
      jpg: '/media/img01.jpg'
    }
  }
];
</script>
