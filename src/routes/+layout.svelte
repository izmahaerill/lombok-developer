<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte'
  import '../app.postcss'
</script>

<svelte:head>
  <title>Lombok Developer</title>
</svelte:head>

<Navbar />
<div class="container">
  <slot />
</div>
