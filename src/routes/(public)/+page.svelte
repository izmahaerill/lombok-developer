<script lang="ts">
  import { base } from '$app/paths'
  import Price from '$lib/components/home/price.svelte'
  import SliderExample from '$lib/components/slider-example.svelte'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
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
        <div class="space-x-5">
          <a class="btn capitalize" href={`${base}/services`}>Get started</a>
          <a class="btn-primary btn capitalize" href={`${base}/contact`}>Get in touch</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container py-52">
  <div class="text-center">
    <h2 class="mb-5 text-4xl font-bold">
      <span class="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">
        Your Digital Business Solution Partner
      </span>
    </h2>
    <p class="leading-relaxed">
      Website development services from Lombok Developer are ready to help you master the online
      world. Enjoy the convenience of managing a website, which is equivalent to having a
      professional IT staff who can help you build a website. Order your website now!
    </p>
  </div>
</section>

<section class="flex flex-col items-center justify-center lg:flex-row">
  <div class="container bg-primary py-16 md:py-10 lg:py-24">
    <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
  </div>
  <div class="container bg-neutral py-20 text-neutral-content md:py-28 lg:py-14">
    <h2 class="mb-5 text-4xl font-bold">
      <span class="bg-gradient-to-r from-primary to-neutral-content bg-clip-text text-transparent">
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
          <img class="h-fit w-fit" src={devProductivity} alt="Dev Productivity" />
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
  <p>
    Please check some of the website creation work that we have done, you can use it as a web design
    reference.
  </p>
  <SliderExample />
</section>
