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
</style>

<nav class="z-10 position-relative mt-6 mr-4 flex justify-center ">
	<a class="unstyled text-xl mr-4 text-white" href="/">
		<b>🔥 Dataspells</b>
	</a>

	<div class=" flex items-center gap-4">
		<ol class="flex space-x-4">
			<li>
				<a class="unstyled text-white" href="/dashboard">Spells</a>
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


