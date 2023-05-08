<script lang="ts">
  import { base } from '$app/paths'
  import Price from '$lib/components/home/Price.svelte'
  import SliderExample from '$lib/components/SliderExample.svelte'
  import { serviceLists } from '$lib/constants'
  // import { businessDecisions, devProductivity } from '$lib/images'
  // import Iconify from '@iconify/svelte'
</script>

<section>
  <div
    class="hero min-h-screen bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')] bg-top">
    <div class="hero-overlay backdrop-blur-sm backdrop-brightness-50" />
    <div class="hero-content text-center text-neutral-content">
      <div class="md:max-w-lg lg:max-w-xl">
        <h1 class="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
          <span class="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Lombok Developer
          </span>
        </h1>
        <p class="mb-16 font-medium leading-relaxed lg:mb-10">
          The Unique Solutions for Your Business, The Best Solutions For Your Business.
        </p>
        <a class="btn-outline btn-primary btn-wide btn capitalize" href={`${base}/contact`}>
          Get in touch
        </a>
      </div>
    </div>
  </div>
</section>

<section class="container py-32 text-center">
  <h2 class="mb-5 text-4xl font-bold">
    <span class="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">
      Your Digital Business Solution Partner
    </span>
  </h2>
  <p class="leading-relaxed">
    Website development services from Lombok Developer are ready to help you master the online
    world. Enjoy the convenience of managing a website, which is equivalent to having a professional
    IT staff who can help you build a website. Order your website now!
  </p>
</section>

<section class="container py-52">
  <h2 class="mb-10 text-center text-4xl font-bold">
    <span class="bg-gradient-to-r from-neutral to-primary bg-clip-text text-transparent">
      Prince Website
    </span>
  </h2>
  <div class="flex flex-wrap items-center justify-center gap-5">
    <Price />
    <Price />
    <Price />
    <Price />
  </div>
</section>

<section class="container">
  <h2 class="mb-10 text-center text-4xl font-bold">
    <span class="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">
      Lombok Developer Services
    </span>
  </h2>
  <div class="flex flex-wrap items-center justify-center gap-5">
    {#each serviceLists as service}
      <div class="card-bordered card w-full md:w-5/12 lg:w-1/3">
        <figure class="px-5 pt-5">
          <!-- <Iconify class="text-5xl" icon="material-symbols:home-app-logo"/> -->
        </figure>
        <div class="card-body">
          <h2 class="card-title">{service.title}</h2>
          <p class="leading-relaxed">{service.description}</p>
          <a class="btn-outline btn-primary btn-block btn capitalize" href={`${base}/services`}>
            Read More
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="py-52 text-center">
  <h2 class="mb-5 text-4xl font-bold">
    <span class="bg-gradient-to-r from-neutral to-primary bg-clip-text text-transparent">
      Galery
    </span>
  </h2>
  <p class="mb-10 leading-relaxed">
    Please check some of the website creation work that we have done, you can use it as a web design
    reference.
  </p>
  <SliderExample />
</section>

<section class="container py-20">
  <p
    class="bg-gradient-to-r from-neutral to-primary bg-clip-text py-10 text-center text-4xl font-semibold text-transparent">
    NEWS
  </p>
  <div class=" flex-col justify-evenly gap-2 md:flex lg:flex-row">
    <div class="card card-compact mb-2 rounded-sm bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGUlMjBmb3Jmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
    <div class="card card-compact mb-2 rounded-sm bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGUlMjBmb3Jmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
    <div class="card card-compact mb-2 rounded-sm bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGUlMjBmb3Jmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  </div>
  <a class="btn-outlinecapitalize btn mt-5 flex rounded-sm" href={`${base}/contact`}>View News</a>
</section>
