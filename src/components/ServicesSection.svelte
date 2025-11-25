<script lang="ts">
  export let services: { title: string; copy: string; icon: string; details?: string[] }[] = [];

  const iconMap: Record<string, string> = {
    clock: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`,
    star: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="m12 3 2.09 6.26H21l-5.17 3.76L17.91 21 12 16.77 6.09 21l1.08-7.98L2 9.26h6.91z"></path>
    </svg>`,
    wine: `<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="M7 10c-1 0-2 1-2 2v6h14v-6c0-1-1-2-2-2H7Z"></path>
      <path d="M9 6s.5-2 3-2 3 2 3 2" stroke-linecap="round"></path>
    </svg>`
  };
</script>

<section id="services" class="mx-auto max-w-6xl px-6 py-16" aria-labelledby="services-heading">
  <div class="text-center">
    <p class="text-sm uppercase tracking-[0.4em] text-[#b6893f]">Why travellers book us</p>
    <h2 id="services-heading" class="mt-4 font-serif text-3xl">Designed for villa guests who want zero effort</h2>
  </div>
  <div class="mt-10 grid gap-8 md:grid-cols-3">
    {#each services as service}
      <article class="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/20" aria-label={service.title}>
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#b6893f]/20 text-white" aria-hidden="true">
          {@html iconMap[service.icon] || iconMap.clock}
        </div>
        <h3 class="mt-5 font-serif text-2xl">{service.title}</h3>
        <p class="mt-3 text-sm text-[#d9d2c6]/90">{service.copy}</p>
        {#if service.details}
          <ul class="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
            {#each service.details as detail}
              <li>{detail}</li>
            {/each}
          </ul>
        {/if}
      </article>
    {/each}
  </div>
</section>

