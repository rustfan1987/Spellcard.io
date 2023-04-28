<script lang="ts">
	import { date } from '$lib/utils'

	export let data

	import { onMount } from 'svelte'
	let brushBottomImage: HTMLElement

	onMount(() => {
		window.addEventListener('scroll', handleScroll)
	})

	function handleScroll() {
		requestAnimationFrame(() => {
			const scrollTop = window.scrollY
			const scrollProgress = scrollTop / 4 // Divide by 4 to make it half the speed of the previous implementation
			brushBottomImage.style.transform = `translateY(${scrollProgress}px)`
		})
	}

	import { onDestroy } from 'svelte'
	// Reactive variable for the number of columns
	let columns = 'grid-cols-4'

	// Function to update the number of columns
	function updateColumns() {
		const windowWidth = window.innerWidth

		if (windowWidth >= 2560) {
			columns = 'grid-cols-10'
		} else if (windowWidth >= 2304) {
			columns = 'grid-cols-9'
		} else if (windowWidth >= 2048) {
			columns = 'grid-cols-8'
		} else if (windowWidth >= 1792) {
			columns = 'grid-cols-7'
		} else if (windowWidth >= 1536) {
			columns = 'grid-cols-6'
		} else if (windowWidth >= 1280) {
			columns = 'grid-cols-5'
		} else {
			columns = 'grid-cols-4'
		}
	}
	onMount(() => {
		updateColumns() // Call the function on component mount
		window.addEventListener('resize', updateColumns) // Add the event listener
	})

	onDestroy(() => {
		window.removeEventListener('resize', updateColumns) // Remove the event listener on component unmount
	})
</script>

<div class="ml-50 container flex justify-center">
	<div style="position: absolute; top: 55px;">
		<div class="mt-2 flex  justify-center">
			<button class="mx-3 text-white">New</button>
			<button class="mx-3 text-white">Popular</button>
			<button class="mx-3 text-white">Spicy</button>
			<button class="mx-3 text-white">Random</button>
		</div>
	</div>
</div>

<head>
	<link
		href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Caveat:wght@700&family=Langar&family=Permanent+Marker&family=Prompt:wght@600&family=Saira+Stencil+One&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Langar&family=Permanent+Marker&family=Prompt:wght@600&family=Saira+Stencil+One&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Permanent+Marker&family=Saira+Stencil+One&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
		rel="stylesheet"
	/>
</head>

<div class="my- flex justify-center" />

<div class=" Gridbox flex justify-center pt-0">
	<div
		class="grid-container 3xl:grid-cols-7  4xl:grid-cols-8 mt-14  grid grid-cols-1 gap-3  pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
	>
		{#each data.posts as post, i}
			<div
				class="max-w-8x1   flex justify-center overflow-x-auto  bg-transparent "
			>
				<div class=" overflow-y-auto">
					<div
						style="background-image: url('SpellCard_Test_BG2.png');"
						class="spellcard rounded-lg border-4 border-slate-900 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-1 shadow-md brightness-90"
					>
						<!-- Your post content here -->

						<div
							class="mt-3.5 mb-2 flex justify-around opacity-95 brightness-95 "
						>
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
								<div class="mb-2.5  flex flex-col justify-between ">
									<button class="h-6 w-9 rounded opacity-95 brightness-95"
										><img
											src="./Button_Trinket.png"
											alt="Trinket Icon"
											class=""
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Button_Copy.png"
											alt="Save Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Button_Settings.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>

								<div class="">
									<img
										src="./cheems.fw.png"
										alt="Favicon"
										style="width: 102px; height: 102x;"
									/>
								</div>

								<div class="mb-2.5 flex flex-col justify-between ">
									<button class="h-6 w-9  rounded opacity-95 brightness-95"
										><img
											src="./Button_Emblem.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9  rounded"
										><img
											src="./Button_Tavern.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
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
								class=" unstyled font-langar text-lg tracking-normal text-slate-100 antialiased opacity-90"
								href="/blog/{post.slug}"
							>
								{post.title}
							</a>
						</div>

						<div
							class="relative ml-2 mt-3.5 mr-2 flex overflow-x-hidden opacity-90"
						>
							<div
								class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
							>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Soulpact</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Sepolia</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">ETH</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">FairOdds</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Casino</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Crypto</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Web3</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Nice</span
								>
							</div>
						</div>

						<div class=" mt-2.5 mb-1 ml-4 flex justify-between">
							<p
								class="tracking- font-caveat-cursve mt-2 ml-0.5 mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-black"
								style="line-height: 0.9;"
							>
								{post.description}
							</p>

							<div class="mt-2 ml-0 flex-shrink-0">
								<img
									src="/DescAvatar_CheemsBlueEnergy.gif"
									alt="cheems"
									class="h-20 w-11 object-cover"
								/>
							</div>
						</div>

						<!-- Public/Private signafier, image, members online -->
						<div
							class="grid grid-cols-3 items-start pt-0  opacity-90 brightness-90"
						>
							<div class="mt-0. pt-0. ml-3.5 flex flex-col  ">
								<span class=" mb-1 ml-1.5 pl-1.5 text-xs text-amber-300">
									Public
								</span>

								<span
									class="font-creepster  mt-1 ml-1 text-center text-xs font-medium italic text-red-600"
									>SPICY</span
								>
							</div>
							<div class="mt-1  ml-0.5 flex justify-center">
								<img
									src="/Crest_A_CrystalBall.gif"
									alt="Favicon"
									style="width: 42px; height: 42px;"
								/>
							</div>

							<div class="mt-0. ml-[-4px] flex flex-col ">
								<span
									class="mr-1.5 inline-block whitespace-nowrap pr-2 text-center text-xs text-amber-300"
									>Game</span
								>

								<span
									class="font-allerta-stencil mt-2 ml-1.5 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
									style="font-size: 0.7rem;"
								>
									{date(post.createdAt)}
								</span>
							</div>
						</div>

						<div class=" mt-[-2px]  flex justify-center">
							<img src="/expBAR_Ice_1.png" alt="Favicon" style="" />
						</div>

						<!-- Six emojis in a row -->
						<div class="mt-0.5 flex justify-between opacity-80">
							<span class="text-1xl">😈</span>
							<span class="text-1xl">🥇</span>
							<span class="text-1xl">💰</span>
							<span class="text-1xl">🐐</span>
							<span class="text-1xl">🔥 </span>
							<span class="text-1xl">👻</span>
						</div>
						<div class="relative" />
					</div>
					<div class="flex justify-center">
						<img
							class=" h-15 top-0 z-0 mb-0 w-40  "
							src="/CardAura_CaveCheemsOrb.gif"
							alt="  spellcard"
						/>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="container relative left-0 right-0">
	<!-- your other HTML elements here -->

	<img
		class="decoration-left pointer-events-none fixed left-0 top-0 z-50 h-screen w-auto object-contain"
		src="BrushLeft.png"
		alt="Left decoration"
	/>
	<img
		class="decoration-right pointer-events-none fixed right-0 top-0 z-50 h-screen w-auto object-contain"
		src="BrushRight.png"
		alt="Right decoration"
	/>
	<img
		bind:this={brushBottomImage}
		class="brushBottomImage z-51 pointer-events-none fixed bottom-0 w-screen object-contain"
		src="BrushBottom.png"
		alt="Bottom decoration"
	/>
</div>

<style>
	.spellcard {
		width: 200px; /* Set the fixed width */
		height: px; /* Set the fixed height */
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

	.font-caveat-cursve {
		font-family: 'Caveat', cursive;
	}

	.font-langar {
		font-family: 'Langar', cursive;
	}

	.font-allerta-stencil {
		font-family: 'Allerta Stencil', sans-serif;
	}
	.font-creepster {
		font-family: 'Creepster', cursive;
	}
	.container {
		position: relative;
		left: 0;
		right: 0;
	}

	.brushBottomImage {
		z-index: 49;
		bottom: -10px; /* adjust this value as needed */
		left: +20px;
	}

	.decoration-left,
	.decoration-right {
		z-index: 50;
	}
</style>
