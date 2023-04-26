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
	<title>Dataspells</title>
	<link rel="icon" href="https://fav.farm/✨" />
  </svelte:head>

 
  <div style="background-image: url('indexBackground.png'); background-attachment: fixed; transform: scale(3.3); background-attachment: fixed;"
   class="background"></div>
  
  <Heading />
  
  <div class="content-container">
	<slot />
  </div>
  
  <style>
	.background {
	  position: fixed;
	  width: 100%;
	  height: 100%;
	  background-image: url('indexBackground.png');
	  background-attachment: fixed;
	  background-color: rgba(0, 0, 0, 0.709); /* adjust the alpha value to make it darker */
	  z-index: -1;
	  animation: hexagonal-scroll 600s linear infinite;
	}
  
	@keyframes hexagonal-scroll {
	  0% {
		background-position: 0% 50%;
	  }
	  25% {
		background-position: 35% 25%;
	  }
	  50% {
		background-position: 100% 50%;
	  }
	  75% {
		background-position: 65% 75%;
	  }
	  100% {
		background-position: 0% 50%;
	  }
	}
  
	.content-container {
	  position: relative;
	  z-index: 1;
	}
	/* ... other existing styles ... */
  </style>