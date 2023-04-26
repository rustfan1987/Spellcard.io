<script lang="ts">
	import { date, truncate } from '$lib/utils'

	export let data

	import { onMount } from 'svelte';
  let brushBottomImage: HTMLElement;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const scrollProgress = scrollTop / 4; // Divide by 4 to make it half the speed of the previous implementation
      brushBottomImage.style.transform = `translateY(${scrollProgress}px)`;
    });
  }
  
</script>
<head>
	<link href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Permanent+Marker&family=Saira+Stencil+One&display=swap" rel="stylesheet"></head>

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



<div	class=" pt-0 Gridbox flex justify-center"
>
	<div class="grid-container mt-16 pt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-5">
		{#each data.posts as post, i}
		<div
				class="mt-2 max-w-8x1  flex justify-center overflow-x-auto  bg-transparent "
			>
				<div class="mb-2 mt-0 overflow-y-auto">
					<div
						style="background-image: url('SpellCard_Test_BG3.png');"
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

								<div class="mx-2 pr-0.5">
									<img
										src="./Avatar_Demon_1.png"
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

						<div class="mt-1 flex justify-center">
							<a
							  class="unstyled antialiased tracking-normal text-lg text-white font-allerta-stencil"
							  href="/blog/{post.slug}"
							>
							  {post.title}
							</a>
						  </div>

						<div class="relative ml-2 mt-3.5 mr-2 flex overflow-x-hidden">
							<div class="font-bruno-ace text-bold animate-marquee whitespace-nowrap">
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">Soulpact</span>
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">Sepolia</span>
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">ETH</span>
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">FairOdds</span>
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">Casino</span>
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">Crypto</span>
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">Web3</span>
							  <span class="text-ice-blue">#</span><span class="text-electric-yellow px-1">Nice</span>
							</div>
						  </div>

						<div class="mt-2 mb-1 ml-4 flex justify-between">
							<p class="mt-1 text-xs text-black tracking- flex-grow whitespace-normal overflow-hidden overflow-ellipsis"
							   style="line-height: 0.9;">
								{post.description}
							</p>
						
							<div class="mt-2 ml-0 flex-shrink-0">
								<img
									src="/DescAvatar_Demon_1.png"
									alt="cheems"
									class="w-11 h-20 object-cover"
								/>
							</div>
						</div>

				<!-- Public/Private signafier, image, members online -->
				<div class="mb- grid grid-cols-3  items-start">
					<div class="ml-5 pl-0.5 mt-0.5 flex flex-col ">
						<span class=" pl-0.5 mb-1 ml-0.5 text-xs text-white">
							Public
						</span>

						<span class="mt-0.5 ml-1 pt 1px text-sm text-white"
							>NEW</span
						>
					</div>
					<div class="mt-1.5 flex justify-center">
						<img
							src="/Crest_Demon_1.png"
							alt="Favicon"
							style="width: 42px; height: 42px;"
						/>
					</div>

					<div class="flex flex-col ml-[-4px] ">
						<span
							class="mt-0.5 pr-3 inline-block text-center text-xs text-white whitespace-nowrap"
							>Link</span
						>

						<span class="mt-1.5 ml-2 inline-block text-xs text-white whitespace-nowrap" style="font-size: 0.7rem;">
							{date(post.createdAt)}
						</span>
					</div>
				</div>

						<div class="mb-1 h-2 rounded-full bg-gray-300">
							<div
								class="h-full rounded-full bg-gradient-to-r from-black to-red-700"
							/>
						</div>

						<!-- Six emojis in a row -->
						<div class="mt-1.5 flex justify-between">
							<span class="text-1xl">😈</span>
							<span class="text-1xl">🥇</span>
							<span class="text-1xl">💰</span>
							<span class="text-1xl">🐐</span>
							<span class="text-1xl">🔥 </span>
							<span class="text-1xl">👻</span>
						</div>


					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<img class=" z-50 pointer-events-none decoration-left fixed left-0 top-0 h-screen w-auto object-contain" src="BrushLeft.png" alt="Left decoration" />
<img class="z-50 pointer-events-none decoration-right fixed right-0 top-0 h-screen w-auto object-contain" src="BrushRight.png" alt="Right decoration" />
<img bind:this={brushBottomImage} class=" z-49 pointer-events-none decoration-right fixed bottom-0 w-screen object-contain" src="BrushBottom.png" alt="Bottom decoration" />

<style>
	.spellcard {
		width: 200px; /* Set the fixed width */
		height: 420px; /* Set the fixed height */
		overflow: hidden; /* Hide overflowing content */
		/* ... other existing styles ... */
	}

	.grid-container::-webkit-scrollbar {
    display: none;
}

.grid-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.font-bruno-ace {
    font-family: 'Bruno Ace', cursive;
  }

  .font-allerta-stencil {
	font-family: 'Allerta Stencil', sans-serif;
	
	
  }
</style>
