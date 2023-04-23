<script lang="ts">
	import { enhance } from '$app/forms'
	import { date, truncate } from '$lib/utils'

	export let data
</script>

<main class="container mt-32">
	<h1 class="font">My Spells</h1>

	<div class="mt-8">
		<a class="font-bold capitalize underline-offset-4" href="/dashboard/create">
			+ Create a new Spell
		</a>
	</div>

	<div class="">
		<table class="">


			<tbody><div class="box-content h-400 w-200 spellcard bg-gradient-to-r from-slate-200 to-slate-300 pt-5 shadow-md rounded-lg p-1 bg-cover bg-center border-4 border-slate-900">
				{#each data.posts as post, i}
					
						<td>
							<div class="flex justify-around mb-1 mx-0 ">
								<button class="bg-blue-500 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">1</button>
								<button class="bg-blue-200 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">2</button>
								<button class="bg-blue-300 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">3</button>
								<button class="bg-blue-700 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">4</button>
								<button class="bg-blue-800 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">5</button>
							  </div>

							  <div class=" flex justify-center ">
								<div class="pr-2 flex flex-col justify-between ">
								  <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">A</button>
								  <button class="bg-blue-600 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">B</button>
								  <button class="bg-blue-700 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">C</button>
								</div>
								
								<div class="pr-1.5 pl-1.5"><img src="./cheems.fw.png" alt="Favicon" style="width: 80px; height: 80px;"></div>
								
								<div class="pl-2.5 flex flex-col justify-between">
								  <button class="bg-blue-700 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">$</button>
								  <button class="bg-blue-800 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">!</button>
								  <button class="bg-blue-900 hover:bg-blue-600 text-white font-medium w-6 h-6 rounded">?</button>
								</div>
							  </div>
							<a class="pt-1 text-lg font-medium mt-1 text-center flex justify-center" href="/dashboard/edit/{post.slug}">
								{truncate(post.title)}
							</a>

							<div class="relative flex overflow-x-hidden"> 
								<div class=" text-red-900 text-bold animate-marquee whitespace-nowrap">
								  <span class="px-1">#Cheems</span>
								  <span class="px-1">#Nice</span>
								</div></div>

						<div class="flex justify-center">{date(post.createdAt)}</div>
						<div class="flex justify-center"></div>{post.published ? 'Yes' : 'No'}

							<form
								method="POST"
								action="?/delete&slug={post.slug}"
								use:enhance
							>
								<button class="btn variant-soft-error" type="submit">
									Delete
								</button>
							</form>

					
				{/each}
			</div>
		</tbody>
		</table>
	</div>
</main>
