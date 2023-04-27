<script lang="ts">
  import { base } from '$app/paths'
  import SliderExample from '$lib/components/slider-example.svelte'
  import { serviceLists } from '$lib/constants'
  import { businessDecisions, devProductivity } from '$lib/images'
  import Iconify from '@iconify/svelte'
</script>

<div class="relative flex h-screen flex-col items-center justify-center overflow-hidden px-10">
  <div class="border-top w-full rounded-md border-t-4 border-gray-700 bg-white p-6 shadow-md lg:max-w-lg">
    <h1 class="bg-gradient-to-l from-primary to-neutral bg-clip-text text-center text-3xl font-semibold text-transparent">Lombok Developer</h1>
    <form class="space-y-4">

      <div>
        <input type="text" placeholder="Email" class="input-bordered input my-2 w-full" />
        <input type="password" placeholder="password" class="input-bordered input my-2 w-full" />
        <input type="text" placeholder="message" class="input-bordered input my-2 w-full" />
      </div>

      <a href={`${base}/service`} class="text-xs text-gray-600 hover:text-blue-600 hover:underline">Forget Password?</a>
      <div class="text-center">
        <button class="btn-outline btn-success btn w-full">send you message</button>
      </div>
    </form>
  </div>
</div>
