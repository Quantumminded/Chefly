<script lang="ts">
  export let faqs: { question: string; answer: string }[] = [];
</script>

<section id="faq" class="mx-auto max-w-5xl px-6 pb-16" aria-labelledby="faq-heading">
  <h2 id="faq-heading" class="text-center font-serif text-3xl">Lake Como Private Chef FAQs</h2>
  <p class="mt-4 text-center text-[#d9d2c6]">
    Helpful answers for travelers planning exclusive villa dining on Lake Como.
  </p>
  <div class="mt-10 space-y-6">
    {#each faqs as item}
      <details class="rounded-2xl border border-white/10 bg-white/5 p-6">
        <summary class="cursor-pointer font-serif text-2xl text-[#f7f1e3]">
          {item.question}
        </summary>
        <p class="mt-3 text-[#d9d2c6]">{item.answer}</p>
      </details>
    {/each}
  </div>
</section>

