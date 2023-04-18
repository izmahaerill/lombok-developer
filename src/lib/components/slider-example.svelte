<script lang="ts">
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'

  onMount(() => {
    register()
  })

  // Docs: https://swiperjs.com/
</script>

<swiper-container
  class="flex min-h-screen items-center justify-start"
  navigation="true"
  loop="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 4</swiper-slide>
  <swiper-slide>Slide 5</swiper-slide>
</swiper-container>

<style lang="postcss">
  swiper-slide {
    text-align: center;
  }
</style>
