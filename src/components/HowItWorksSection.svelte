<script lang="ts">
  export let steps: { title: string; copy: string }[] = [];
</script>

<section id="about" class="mx-auto max-w-5xl px-6 py-32 text-center" aria-labelledby="process-heading">
  <div class="section-divider mx-auto mb-20 max-w-md"></div>
  <p class="text-sm uppercase tracking-[0.4em] text-luxury-gold">How it works</p>
  <h2 id="process-heading" class="mt-6 font-serif text-5xl" style="letter-spacing: -0.01em; font-weight: 500;">Effortless from arrival to dessert.</h2>
  <p class="mx-auto mt-6 max-w-2xl leading-luxury text-luxury-text-muted">
    One message is all it takes. We choreograph the chef, menu, and service so you simply relax.
  </p>

  <div class="relative mx-auto mt-16 max-w-3xl">
    <div class="space-y-12">
      {#each steps as step, index}
        <div class="relative luxury-card p-8 text-left fade-in">
          <h3 class="font-serif text-2xl gold-dot" style="letter-spacing: -0.005em;">{step.title}</h3>
          <p class="mt-3 leading-luxury text-luxury-text-muted">{step.copy}</p>
        </div>
      {/each}
    </div>
    <p class="mt-12 text-sm leading-relaxed text-luxury-text-muted/70">
      We decline 40% of requests during peak season to maintain service standards.
    </p>
  </div>

  <slot name="cta" />
</section>

