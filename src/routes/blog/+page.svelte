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
  <!-- Header -->
  <header class="border-b border-white/10 bg-black/80 backdrop-blur">
    <div class="mx-auto max-w-6xl px-6 py-5">
      <div class="flex items-center justify-between">
        <a href="/" class="text-lg font-serif uppercase tracking-wider text-white hover:text-[#d4af37] transition">
          Chefly
        </a>
        <nav class="hidden gap-8 text-sm uppercase tracking-[0.3em] lg:flex">
          <a href="/" class="text-[#f7f1e3]/80 hover:text-white transition">Home</a>
          <a href="/about" class="text-[#f7f1e3]/80 hover:text-white transition">About</a>
          <a href="/blog" class="text-white">Blog</a>
          <a href="/contact" class="text-[#f7f1e3]/80 hover:text-white transition">Contact</a>
        </nav>
      </div>
    </div>
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
            <div class="aspect-video bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center">
                <svg class="h-12 w-12 text-[#d4af37]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
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
</main>

<script lang="ts">
  const articles = [
    {
      slug: 'how-to-plan-the-perfect-private-dinner',
      title: 'How to Plan the Perfect Private Dinner',
      excerpt: 'Master the art of orchestrating an unforgettable private dining experience. From guest selection to menu curation, we guide you through every detail.',
      category: 'Planning',
      readTime: 6
    },
    {
      slug: 'private-chef-costs-in-2025',
      title: 'Private Chef Costs in 2025',
      excerpt: 'Understanding pricing for private chef services. Explore what influences costs and how to get maximum value for your investment.',
      category: 'Pricing',
      readTime: 5
    },
    {
      slug: 'benefits-of-hiring-a-private-chef',
      title: 'Benefits of Hiring a Private Chef',
      excerpt: 'Discover why luxury travelers and villa owners are choosing private chefs. From personalization to convenience, learn the advantages.',
      category: 'Insights',
      readTime: 7
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
</script>
