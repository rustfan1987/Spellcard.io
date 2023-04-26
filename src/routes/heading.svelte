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
<head><link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Permanent+Marker&family=Saira+Stencil+One&display=swap" rel="stylesheet"></head>

<div class="mx-44">
<nav class="z-10 ml-1 mt-2  flex   border-x-indigo-50 border  rounded-md bg-gradient-to-r from-slate-900 "  >
	<a class="ml-7 tracking-widest font-bruno-ace unstyled text-medium   text-sky-300" href="/">
		<b>🃏Spellcard</b>
	</a>
	<a class="tracking-widest font-bruno-ace unstyled text-medium mr-4  text-white" href="/">
		<b>.io</b>
	</a>

	<div class="ml-12 pl-2 font-allerta-stencil text-base flex items-center gap-4 text-sky-300">
		<ol class="opacity-90 flex space-x-4">
			<li>
				<a class="unstyled text-white" href="/dashboard">Create</a>
			</li>
			<li>
				<a class="unstyled text-white" href="/blog">Spellbook</a>
			</li>

			<li>
				<a class="unstyled text-white" href="/about">Team Leviathan</a>
			</li>

			{#if $user}
				<li>
					<form method="POST" action="/logout" use:enhance>
						<button class="text-white" type="submit">Log out</button>
					</form>
				</li>
			{/if}
		</ol>
	</div>
	
	
</nav>
</div>

