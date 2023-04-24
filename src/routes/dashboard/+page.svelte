<script lang="ts">
	import { date, truncate } from '$lib/utils'

	export let data
</script>


<div class="my- flex justify-center">

</div>

<div class="container ml-48 flex justify-center">
	<div style="position: absolute; top: 48px;">
	  <div class="flex justify-center mt-2">
		<a class="inline-block bg-slate-500 hover:bg-blue-600 rounded-lg px-4 py-2 text-white font-bold capitalize" href="/dashboard/create">
		  + Create a new Spell
		</a>
	  </div>
	</div>
  </div>



<div	class=" Gridbox flex justify-center bg-fixed bg-cover bg- center"
>
	<div class="mt-16 pt-7 grid grid-cols-5 gap-5">
		{#each data.posts as post, i}
			<div
				class="mt-2 max-w-8x1  flex justify-center overflow-x-auto  bg-transparent "
			>
				<div class="mb-2 mt-0 overflow-y-auto">
					<div
						style="background-image: url('SpellCard_Test_BG.png');"
						class="spellcard rounded-lg border-4 border-slate-900  bg-gradient-to-r from-slate-200 to-slate-300 bg-cover bg-center p-1 shadow-md"
					>
						<!-- Your post content here -->
						<div class="mt-4 mb-1 flex justify-around ">
							<button class="h-6 w-6 rounded"
								><img
									src="./Button_Favorite.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="h-6 w-6 rounded"
								><img
									src="./Button_Delete.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="h-6 w-6 rounded"
								><img
									src="./Button_Save.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="h-6 w-6 rounded"
								><img
									src="./Button_Share.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="h-6 w-6 rounded"
								><img
									src="./Button_Games.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
						</div>
						<div class="mt-1.5">
							<div class=" flex justify-center ">
								<div class="mb-2.5 flex flex-col justify-between ">
									<button class="h-6 w-6 rounded"
										><img
											src="./Button_Trinket.png"
											alt="Trinket Icon"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-6 rounded"
										><img
											src="./Button_Copy.png"
											alt="Save Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-6 rounded"
										><img
											src="./Button_Settings.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
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
									<button class="h-6 w-6 rounded"
										><img
											src="./Button_Emblem.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-6 rounded"
										><img
											src="./Button_Tavern.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-6 rounded"
										><img
											src="./Button_Crypto.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>
							</div>
						</div>

						<div class="mt-1.5 flex justify-center">
							<a
								class=" unstyled font-semibold capitalize text-white"
								href="/blog/{post.slug}"
							>
								{post.title}
							</a>
						</div>

						<div class="relative ml-2 mt-3.5 mr-2 flex overflow-x-hidden">
							<div
								class=" text-bold animate-marquee whitespace-nowrap text-white"
							>
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
								<img
									src="/cheems.fw.png"
									alt="cheems"
									style="width: 45px; height: 80px;"
								/>
							</div>
						</div>

						<!-- Public/Private signafier, image, members online -->
						<div class="mb- grid grid-cols-3  items-start">
							<div class="ml-6 mt-1 flex flex-col ">
								<span class=" mt-1 mb-1 ml-0.5 text-xs text-white">
									Public
								</span>

								<span class="mt- ml-1.5 mt-0.5 text-sm text-green-500"
									>Size</span
								>
							</div>
							<div class="mt-3 flex justify-center">
								<img
									src="/cheems.fw.png"
									alt="Favicon"
									style="width: 35px; height: 35px;"
								/>
							</div>

							<div class="flex flex-col ">
								<span
									class="mt-2 mr-6 inline-block text-center text-xs text-white"
									>15</span
								>

								<span class="inline-block text-xs text-white">
									{date(post.createdAt)}
								</span>
							</div>
						</div>

						<div class="mb-1 h-2 rounded-full bg-gray-300">
							<div
								class="h-full rounded-full bg-gradient-to-r from-black to-blue-700"
							/>
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

						<p
							class="mt-3 flex justify-center text-gray-600 dark:text-gray-400"
						>
							{date(post.createdAt)}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<img class=" z-50 pointer-events-none decoration-left fixed left-0 top-0 h-screen w-auto object-contain" src="BrushLeft.png" alt="Left decoration" />
<img class="z-50 pointer-events-none decoration-right fixed right-0 top-0 h-screen w-auto object-contain" src="BrushRight.png" alt="Right decoration" />
<img class="z-49 pointer-events-none decoration-right fixed bottom-0 w-screen object-contain" src="BrushBottom.png" alt="Right decoration" />

<style>
	.spellcard {
		width: 200px; /* Set the fixed width */
		height: 420px; /* Set the fixed height */
		overflow: hidden; /* Hide overflowing content */
		/* ... other existing styles ... */
	}
</style>
