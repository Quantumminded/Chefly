<script lang="ts">
  interface ImageSrcSet {
    avif?: string;
    webp?: string;
    jpg: string;
  }

  export let src: string = '';
  export let alt: string = '';
  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;
  export let srcset: ImageSrcSet = { jpg: src };
  export let loading: 'lazy' | 'eager' = 'lazy';
  export let decoding: 'async' | 'sync' = 'async';
  export let sizes: string | undefined = undefined;

  let className: string = '';
  export { className as class };
</script>

<picture>
  {#if srcset.avif}
    <source
      srcset={srcset.avif}
      type="image/avif"
      {sizes}
    />
  {/if}
  {#if srcset.webp}
    <source
      srcset={srcset.webp}
      type="image/webp"
      {sizes}
    />
  {/if}
  <img
    src={srcset.jpg}
    {alt}
    {width}
    {height}
    {loading}
    {decoding}
    class={className}
  />
</picture>
