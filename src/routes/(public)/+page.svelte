<script lang="ts">
  import { base } from '$app/paths'
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
      Website Development Services from Lombok Developer, ready to help you master the online world.
      Enjoy the convenience of managing a website, equivalent to having a professional IT staff who
      can help you build a website. Order your Website now!
    </p>
    <a class="btn-primary btn normal-case" href={`${base}/contact`}>Get in Touch</a>
  </div>
</section>
<section class="flex min-h-screen flex-col items-center justify-center gap-10 lg:flex-row">
  <div class="w-full">
    <img class="h-fit w-fit" src={businessDecisions} alt="Business Decisions" />
  </div>
  <div class="w-full">
    <h2 class="mb-5 text-3xl font-bold md:text-4xl">
      <span class="bg-gradient-to-l from-primary to-neutral bg-clip-text text-transparent">
        Solutions for Digital Branding Needs for Your Business
      </span>
    </h2>
    <p class="leading-relaxed">
      Lombok Developer is a group of young people who are creative in interactive multimedia and use
      it to develop information technology in Lombok and Mataram. They aim to improve people's
      lives, strengthen economic resilience, and create more business opportunities for digital
      entrepreneurs. They provide business solutions ranging from design, website development,
      software development, and application development.
    </p>
  </div>
</section>
