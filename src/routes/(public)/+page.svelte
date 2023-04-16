<script lang="ts">
  import { base } from '$app/paths'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
</script>

<section class="flex min-h-screen flex-col items-center justify-center gap-10 lg:flex-row-reverse">
  <div class="w-full">
    <img class="h-fit w-fit" src={devProductivity} alt="Dev Productivity" />
  </div>
  <div class="w-full">
    <h1 class="mb-5 text-4xl font-extrabold md:text-5xl">
      <span class="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">
        Your Digital Business
      </span> Solution Partner
    </h1>
    <p class="mb-10 leading-relaxed">
      Website development services from Lombok Developer are ready to help you master the online
      world. Enjoy the convenience of managing a website, which is equivalent to having a
      professional IT staff who can help you build a website. Order your website now!
    </p>
    <a class="btn-primary btn normal-case" href={`${base}/contact`}>Get in Touch</a>
  </div>
</section>
<section class="mb-40 flex flex-col items-center justify-center gap-10 lg:flex-row">
  <div class="w-full">
    <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
  </div>
  <div class="w-full">
    <h2 class="mb-5 text-3xl font-bold md:text-4xl">
      <span class="bg-gradient-to-l from-primary to-neutral bg-clip-text text-transparent">
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
<section class="mb-32 flex flex-col items-center text-center">
  <h2 class="mb-5 text-3xl font-bold md:text-4xl">
    <span class="bg-gradient-to-l from-primary to-neutral bg-clip-text text-transparent">
      Lombok Developer Services
    </span>
  </h2>
  <p class="mb-10 leading-relaxed">
    Are you looking for website development services in Lombok? Lombok Developer is here to provide
    business friends, SMEs, and professionals in Lombok with effective website solutions according
    to your target market. Our services include graphic design, web development, web design
    templates, custom web programming, SEO services, etc.
  </p>
  <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
    {#each serviceLists as service}
      <div class="card h-72 w-72 shadow">
        <figure class="px-10 pt-10">
          <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
        </figure>
        <div class="card-body items-center">
          <h2 class="card-title">{service.title}</h2>
          <p class="leading-relaxed">{service.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
