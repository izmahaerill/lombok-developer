<script>
    import Content from '$lib/components/content.svelte';
    import global from '$lib/images/handphone.svg';
    let tab1Content = false;
	let tab2Content = false;

	function tab1() {
		tab1Content = !tab1Content;
		tab2Content = false;
	}
</script>


<section class="container py-32">
    <section>
	<div class="flex-col md:flex-wrap lg:flex-row justify-between mt-2">
		<div class="flex-col md:flex-wrap lg:flex-row mt-2">
			<img src={global} alt="" width="30rem">
			<button class="text-3xl font-bold mb-5 btn btn-outline btn-success" on:click={tab1}>View All project</button>
		</div>
	{#if tab1Content}
	<Content />	
	{/if}
	</div>

</section>
</section>