<script lang="ts">
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'

  onMount(() => {
    register()
  })
</script>

<swiper-container pagination="true" loop="true" pagination-clickable="true" mousewheel="true">
  <swiper-slide class="bg-neutral">
    <div class="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div class="w-full">
        <img
          src="https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg"
          alt="RF._.studio" />
      </div>
      <div class="w-full">
        <p class="p-10 text-neutral-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto asperiores dolor cum
          harum maiores modi numquam ex vitae, illum doloribus.
        </p>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide class="bg-neutral">
    <div class="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div class="w-full">
        <p class="p-10 text-neutral-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto asperiores dolor cum
          harum maiores modi numquam ex vitae, illum doloribus.
        </p>
      </div>
      <div class="w-full">
        <img
          src="https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg"
          alt="RF._.studio" />
      </div>
    </div>
  </swiper-slide>
</swiper-container>
