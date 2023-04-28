<script lang="ts">
  import { base } from '$app/paths'
  import SliderExample from '$lib/components/slider-example.svelte'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
  import Iconify from '@iconify/svelte'
</script>

<section class="container flex flex-col py-40 text-center">
  <h2 class="mb-20 text-3xl font-bold md:text-4xl">
    <span class="bg-gradient-to-l from-primary to-neutral bg-clip-text text-transparent">
      Lombok Developer Services
    </span>
  </h2>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    {#each serviceLists as service}
      <div class="h-62 w-62 card rounded-sm pt-4 shadow">
        <figure class="px-5 pt-5">
          <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
        </figure>
        <div class="card-body cursor-pointer items-center">
          <h2 class="card-title text-base font-semibold">{service.title}</h2>
          <p>{service.description}</p>
        </div>
        <!-- <a class="btn btn-outline btn-success w-52 m-auto my-2 normal-case rounded-full" href={`${base}/service`}>Read More</a> -->
      </div>
    {/each}
  </div>
</section>
