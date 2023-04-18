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
  <swiper-slide><img src="https://media.istockphoto.com/id/1399624722/id/foto/keragaman-bisnis-tim-multi-etnis-dalam-diskusi.jpg?s=612x612&w=0&k=20&c=q98KNIKGRkeww0orm4Z0hCciLGcTDxlHI-jNEv3XjU0=" alt=""></swiper-slide>
  <swiper-slide><img src="https://media.istockphoto.com/id/1369953931/id/foto/bertemu-dengan-para-pebisnis-untuk-berdiskusi-dan-bertukar-pikiran-tentang-laporan-keuangan.jpg?s=612x612&w=0&k=20&c=fUSW2KL2Yu2I0dMtcUgw1Tk1bVqVHJqA4MgjlbPTtzA=" alt=""></swiper-slide>
  <swiper-slide><img src="https://media.istockphoto.com/id/1387573607/id/foto/orang-orang-mengevaluasi-hasil-positif-dari-pekerjaan-pada-grafik-di-kantor-mata-uang-kripto.jpg?s=612x612&w=0&k=20&c=bd96tfYALwidXSUmZEvASe_NsXVqgpKovoAe-_nJGvQ=" alt=""></swiper-slide>
  <swiper-slide><img src="https://media.istockphoto.com/id/1443559562/id/foto/tim-arsitek-asia-berbicara-tentang-proyek-baru-di-kantor.jpg?s=612x612&w=0&k=20&c=cdvV6hRIxggbLaZ5CLArO--IeyYGWi7lNMfy1RsLhME=" alt=""></swiper-slide>
  <swiper-slide><img src="https://media.istockphoto.com/id/1415537841/id/foto/desainer-grafis-asia-yang-bekerja-di-kantor-seniman-desainer-kreatif-ilustrator-konsep.jpg?s=612x612&w=0&k=20&c=DybWgukLcWReIUIQwN_G9nBYn7L2eo9ZD1wv6Bpp-50=" alt=""></swiper-slide>
</swiper-container>

<style lang="postcss">
  swiper-slide {
    text-align: center;
    @apply bg-slate-800;
  }

</style>
