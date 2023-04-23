<script lang="ts">
	import { date } from '$lib/utils'

	export let data
</script>

<style>
	.spellcard {
	  background-image: url(SpellCard_Test_BG.png);
	  width: 200px; /* Set the fixed width */
	  height: 420px; /* Set the fixed height */
	  overflow: hidden; /* Hide overflowing content */
	  /* ... other existing styles ... */
	}

	.Gridbox {
		background-image: url(indexBackground.png);
	}
  </style>



<h1 class=" my-8 flex justify-center capitalize">New Spells</h1>

<div class="Gridbox flex justify-center">
	<div class="mt-6 grid grid-cols-5 gap-2">
		{#each data.posts as post, i}
			<div
				class="max-w-8xl  flex justify-center overflow-x-auto  bg-transparent "
			>
				<div class="mb-2  overflow-y-auto">
					<div
						class="spellcard rounded-lg border-4 border-slate-900  bg-gradient-to-r from-slate-200 to-slate-300 bg-cover bg-center p-1 shadow-md"
					>
						<!-- Your post content here -->
						<div class="mt-4 mb-1 flex justify-around ">
							<button
							class="h-6 w-6 rounded"
							><img src="./Button_Favorite.png" alt="Edit Card" class="h-full w-full" ></button
						>
							<button
							class="h-6 w-6 rounded"
							><img src="./Button_Delete.png" alt="Edit Card" class="h-full w-full" ></button
						>
							<button
							class="h-6 w-6 rounded"
							><img src="./Button_Save.png" alt="Edit Card" class="h-full w-full" ></button
						>
							<button
							class="h-6 w-6 rounded"
							><img src="./Button_Share.png" alt="Edit Card" class="h-full w-full"></button
						>
							<button
							class="h-6 w-6 rounded"
							><img src="./Button_Games.png" alt="Edit Card" class="h-full w-full"></button
						>
						</div>
						<div class="mt-1.5">
						<div class=" flex justify-center ">
							<div class="mb-2.5 flex flex-col justify-between ">
								<button
								class="h-6 w-6 rounded"
								><img src="./Button_Trinket.png" alt="Trinket Icon" class="h-full w-full" style="width: 40px; height: 40px;"  ></button
							>
								<button
								class="h-6 w-6 rounded"
								><img src="./Button_Copy.png" alt="Save Card" class="h-full w-full" style="width: 40px; height: 40px;"></button
							>
								<button
								class="h-6 w-6 rounded"
								><img src="./Button_Settings.png" alt="Edit Card" class="h-full w-full"style="width: 40px; height: 40px;" ></button
							>
							</div>

							<div class="mx-2">
								<img
									src="./cheems.fw.png"
									alt="Favicon"
									style="width: 103px; height: 102x;"
								/>
							</div>

							<div class="mb-2.5 flex flex-col justify-between ">
								<button
								class="h-6 w-6 rounded"
								><img src="./Button_Emblem.png" alt="Edit Card" class="h-full w-full"style="width: 40px; height: 40px;" ></button
							>
								<button
								class="h-6 w-6 rounded"
								><img src="./Button_Tavern.png" alt="Edit Card" class="h-full w-full"style="width: 40px; height: 40px;" ></button
							>
								<button
								class="h-6 w-6 rounded"
								><img src="./Button_Crypto.png" alt="Edit Card" class="h-full w-full"style="width: 40px; height: 40px;" ></button
							>
							</div>
						</div>
						</div>

						<div class="mt-1.5 flex justify-center">
							<a
								class=" unstyled font-semibold capitalize text-white"
								href="/blog/{post.slug}">
								{post.title}
							</a>
						</div>

						<div class="ml-2 mt-3.5 mr-2 relative flex overflow-x-hidden">
							<div
								class=" text-bold animate-marquee whitespace-nowrap text-white">
								<span class="px-1">#Cheems</span>
								<span class="px-1">#Nice</span>
								<span class="px-1">#Cheems</span>
								<span class="px-1">#Cheems</span>
								<span class="px-1">#Cheems</span>
								<span class="px-1">#Nice</span>
								<span class="px-1">#Nice</span>
								<span class="px-1">#Nice</span>
							</div>
						</div>

						<div class="mt-1 ml-2 flex justify-between">

							<p class="mt-1 ml-2  text-xs text-black">
								{post.description}
							</p>


							<div class="mt-2 mr-1.5">
							<img src="/cheems.fw.png"
								alt="cheems"
								style="width: 45px; height: 80px;"/></div>
						</div>

						<!-- Public/Private signafier, image, members online -->
						<div class="grid grid-cols-3 items-start  mb-">
							<div class="ml-6 mt-1 flex flex-col ">

							  <span	class=" mt-1 mb-1 ml-0.5 text-xs text-white">
								Public
							  </span>


							  <span class="ml-1.5 mt-0.5 text-sm text-green-500 mt-">Size</span>


							</div>
							<div class="mt-3 flex justify-center">
							  <img
								src="/cheems.fw.png"
								alt="Favicon"
								style="width: 35px; height: 35px;"
							  />
							</div>


							<div class="flex flex-col ">


							  <span class="inline-block mt-2 mr-6 text-center text-xs text-white">15</span>

							  <span class="text-xs inline-block text-white">
								{date(post.createdAt)}
							  </span>


							</div>


						  </div>

						  <div class="bg-gray-300 h-2 rounded-full mb-1">
							<div class="bg-gradient-to-r from-black to-blue-700 h-full rounded-full"></div>
						  </div>


						<!-- Six emojis in a row -->
						<div class="mt-1.5 flex justify-between">
							<span class="text-1xl">😀</span>
							<span class="text-1xl">😂</span>
							<span class="text-1xl">😍</span>
							<span class="text-1xl">🤔</span>
							<span class="text-1xl">🤢</span>
							<span class="text-1xl">😡</span>
						</div>

						<p class="mt-3 text-gray-600 dark:text-gray-400 flex justify-center">
							{date(post.createdAt)}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
