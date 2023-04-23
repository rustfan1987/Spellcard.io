<script lang="ts">

	import { date } from '$lib/utils'

	export let data
</script>

<main class="container mt-32">
	<h1 class="capitalize">New Spells</h1>

	<div class=" spellcard bg-gradient-to-r from-slate-200 to-slate-300 pt-5 shadow-md rounded-lg p-1 bg-cover bg-center border-4 border-slate-900">
		{#each data.posts as post, i}
			
				
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

							  
					<p></p>
					<p class="mt-4 text-gray-600 dark:text-gray-400">
						{date(post.createdAt)}
					</p>
				
					
			

			

			{#if data.posts.length > 1 && data.posts.length !== i + 1}
				<hr />
			{/if}
		{/each}

	</div>
</main>
