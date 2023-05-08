<script lang="ts">
	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';
	import Heading from './heading.svelte';
	import Footer from './footer.svelte';
  
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
  
	handleSession(page);
</script>

<svelte:head>
	<title>✨Spellcard.io</title>
	<link rel="icon" href="https://fav.farm/✨" />
</svelte:head>

<div class="background"></div>
  
<Heading />
  
<div class="content-container">
	<slot />
</div>
  
<style>
	.background {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-image: url('portalsback.png');
	  background-size: cover;
	  background-position: center;
	  z-index: -1;
	}
  
	.content-container {
	  position: relative;
	  z-index: 1;
	}
	/* ... other existing styles ... */
</style>