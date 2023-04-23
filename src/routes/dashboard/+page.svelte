<script lang="ts">
	import { date, truncate } from '$lib/utils'

	export let data
</script>

<div class="my-8 flex justify-center">
	<h1 class="font">My Spells</h1>
</div>

<div class="my-4 flex justify-center">
	<a class="font-bold capitalize underline-offset-4" href="/dashboard/create">
		+ Create a new Spell
	</a>
</div>

	<div class="flex justify-center">
	<div class="grid grid-cols-5 gap-2">
		{#each data.posts as post, i}

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
								{post.description}
								<img src="/cheems.fw.png" alt="cheems" style="width: 45px; height: 100px;">
							  </div>

							  

					<p class="mt-4 text-gray-600 dark:text-gray-400">
						{date(post.createdAt)}
					</p>					
			
					</div></div></div>
			


		{/each}
	</div></div>