<script lang="ts">
  export let faqs: { question: string; answer: string }[] = [];
</script>

<section id="faq" class="mx-auto max-w-5xl px-6 py-32" aria-labelledby="faq-heading">
  <div class="section-divider mx-auto mb-20 max-w-md"></div>
  <h2 id="faq-heading" class="text-center font-serif text-5xl" style="letter-spacing: -0.01em; font-weight: 500;">Lake Como Private Chef FAQs</h2>
  <p class="mt-6 text-center leading-luxury text-luxury-text-muted">
    Helpful answers for travelers planning exclusive villa dining on Lake Como.
  </p>
  <div class="mt-16 space-y-5">
    {#each faqs as item}
      <details class="luxury-card p-8 transition-all duration-300" style="background: #111111;">
        <summary class="cursor-pointer font-serif text-xl text-luxury-text" style="letter-spacing: -0.005em;">
          {item.question}
        </summary>
        <p class="mt-4 leading-luxury text-luxury-text-muted">{item.answer}</p>
      </details>
    {/each}
  </div>
</section>

