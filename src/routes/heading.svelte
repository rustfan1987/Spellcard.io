<script lang="ts">
	import { enhance } from '$app/forms'
	import { getUser } from '@lucia-auth/sveltekit/client'
	import { LightSwitch } from '@skeletonlabs/skeleton'

	const user = getUser()
</script>

<nav class="container mt-2 mr-4 flex justify-center">
	<a class="unstyled text-xl mr-4 " href="/">
		<b>🔥 Dataspells</b>
	</a>

	<div class="flex items-center gap-4">
		<ol class="flex space-x-4">
			<li>
				<a class="unstyled muted" href="/blog">Spellbook</a>
			</li>
			<li>
				<a class="unstyled muted" href="/dashboard">Spells</a>
			</li>
			<li>
				<a class="unstyled muted" href="/about">Team Leviathan</a>
			</li>

			{#if $user}
				<li>
					<form method="POST" action="/logout" use:enhance>
						<button class="muted" type="submit">Log out</button>
					</form>
				</li>
			{/if}
		</ol>


	</div>
</nav>
