<script lang="ts">
  import { base } from '$app/paths'
  import SliderExample from '$lib/components/slider-example.svelte'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
  import Iconify from '@iconify/svelte'
</script>

<section class="container py-32">
  <div class="">
    <p class="text-2xl font-semibold text-emerald-300 lg:text-3xl">CONTACT OUR CREATIVE TEAM</p>
    <p class="text-gray-400">Got any Questions?</p>
  </div>
</section>

<section class="container flex flex-col justify-between md:flex lg:flex-row">
  <div class="card rounded-sm p-5 shadow-md lg:leading-loose">
    <div class="icon">
      <span class="fas fa-map-marker-alt primary-clr-bg" /><span>Company Address</span>
      <p>Garden View Residence, Jalan Transmigrasi No. A8, Monjok Timur, Mataram.</p>
    </div>

    <div class="icon">
      <span class="fa fa-phone text-primary" /> Phone Number
      <p>+62 878-6445-3407</p>
    </div>

    <div class="icon">
      <span class="far fa-envelope" /> Send Email
      <p>mail@lombokdeveloper.co.id</p>
    </div>
  </div>

  <div class="body-font text-gray-600">
    <div class="card rounded-sm p-5 shadow-md">
      <div>
        <h2 class="title-font mb-1 text-xl font-medium text-gray-900">Contact Lombok Developer</h2>

        <div class="relative mb-4">
          <label for="fullname" class="text-sm leading-7 text-gray-600">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            class="w-full rounded border border-gray-300 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
        </div>

        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full rounded border border-gray-300 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
        </div>

        <div class="relative mb-4">
          <label for="message" class="text-sm leading-7 text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            class="h-32 w-full resize-none rounded border border-gray-300 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
        </div>
        <a class="btn-outline btn-success btn w-full" href={`${base}/contact`}>Seand meassage</a>
      </div>
    </div>
  </div>
</section>

<section class="container py-10">
  <div class="maps">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.164269010643!2d116.12074221377988!3d-8.58019957258489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc0a8b5eb06c7%3A0xc1711af9da0deb40!2sGarden%20View%20Residence!5e0!3m2!1sid!2sid!4v1677613153842!5m2!1sid!2sid"
      width="100%"
      height="417"
      style="border: 2px solid #6ee7b7;"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="maps" />
  </div>
</section>
