<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte'
  import '../app.postcss'
</script>

<svelte:head>
  <title>Lombok Developer</title>
</svelte:head>

<Navbar />
<slot />
