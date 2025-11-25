<script lang="ts">
  export let images: { src: string; alt: string; caption: string }[] = [];
</script>

<section id="gallery" class="bg-[#090b0f] px-6 py-12" aria-labelledby="gallery-heading">
  <div class="mx-auto max-w-6xl text-center">
    <p class="text-sm uppercase tracking-[0.4em] text-[#b6893f]">Recent villas</p>
    <h2 id="gallery-heading" class="mt-2 font-serif text-3xl">Scenes from bespoke dinners</h2>
    <p class="mt-2 text-[#d9d2c6]/80">
      Chef-prepared plates, lakeside tablescapes, and private tasting menus captured this season.
    </p>
  </div>
  <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-4">
    {#each images as image}
      <figure class="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          class="h-56 w-full object-cover"
        />
        <figcaption class="px-4 py-3 text-sm text-[#d9d2c6]/80">{image.caption}</figcaption>
      </figure>
    {/each}
  </div>
</section>

