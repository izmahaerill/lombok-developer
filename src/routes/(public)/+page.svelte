<script lang="ts">
  import { base } from '$app/paths'
  import SliderExample from '$lib/components/slider-example.svelte'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
  import Iconify from '@iconify/svelte'

</script>

<section>
  <div class="hero min-h-screen" style="background-image: url(https://wp.w3layouts.com/workcore/wp-content/themes/workcore/assets/images/banner5.jpg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold"> <span>Lombok </span>Developer</h1>
          <p class="mb-5">The Unique Solutions for Your Business, The Best Solutions For Your Business</p>
          <button class="btn btn-outline text-white">Get started</button>

        </div>
      </div>
    </div>
</section>


  <section
    class="py-52 container">
    <div class="w-full">
      <h1 class="mb-5 text-4xl font-extrabold md:text-4xl">
        <span class="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">
          Your Digital Business
        </span> Solution Partner
      </h1>
      <p class="mb-10 leading-relaxed">
        Website development services from Lombok Developer are ready to help you master the online
        world. Enjoy the convenience of managing a website, which is equivalent to having a
        professional IT staff who can help you build a website. Order your website now!
      </p>
      <a class="btn btn-outline btn-success px-4 normal-case" href={`${base}/contact`}>Get in Touch</a>
    </div>
  </section>



  <section class=" bg-slate-500 text-white  mb-40 flex flex-col  items-center justify-center gap-10 lg:flex-row p-10">
    <div class="w-full">
      <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
    </div>
    <div class="w-full">
      <h2 class="mb-5 text-3xl font-bold md:text-4xl">
        <span class="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
          Solutions for Your Business's Digital Branding Needs
        </span>
      </h2>
      <p class="text-justify leading-relaxed">
        Lombok Developer is a group of young people who are creative in interactive multimedia and
        use it to develop information technology in Lombok and Mataram. They aim to improve people's
        lives, strengthen economic resilience, and create more business opportunities for digital
        entrepreneurs. They provide business solutions ranging from design, website development,
        software development, and application development.
      </p>
    </div>
  </section>



  <section class="container mb-32 flex flex-col items-center text-center">
    <h2 class="mb-5 text-3xl font-bold md:text-4xl">
      <span class="bg-gradient-to-l from-primary to-neutral bg-clip-text text-transparent">
        Lombok Developer Services
      </span>
    </h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {#each serviceLists as service}
        <div class="card  h-72 w-72 shadow">
          <figure class="px-5 pt-10">
            <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
          </figure>
          <div class="card-body items-center cursor-pointer">
            <h2 class="card-title">{service.title}</h2>
            <!-- <p class="leading-relaxed">{service.description}</p> -->
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="container">
    <h2 class="mb-5 text-3xl font-bold md:text-4xl text-center">
      <span class="bg-gradient-to-l from-neutral to-primary bg-clip-text text-transparent">
        Recent Project
      </span>
    </h2>
    <SliderExample />
  </section>



