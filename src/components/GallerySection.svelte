<script lang="ts">
  import ResponsiveImage from './ResponsiveImage.svelte';

  interface GalleryImage {
    src: string;
    alt: string;
    caption: string;
    srcset?: {
      avif?: string;
      webp?: string;
      jpg: string;
    };
  }

  export let images: GalleryImage[] = [];
</script>

<section id="gallery" class="px-6 py-32" style="background: linear-gradient(180deg, #0B0B0C 0%, #111111 100%);" aria-labelledby="gallery-heading">
  <div class="section-divider mx-auto mb-20 max-w-md"></div>
  <div class="mx-auto max-w-6xl text-center">
    <p class="text-sm uppercase tracking-[0.4em] text-luxury-gold">Recent villas</p>
    <h2 id="gallery-heading" class="mt-6 font-serif text-5xl" style="letter-spacing: -0.01em; font-weight: 500;">Scenes from bespoke dinners</h2>
    <p class="mt-5 leading-luxury text-luxury-text-muted">
      Chef-prepared plates, lakeside tablescapes, and private tasting menus captured this season.
    </p>
    <p class="mt-3 font-serif text-sm uppercase tracking-[0.3em] text-luxury-gold-muted/60">
      Captured at private residences in Bellagio, Moltrasio, Tremezzo, Torno.
    </p>
  </div>
  <div class="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-4">
    {#each images as image}
      <figure class="overflow-hidden rounded-2xl border border-luxury-divider bg-black/20 fade-in" style="box-shadow: 0px 4px 20px rgba(0,0,0,0.2);">
        <div class="relative overflow-hidden">
          <div class="absolute inset-0 bg-black/30 z-10"></div>
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            srcset={image.srcset || { jpg: image.src }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            class="h-56 w-full object-cover"
          />
        </div>
        <figcaption class="px-5 py-4 text-sm leading-relaxed text-luxury-text-muted">{image.caption}</figcaption>
      </figure>
    {/each}
  </div>
</section>

