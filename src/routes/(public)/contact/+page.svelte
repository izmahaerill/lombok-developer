<script lang="ts">
  import { base } from '$app/paths'
  import SliderExample from '$lib/components/slider-example.svelte'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
  import Iconify from '@iconify/svelte'
</script>




<section class="container py-32">
    <div class="">
        <p class="text-2xl lg:text-3xl font-semibold text-emerald-300">CONTACT OUR CREATIVE TEAM</p>
        <p class="text-gray-400">Got any Questions?</p>
    </div>
</section>

<section class="container flex justify-between flex-col md:flex lg:flex-row">
    <div class="card rounded-sm shadow-md  p-5 lg:leading-loose">
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
    
    <div class="text-gray-600 body-font">
        <div class="card rounded-sm shadow-md p-5">
            <div>
                <h2 class="text-gray-900 text-xl mb-1 font-medium title-font">Contact Lombok Developer</h2>
        
                <div class="relative mb-4">
                    <label for="fullname" class="leading-7 text-sm text-gray-600">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Full Name"
                        class="w-full rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>


                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-full rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>


                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        class="w-full  rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                </div>
                <a class="btn btn-outline btn-success w-full" href={`${base}/contact`}>Seand meassage</a>
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
				title="maps"/>
		</div>
</section>


