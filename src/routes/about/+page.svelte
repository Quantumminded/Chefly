<svelte:head>
  <title>Our Chef Network | Hand-Selected Luxury Private Chefs</title>
  <meta
    name="description"
    content="Meet Chefly's curated network of Michelin-trained private chefs. Discover how we match you with the perfect culinary artist for your Lake Como villa or private event."
  />
  <link rel="canonical" href="https://cheflycomo.com/about" />
  <meta property="og:title" content="Our Chef Network | Hand-Selected Luxury Private Chefs" />
  <meta
    property="og:description"
    content="Curated network of Michelin-trained private chefs specializing in personalized fine dining experiences for Lake Como villas and luxury private events."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cheflycomo.com/about" />
  <meta property="og:image" content="https://chefly10.vercel.app/media/hero-img.webp" />
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1080" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Chef Network | Hand-Selected Luxury Private Chefs" />
  <meta
    name="twitter:description"
    content="Michelin-trained chefs curated for bespoke fine dining experiences across Lake Como villas and luxury private events."
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
      <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Our Culinary Team</p>
      <h1 id="chef-heading" class="mt-6 max-w-3xl font-serif text-4xl leading-snug text-white drop-shadow md:text-6xl">
        Hand-Selected Master Chefs
      </h1>
      <p class="mt-6 max-w-xl text-lg text-[#f7f1e3]/90">
        A carefully curated network of Michelin-trained culinary artists, each bringing unique expertise, creativity, and dedication to transforming your private dining experience.
      </p>
    </div>
  </section>

  <!-- Our Chef Network Section -->
  <section class="border-t border-white/10 px-6 py-20" aria-labelledby="network-heading">
    <div class="mx-auto max-w-6xl">
      <h2 id="network-heading" class="font-serif text-4xl text-[#d4af37] mb-6 text-center">
        Why Our Chef Network?
      </h2>
      <div class="grid gap-8 md:grid-cols-3">
        <article class="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 class="font-serif text-xl text-[#d4af37]">Expert Matching</h3>
          <p class="mt-4 text-sm text-[#d9d2c6]/90">
            We match you with the perfect chef based on your cuisine preferences, dietary needs, event type, and villa location—ensuring a seamless fit.
          </p>
        </article>

        <article class="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 class="font-serif text-xl text-[#d4af37]">Diverse Specializations</h3>
          <p class="mt-4 text-sm text-[#d9d2c6]/90">
            From contemporary Italian to molecular gastronomy, Asian fusion to plant-based fine dining—our network covers every culinary style and dietary requirement.
          </p>
        </article>

        <article class="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 class="font-serif text-xl text-[#d4af37]">Vetting & Quality</h3>
          <p class="mt-4 text-sm text-[#d9d2c6]/90">
            Every chef undergoes rigorous background checks, reference verification, and culinary evaluation to ensure they meet our luxury hospitality standards.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Meet Our Chefs Section -->
  <section class="bg-[#06080d] border-t border-white/10 px-6 py-20" aria-labelledby="featured-heading">
    <div class="mx-auto max-w-6xl">
      <h2 id="featured-heading" class="font-serif text-4xl text-[#d4af37] mb-12 text-center">
        Our Chef Collective
      </h2>
      <div class="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h3 class="font-serif text-3xl text-white mb-4">What Makes Our Chefs Different</h3>
          <p class="text-[#d9d2c6]/90">
            Every chef in our network shares a common commitment: transforming private dining into unforgettable culinary experiences. They bring diverse backgrounds, specializations, and creative visions—yet all are united by rigorous training, professional excellence, and a genuine passion for hospitality.
          </p>
          <p class="mt-4 text-[#d9d2c6]/90">
            Our chefs have trained in Michelin-starred kitchens across Europe, curated experiences for discerning guests worldwide, and mastered the art of personalizing every menu to match your preferences, dietary needs, and vision. Whether you seek contemporary Italian, molecular gastronomy, Asian fusion, or plant-based fine dining, we have the perfect chef for your event.
          </p>
          <p class="mt-4 text-[#d9d2c6]/80">
            <strong class="text-[#d4af37]">"Great cooking is storytelling,"</strong> our chefs believe. <strong class="text-[#d4af37]">"Every plate tells a story of place, season, and the people dining together."</strong>
          </p>
        </div>
        <div class=" rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
          <ResponsiveImage 
          src={aboutImageFirst[0].src} 
          alt={aboutImageFirst[0].alt} 
          srcset={aboutImageFirst[0].srcset}
          loading="lazy"
          decoding="async"
          
          class="h-full w-full object-cover" 
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="border-t border-white/10 px-6 py-20" aria-labelledby="experience-heading">
    <div class="mx-auto max-w-6xl">
      <h2 id="experience-heading" class="font-serif text-4xl text-[#d4af37] mb-12 text-center">
        The Chefly Chef Profile
      </h2>
      <div class="grid gap-8 md:grid-cols-3">
        <article class="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 class="font-serif text-xl text-[#d4af37]">World-Class Training</h3>
          <p class="mt-4 text-sm text-[#d9d2c6]/90">
            Graduated from prestigious culinary academies (Italian, French, and international institutions)
          </p>
          <p class="mt-3 text-sm text-[#d9d2c6]/80">
            Advanced expertise in classical plating, molecular gastronomy, dietary specializations, and sustainable cooking practices.
          </p>
        </article>

        <article class="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 class="font-serif text-xl text-[#d4af37]">Michelin Experience</h3>
          <p class="mt-4 text-sm text-[#d9d2c6]/90">
            <strong>5+ years minimum</strong> in Michelin-starred kitchens across Europe
          </p>
          <p class="mt-3 text-sm text-[#d9d2c6]/80">
            Mastered precision plating, menu engineering, and brigade management under award-winning Executive Chefs.
          </p>
        </article>

        <article class="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 class="font-serif text-xl text-[#d4af37]">Private Dining Expertise</h3>
          <p class="mt-4 text-sm text-[#d9d2c6]/90">
            <strong>5+ years</strong> of exclusive private chef experience
          </p>
          <p class="mt-3 text-sm text-[#d9d2c6]/80">
            Hundreds of bespoke dinners curated for discerning guests, UHNW individuals, and corporate executives across Europe.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Culinary Philosophy Section -->
  <section class="bg-[#06080d] border-t border-white/10 px-6 py-20" aria-labelledby="philosophy-heading">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-2 md:items-center md:flex-row-reverse">
        <div class="order-2 md:order-2">
          <h2 id="philosophy-heading" class="font-serif text-4xl text-[#d4af37]">Our Culinary Philosophy</h2>
          <p class="mt-6 text-[#d9d2c6]/90">
            Our chefs approach each dinner as an opportunity to tell a story through cuisine. They blend classical European techniques with contemporary innovation, creating menus that celebrate seasonality, local sourcing, and personal connection.
          </p>
          <p class="mt-4 text-[#d9d2c6]/90">
            Every experience is rooted in:
          </p>
          <ul class="mt-6 space-y-3 text-[#d9d2c6]/80">
            <li class="flex gap-3">
              <span class="text-[#d4af37]">✓</span>
              <span><strong>Seasonal Sourcing:</strong> Collaborations with Lake Como's finest local producers for maximum freshness and sustainability.</span>
            </li>
            <li class="flex gap-3">
              <span class="text-[#d4af37]">✓</span>
              <span><strong>Technique & Creativity:</strong> Michelin-trained precision plating elevated through innovative thinking and personal artistic vision.</span>
            </li>
            <li class="flex gap-3">
              <span class="text-[#d4af37]">✓</span>
              <span><strong>Guest-Centric Design:</strong> Every menu is custom-crafted around your preferences, dietary needs, story, and vision.</span>
            </li>
            <li class="flex gap-3">
              <span class="text-[#d4af37]">✓</span>
              <span><strong>Global Inspiration:</strong> Our chefs draw from Asian, Mediterranean, Nordic, and world cuisines to create diverse, exciting menus.</span>
            </li>
          </ul>
        </div>
        <div class="order-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center md:order-1">
          <ResponsiveImage 
          src={aboutImageSecond[0].src} 
          alt={aboutImageSecond[0].alt} 
          srcset={aboutImageSecond[0].srcset}
          loading="lazy"
          decoding="async"
          
          class="h-full w-full object-cover" 
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Your Perfect Chef CTA Section -->
  <section class="border-t border-white/10 px-6 py-20" aria-labelledby="cta-heading">
    <div class="mx-auto max-w-4xl text-center">
      <h2 id="cta-heading" class="font-serif text-4xl text-[#d4af37]">Your Perfect Chef Awaits</h2>
      <p class="mt-6 text-lg text-[#d9d2c6]/90">
        Our diverse network of Michelin-trained chefs is ready to create your bespoke dining experience. Whether you desire contemporary Italian, molecular gastronomy, Asian fusion, plant-based fine dining, or any culinary style, we'll match you with the ideal chef for your event. Share your preferences, and let us bring your culinary vision to life.
      </p>
      <button
        class="mt-10 rounded-full bg-[#d4af37] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#e5c158]"
        type="button"
        on:click={openForm}
      >
        Request Your Private Dining Experience
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#bcb3a2]">
    <p>Chefly | Hand-Selected Culinary Network for Lake Como</p>
    <div class="mt-4 flex justify-center gap-6">
      <a href="/#privacy" class="hover:text-white transition">Privacy Policy</a>
      <span class="text-white/20">•</span>
      <a href="/#terms" class="hover:text-white transition">Terms of Service</a>
    </div>
  </footer>
</main>

<script lang="ts">
  import { heroVideoSrc, siteUrl, navLinksSecondary, heroPosterPath } from '../../lib/content';
  import ResponsiveImage from '../../components/ResponsiveImage.svelte';

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

  const aboutImageFirst= [
    {  
      src: '/media/img09.jpg',
      alt: 'Seefood spaghetti dish with salat and wine',
      caption: 'Seefood spaghetti dish with salat and wine',
      srcset: {
        avif: '/media/img09.avif',
        webp: '/media/img09.webp',
        jpg: '/media/img09.jpg' 
      }     
    }
  ];
  const aboutImageSecond= [
    {  
      src: '/media/img10.jpg',
      alt: 'Seefood spaghetti dish with salat and wine',
      caption: 'Seefood spaghetti dish with salat and wine',
      srcset: {
        avif: '/media/img10.avif',
        webp: '/media/img10.webp',
        jpg: '/media/img10.jpg' 
      }
    }
  ];

  let jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chefly',
    description:
      'Curated network of Michelin-trained private chefs specializing in personalized fine dining experiences for Lake Como villas and luxury private events.',
    url: 'https://cheflycomo.com/about',
    image: 'https://chefly10.vercel.app/media/hero-img.webp',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Booking',
      telephone: '+39 031 000 0000'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Lake Como',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Como',
        addressRegion: 'CO',
        postalCode: '22100',
        addressCountry: 'IT'
      }
    },
    sameAs: [
      'https://instagram.com/cheflycomo',
      'https://linkedin.com/company/chefly'
    ]
  };
</script>
