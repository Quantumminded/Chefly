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

<section id="gallery" class="bg-[#090b0f] px-6 py-12" aria-labelledby="gallery-heading">
  <div class="mx-auto max-w-6xl text-center">
    <p class="text-sm uppercase tracking-[0.4em] text-[#d4af37]">Recent villas</p>
    <h2 id="gallery-heading" class="mt-2 font-serif text-3xl">Scenes from bespoke dinners</h2>
    <p class="mt-2 text-[#d9d2c6]/80">
      Chef-prepared plates, lakeside tablescapes, and private tasting menus captured this season.
    </p>
  </div>
  <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-4">
    {#each images as image}
      <figure class="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <ResponsiveImage
          src={image.src}
          alt={image.alt}
          srcset={image.srcset || { jpg: image.src }}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          class="h-56 w-full object-cover"
        />
        <figcaption class="px-4 py-3 text-sm text-[#d9d2c6]/80">{image.caption}</figcaption>
      </figure>
    {/each}
  </div>
</section>

