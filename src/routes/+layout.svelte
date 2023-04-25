<script lang="ts">
	import { page } from '$app/stores'
	import { handleSession } from '@lucia-auth/sveltekit/client'
	import Heading from './heading.svelte'
	import Footer from './footer.svelte'

	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'

	handleSession(page)
</script>

<svelte:head>
	<title>Dataspells</title>
	<link rel="icon" href="https://fav.farm/✨" />
</svelte:head>


<div class="background bg-fixed bg-cover bg-center bg-no-repeat h-screen" 
	 style="background-image: url('indexBackground.png'); background-attachment: fixed;">
</div>

<Heading />

<div class="content-container">
	<slot />
</div>






<style>
	.background {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.content-container {
		position: relative;
		z-index: 1;
	}
	/* ... other existing styles ... */
</style>







