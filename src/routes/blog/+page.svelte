<script lang="ts">
	import { slide } from 'svelte/transition'
	import { date } from '$lib/utils'

	export let data

	let search = ''

	$: filteredPosts = data.posts.filter((post) =>
		post.title.toLowerCase().includes(search.trim())
	)

	
</script>

<div class="	container mt-8 mb-8">
	<main class="container mt-8">
		<h1 class="flex justify-center capitalize">Search Spells</h1>

		<form on:input|preventDefault class="mt-8">
			<label for="search">
				<input
					type="search"
					autocomplete="off"
					class="input"
					name="search"
					id="search"
					bind:value={search}
				/>
			</label>
		</form>
	</main>
</div>


<div class="flex justify-center">
	<div class="grid grid-cols-5 gap-2">
				{#each filteredPosts as post, i}
				<div class="overflow-x-auto  bg-transparent flex justify-center  max-w-8xl ">
					<div class="overflow-y-auto  mb-2">	
					<div class="spellcard bg-gradient-to-r from-slate-200 to-slate-300  shadow-md rounded-lg p-1 bg-cover bg-center border-4 border-slate-900">
						<!-- Your post content here -->
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
			
			
									
									<a
										class="unstyled font-semibold capitalize text-primary-500"
										href="/blog/{post.slug}"
									>
										{post.title}
									</a>
			
									<div class="relative flex overflow-x-hidden"> 
										<div class=" text-red-900 text-bold animate-marquee whitespace-nowrap">
										  <span class="px-1">#Cheems</span>
										  <span class="px-1">#Nice</span>
										</div></div>
			
			
										<div class="mt-1 mb-1 flex justify-between">
											<p class="text-slate-900 text-xs text-center pr-0.5 mt-1.5">
			
												{post.description}
											</p>
											<img src="/cheems.fw.png" alt="cheems" style="width: 45px; height: 100px;">
										  </div>
			
										  
			
								<p class="mt-4 text-gray-600 dark:text-gray-400">
									{date(post.createdAt)}
								</p>					
						
								</div></div></div>
				{/each}
			</div>
		</div>

