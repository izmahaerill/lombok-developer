<script lang="ts">
  import { base } from '$app/paths'
  import SliderExample from '$lib/components/slider-example.svelte'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
  import Iconify from '@iconify/svelte'
</script>

<section>
  <div
    class="hero min-h-screen"
    style="background-image: url(https://media.istockphoto.com/id/681735120/photo/top-view-of-mixed-race-business-team-sitting-at-the-table-at-loft-office-and-working-woman.jpg?b=1&s=170667a&w=0&k=20&c=aO5uYK0cEHQZ3LYGLEfqMHlaE7pSVrU8oAdsYTkBn3o=);">
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold"><span>Lombok </span>Developer</h1>
        <p class="mb-5">
          The Unique Solutions for Your Business, The Best Solutions For Your Business
        </p>
        <button class="btn-outline btn text-white">Get started</button>
        <a class="btn-outline btn-success btn" href={`${base}/contact`}>Get in Touch</a>
      </div>
    </div>
  </div>
</section>

<section class="container py-52">
  <div class="w-full">
    <h1 class="mb-5 text-4xl font-extrabold md:text-4xl lg:text-center">
      <span class="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">
        Your Digital Business
      </span> Solution Partner
    </h1>
    <p class="mb-10 leading-relaxed text-slate-500">
      Website development services from Lombok Developer are ready to help you master the online
      world. Enjoy the convenience of managing a website, which is equivalent to having a
      professional IT staff who can help you build a website. Order your website now!
    </p>
  </div>
</section>

<section class="  mb-40 flex flex-col items-center justify-center lg:flex-row">
  <div class="container w-full bg-emerald-500 py-24">
    <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
  </div>

  <div class="container w-full bg-slate-700 py-10 text-white">
    <h2 class="mb-5 text-3xl font-bold md:text-4xl">
      <span class="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
        Solutions for Your Business's Digital Branding Needs
      </span>
    </h2>
    <p class="text-justify leading-relaxed">
      Lombok Developer is a group of young people who are creative in interactive multimedia and use
      it to develop information technology in Lombok and Mataram. They aim to improve people's
      lives, strengthen economic resilience, and create more business opportunities for digital
      entrepreneurs. They provide business solutions ranging from design, website development,
      software development, and application development.
    </p>
  </div>
</section>

<section class="container pt-20">
  <h2 class=" text-center text-3xl font-bold md:text-4xl">
    <span class="bg-gradient-to-r from-neutral to-primary bg-clip-text text-transparent">
      Prince website
    </span>
  </h2>

  <div class="grid grid-cols-1 gap-5 py-10 shadow-sm md:grid-cols-2 lg:grid-cols-4">
    {#each serviceLists as service}
      <div class="w-62 card cursor-pointer rounded-sm text-center shadow">
        <p class="mb-10 bg-slate-500 py-2 text-center text-2xl text-white">PREMIUM</p>
        <p class="text-lg text-emerald-400">RP 500.000.00</p>
        <div class="py-5 text-slate-400">
          <p>Gratis Domain</p>
          <p>Max 10 Halaman</p>
          <p>Hosting 2GB</p>
          <p>Google Analis / Console</p>
        </div>
        <a class="btn-outline btn-success btn rounded-none" href={`${base}/service`}>Detail</a>
      </div>
    {/each}
  </div>
</section>

<section class="container mb-40 mt-40 flex flex-col text-center">
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
          <!-- <p class="leading-relaxed">{service.description}</p> -->
        </div>
        <a
          class="btn-outline btn-success btn m-auto my-2 w-52 rounded-full normal-case"
          href={`${base}/service`}>Read More</a>
      </div>
    {/each}
  </div>
</section>

<section class="container pt-32">
  <h2 class=" text-center text-3xl font-bold md:text-4xl">
    <span class="bg-gradient-to-l from-neutral to-primary bg-clip-text text-transparent">
      Galery
    </span>
  </h2>
  <p class="text-center text-slate-500">
    Please check some of the website creation work that we have done, you can use it as a web design
    reference.
  </p>
  <SliderExample />
</section>
