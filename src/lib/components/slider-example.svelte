<script lang="ts">
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'

  onMount(() => {
    register()
  })

  // Docs: https://swiperjs.com/
</script>

<swiper-container class="flex py-20" navigation="true" loop="true">
  <swiper-slide>
    <div class="items-center justify-center lg:flex">
      <img
        src="https://media.istockphoto.com/id/1399624722/id/foto/keragaman-bisnis-tim-multi-etnis-dalam-diskusi.jpg?s=612x612&w=0&k=20&c=q98KNIKGRkeww0orm4Z0hCciLGcTDxlHI-jNEv3XjU0="
        alt="" />
      <p class="px-10 text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto asperiores dolor cum
        harum maiores modi numquam ex vitae, illum doloribus.
      </p>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="items-center justify-center lg:flex">
      <img
        src="https://media.istockphoto.com/id/1399624722/id/foto/keragaman-bisnis-tim-multi-etnis-dalam-diskusi.jpg?s=612x612&w=0&k=20&c=q98KNIKGRkeww0orm4Z0hCciLGcTDxlHI-jNEv3XjU0="
        alt="" />
      <p class="px-10 text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto asperiores dolor cum
        harum maiores modi numquam ex vitae, illum doloribus.
      </p>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="items-center justify-center lg:flex">
      <img
        src="https://media.istockphoto.com/id/1399624722/id/foto/keragaman-bisnis-tim-multi-etnis-dalam-diskusi.jpg?s=612x612&w=0&k=20&c=q98KNIKGRkeww0orm4Z0hCciLGcTDxlHI-jNEv3XjU0="
        alt="" />
      <p class="px-10 text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto asperiores dolor cum
        harum maiores modi numquam ex vitae, illum doloribus.
      </p>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class=" items-center justify-center lg:flex">
      <img
        src="https://media.istockphoto.com/id/1399624722/id/foto/keragaman-bisnis-tim-multi-etnis-dalam-diskusi.jpg?s=612x612&w=0&k=20&c=q98KNIKGRkeww0orm4Z0hCciLGcTDxlHI-jNEv3XjU0="
        alt="" />
      <p class="px-10 text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto asperiores dolor cum
        harum maiores modi numquam ex vitae, illum doloribus.
      </p>
    </div>
  </swiper-slide>
</swiper-container>

<style lang="postcss">
  swiper-slide {
    text-align: center;
    @apply bg-slate-900;
  }
</style>
