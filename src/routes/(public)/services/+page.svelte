<script lang="ts">
  import { serviceLists } from '$lib/constants'
  import { devProductivity } from '$lib/images'
  import Iconify from '@iconify/svelte'
</script>

<section class="container py-32">
  <h2 class="mb-10 text-center text-4xl font-bold">
    <span class="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">
      Lombok Developer Services
    </span>
  </h2>
  <div class="flex flex-wrap items-center justify-center gap-5">
    {#each serviceLists as service}
      <div class="card-bordered card w-full md:w-5/12 lg:w-1/3">
        <figure class="px-5 pt-5">
          <img class="h-fit w-fit" src={devProductivity} alt="Dev Productivity" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{service.title}</h2>
          <p class="leading-relaxed">{service.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
