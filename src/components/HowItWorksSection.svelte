<script lang="ts">
  export let steps: { title: string; copy: string }[] = [];
</script>

<section id="about" class="mx-auto max-w-4xl px-6 py-20 text-center" aria-labelledby="process-heading">
  <p class="text-sm uppercase tracking-[0.4em] text-[#b6893f]">How it works</p>
  <h2 id="process-heading" class="mt-4 font-serif text-4xl">Effortless from arrival to dessert.</h2>
  <p class="mx-auto mt-4 max-w-2xl text-[#d9d2c6]/90">
    One message is all it takes. We choreograph the chef, menu, and service so you simply relax.
  </p>

  <div class="relative mx-auto mt-12 max-w-3xl">
    <div class="space-y-12 md:space-y-14">
      {#each steps as step, index}
        <div class="relative flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div class="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/60 font-semibold text-[#b6893f]">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div class="max-w-xl md:text-left">
            <h3 class="font-serif text-2xl">{step.title}</h3>
            <p class="mt-2 text-[#d9d2c6]">{step.copy}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <slot name="cta" />
</section>

