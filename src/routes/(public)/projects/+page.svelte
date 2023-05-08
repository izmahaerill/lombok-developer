<script>
  import Content from '$lib/components/content.svelte'
  import global from '$lib/images/handphone.svg'
  let tab1Content = false
  let tab2Content = false

  function tab1() {
    tab1Content = !tab1Content
    tab2Content = false
  }
</script>

<section class="container py-32">
  <section>
    <div class="mt-2 flex-col justify-between md:flex-wrap lg:flex-row">
      <div class="mt-2 flex-col md:flex-wrap lg:flex-row">
        <button
          class="btn-outline btn-success btn mb-5 rounded-sm text-2xl font-bold"
          on:click={tab1}>View All project</button>
      </div>
      {#if tab1Content}
        <Content />
      {/if}
    </div>
  </section>
</section>
