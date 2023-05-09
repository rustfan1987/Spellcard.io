<script lang="ts">
	import { enhance } from '$app/forms'
	import { getUser } from '@lucia-auth/sveltekit/client'
	import { LightSwitch } from '@skeletonlabs/skeleton'

	const user = getUser()
</script>


<style>
	nav {
		z-index: 10;
		position: fixed;
		width: 100%;
	}
	.font-bruno-ace {
    font-family: 'Bruno Ace', cursive;
  }

  .font-allerta-stencil {
	font-family: 'Allerta Stencil', sans-serif;
	
	
  }
</style>

<link href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap" rel="stylesheet">
<head><link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Permanent+Marker&family=Saira+Stencil+One&display=swap" rel="stylesheet">
</head>

<div class="mx-44">
	<nav class="z-10 ml-2 mt-2  flex   border-x-indigo-50 border  rounded-md bg-gradient-to-r from-slate-900 "  >
		<a class="ml-5 pl-0.5 tracking-widest font-bruno-ace unstyled text-medium   text-sky-300" href="/">
			<b>✨Spellcard</b>
		</a>
		<a class="tracking-widest font-bruno-ace unstyled whitespace-nowraptext-medium mr-4  text-white" href="/">
			<b>.io</b>
		</a>
	
		<div class="w-full justify-center mr-44 pr-80 font-allerta-stencil text-base flex items-center gap-4 text-sky-300">
			<ol class="opacity-90 flex space-x-4 whitespace-nowrap">
		  
			  <a class="unstyled whitespace-nowrap text-white flex items-center" href="/dashboard">
				<img src="/NaturesGift_Icon.png" alt="Create Icon" class="h-6 w-6 mr- flex-shrink-0" />
				Create
			  </a>
		  
			  <a class="unstyled whitespace-nowrap text-white flex items-center" href="https://linktr.ee/spellcard">
				<img src="/GlacialRevenantAura.png" alt="Spellbook Icon" class="h-6 w-6 mr- flex-shrink-0" />
				Links
			  </a>
		  
			  <a class="unstyled whitespace-nowrap text-white flex items-center" href="https://spellcard-io.gitbook.io/spellcard.io/">
				<img src="/FerventHeatAura.png" alt="Team Icon" class="h-6 w-6 mr- flex-shrink-0" />
				About
			  </a>
		  
			  <a class="unstyled whitespace-nowrap text-white flex items-center" href="/UserSettings">
				<img src="/NegativeWavelengthAura.png" alt="Team Icon" class="h-6 w-6 mr- flex-shrink-0" />
				Settings
			  </a>

			  {#if $user}
		  
			  <form method="POST" action="/logout" use:enhance>
				<button class="text-white whitespace-nowrap flex items-center mr-7 pr-0.5" type="submit">
				  <img src="/Euphoria_Icon.png" alt="Logout Icon" class="h-6 w-6 mr- flex-shrink-0" />
				  Log out
				</button>
				
				
			  </form>
		  
			  {/if}
		  
			  
	
		  
			</ol>
		  </div>
	</nav>
	</div>


