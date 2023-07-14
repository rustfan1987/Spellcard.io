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

<div class=" flex justify-center" />

<div class=" Gridbox flex justify-center pt-0">
	<div
		class="grid-container 3xl:grid-cols-7  4xl:grid-cols-8 mt-14  grid grid-cols-1 gap-0  pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
	>
		{#each data.posts as post, i}
			<div
				class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
			>
				<div class=" overflow-y-auto p-4">
					<div
						style="background-image: url('SpellCard_Test_BG2.png');"
						class="spellcard card   eevee rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
					>
						<!-- Your post content here -->

						<div
							class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
						>
							<button class="mr-1 h-4 w-4 rounded"
								><img
									src="./Button_Favorite.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Share.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Save.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 p h-4 w-4  rounded"
								><img
									src="./Button_Delete.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4 rounded"
							><img
								src="./Button_Games.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Crypto.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Tavern.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 p h-4 w-4  rounded"
							><img
								src="./Button_Settings.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
							
						>						<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Trinket.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
						</div>
						<div class="mt-1   mb-  ">
							<div class=" flex justify-center ">
								<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
									<button class="h-6 w-9 rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/FlamingCrest.png"
											alt="Trinket Icon"
											class=""
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/RedCrest.png"
											alt="Save Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Player_Ranks/BlackTriangle.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>

								<div class="ml-0. mb-1">
									<img
										src="./Avatar_A_CheemsMagic.gif"
										alt="Favicon"
										style="width: 103px; height: 100x;"
									/>
								</div>

								<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
									<button class="h-6 w-9  rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/OrangeCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9  rounded"
										><img
											src="./Card_Ranks/GreenCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/PinkDiamond.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>
							</div>
						</div>

						<div class="mt-  flex">
							<img
								class="ml-[-5px] brightness-100 opacity-95"
								src="/CardIcon_A_SkullBlueMagic.gif"
								alt="Favicon"
								style="width: 33px; height: 27px;"
							/>
							<div class="flex">
								<a
									class="highlight mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
									href="/blog/{post.slug}"
								>
									Spellcard
								</a>
							</div>
							<div class="ml-auto">
								<img
									class=" mt-1.5  "
									src="/Set_Alpha_Gold.png"
									alt="Favicon"
									style="width: 16px; height: 16px;"
								/>
							</div>
						</div>

						<div
							class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
						>
							<div
								class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
							>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Magic</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Woof</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Doge</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">NWO</span
								>
							</div>
						</div>

						<div class=" mt-2 mb-2 ml-4 flex justify-between">
							<p
								class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
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
							class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
						>
							<div class="mt-0. ml-3   flex flex-col  ">
								<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
									Public
								</span>

								<span
									class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
									>SPICY</span
								>
							</div>
							<div class="mt-1  ml-0.5 flex justify-center brightness-110">
								<img
									src="/Crest_A_CrystalBall.gif"
									alt="Favicon"
									style="width: 42px; height: 42px;"
								/>
							</div>

							<div class="mt-0. ml-[-4px] flex flex-col ">
								<span
									class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
									>Canvas</span
								>

								<span
									class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
									style="font-size: 0.7rem;"
								>
									{date(post.createdAt)}
								</span>
							</div>
						</div>

						<div class=" mt-[-5px]   flex justify-center">
							<img src="/expBAR_Ice_1.png" alt="Favicon" style="" />
						</div>

						<!-- Six emojis in a row -->
						<div class="mt-0.5 flex justify-between opacity-80">
							<span class="text-1xl">👑</span>
							<span class="text-1xl">🍀</span>
							<span class="text-1xl">🧙🏼‍♂️</span>
							<span class="text-1xl">✨</span>
							<span class="text-1xl">🌈 </span>
							<span class="text-1xl">⚡️</span>
						</div>
						<div class="relative" />
					</div>
					<div class="flex justify-center">
						<img
							class=" h-15 top-0 z-0 mb-0 w-40  "
							src="/CardAura_BlueCheemsMagic.gif"
							alt="  spellcard"
						/>
					</div>
				</div>
			</div>
			
		{/each}
		{#each data.posts as post, i}
		<div
			class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
		>
			<div class=" overflow-y-auto p-4">
				<div
					style="background-image: url('SpellCard_Test_BG3.png');"
					class=" card    eevee spellcard rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
				>
					<!-- Your post content here -->

					<div
						class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
					>
						<button class="mr-1 h-4 w-4 rounded"
							><img
								src="./Button_Favorite.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Share.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Save.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 p h-4 w-4  rounded"
							><img
								src="./Button_Delete.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4 rounded"
						><img
							src="./Button_Games.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Crypto.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Tavern.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 p h-4 w-4  rounded"
						><img
							src="./Button_Settings.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
						
					>						<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Trinket.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
					</div>
					<div class="mt-1   mb-  ">
						<div class=" flex justify-center ">
							<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
								<button class="h-6 w-9 rounded opacity-95 brightness-95"
									><img
										src="./Card_Ranks/FlamingCrest.png"
										alt="Trinket Icon"
										class=""
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9 rounded"
									><img
										src="./Card_Ranks/RedCrest.png"
										alt="Save Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9 rounded"
									><img
										src="./Player_Ranks/BlackTriangle.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
							</div>

							<div class="ml-0. mb-1">
								<img
									src="./Avatar_Demon_1.png"
									alt="Favicon"
									style="width: 103px; height: 100x;"
								/>
							</div>

							<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
								<button class="h-6 w-9  rounded opacity-95 brightness-95"
									><img
										src="./Card_Ranks/OrangeCrest.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9  rounded"
									><img
										src="./Card_Ranks/GreenCrest.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9 rounded"
									><img
										src="./Card_Ranks/PinkDiamond.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
							</div>
						</div>
					</div>

					<div class="mt-  flex">
						<img
							class="ml-[-5px] brightness-100 opacity-95"
							src="/Crest_DemonFlame_1.gif"
							alt="Favicon"
							style="width: 33px; height: 27px;"
						/>
						<div class="flex">
							<a
								class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
								href="/blog/{post.slug}"
							>
								
						Soul Pact
						</a>
						</div>
						<div class="ml-auto">
							<img
								class=" mt-1.5  "
								src="/Set_Alpha_Gold.png"
								alt="Favicon"
								style="width: 16px; height: 16px;"
							/>
						</div>
					</div>

					<div
						class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
					>
						<div
							class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
						>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">SoulPact</span
							>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">ETH</span
							>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">FairOdds</span
							>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">CryptoGame</span
							>
						</div>
					</div>

					<div class=" mt-2 mb-2 ml-4 flex justify-between">
						<p
							class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
							style="line-height: 0.9;"
						>
							{post.description}
						</p>

						<div class="mt-2 ml-0 flex-shrink-0">
							<img
								src="/DescAvatar_Demon_1.png"
								alt="cheems"
								class="h-20 w-11 object-cover"
							/>
						</div>
					</div>

					<!-- Public/Private signafier, image, members online -->
					<div
						class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
					>
						<div class="mt-0. ml-3   flex flex-col  ">
							<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
								Public
							</span>

							<span
								class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
								>NEW</span
							>
						</div>
						<div class="mt-1  ml-0.5 flex justify-center brightness-110">
							<img
								src="/Crest_DemonFlame_1.gif"
								alt="Favicon"
								style="width: 42px; height: 42px;"
							/>
						</div>

						<div class="mt-0. ml-[-4px] flex flex-col ">
							<span
								class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
								>Link</span
							>

							<span
								class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
								style="font-size: 0.7rem;"
							>
								{date(post.createdAt)}
							</span>
						</div>
					</div>

					<div class=" mt-[-5px]   flex justify-center">
						<img src="/expBAR_Demon_1.png" alt="Favicon" style="" />
					</div>

					<!-- Six emojis in a row -->
					<div class="mt-0.5 flex justify-between opacity-80">
						<span class="text-1xl">😈 </span>
						<span class="text-1xl">🐐</span>
						<span class="text-1xl">💰</span>
						<span class="text-1xl">🎲</span>
						<span class="text-1xl">🔥 </span>
						<span class="text-1xl">🤞</span>
					</div>
					<div class="relative" />
				</div>
				<div class="flex justify-center">
					<img
						class=" h-15 top-0 z-0 mb-0 w-40  "
						src="/CardAura_Fire_2.gif"
						alt="  spellcard"
					/>
				</div>
			</div>
		</div>
	{/each}
		{#each data.posts as post, i}
			<div
				class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
			>
				<div class=" overflow-y-auto p-4">
					<div
						style="background-image: url('SpellCard_Test_BG1.png');"
						class="spellcard eevee card rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
					>
						<!-- Your post content here -->

						<div
							class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
						>
							<button class="mr-1 h-4 w-4 rounded"
								><img
									src="./Button_Favorite.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Share.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Save.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 p h-4 w-4  rounded"
								><img
									src="./Button_Delete.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4 rounded"
							><img
								src="./Button_Games.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Crypto.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Tavern.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 p h-4 w-4  rounded"
							><img
								src="./Button_Settings.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
							
						>						<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Trinket.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
						</div>
						<div class="mt-1   mb-  ">
							<div class=" flex justify-center ">
								<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
									<button class="h-6 w-9 rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/FlamingCrest.png"
											alt="Trinket Icon"
											class=""
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/RedCrest.png"
											alt="Save Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Player_Ranks/BlackTriangle.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>

								<div class="ml-0. mb-1">
									<img
										src="./Avatar_A_NWO.gif"
										alt="Favicon"
										style="width: 103px; height: 100x;"
									/>
								</div>

								<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
									<button class="h-6 w-9  rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/OrangeCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9  rounded"
										><img
											src="./Card_Ranks/GreenCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/PinkDiamond.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>
							</div>
						</div>

						<div class="mt-  flex">
							<img
								class="ml-[-5px] brightness-100 opacity-95"
								src="/Crest_A_CrystalBall.gif"
								alt="Favicon"
								style="width: 33px; height: 27px;"
							/>
							<div class="flex">
								<a
									class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
									href="/blog/{post.slug}"
								>
									Nether World Online
								</a>
							</div>
							<div class="ml-auto">
								<img
									class=" mt-1.5  "
									src="/Set_Alpha_Gold.png"
									alt="Favicon"
									style="width: 16px; height: 16px;"
								/>
							</div>
						</div>

						<div
							class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
						>
							<div
								class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
							>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Magic</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Woof</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Doge</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">NWO</span
								>
							</div>
						</div>

						<div class=" mt-2 mb-2 ml-4 flex justify-between">
							<p
								class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
								style="line-height: 0.9;"
							>
								{post.description}
							</p>

							<div class="mt-2 ml-0 flex-shrink-0">
								<img
									src="/DescAvatar_A_TimeCrystalEnergy.gif"
									alt="cheems"
									class="h-20 w-11 object-cover"
								/>
							</div>
						</div>

						<!-- Public/Private signafier, image, members online -->
						<div
							class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
						>
							<div class="mt-0. ml-3   flex flex-col  ">
								<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
									Public
								</span>

								<span
									class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
									>POPULAR</span
								>
							</div>
							<div class="mt-1  ml-0.5 flex justify-center brightness-110">
								<img
									src="/Crest_A_CrystalBall.gif"
									alt="Favicon"
									style="width: 42px; height: 42px;"
								/>
							</div>

							<div class="mt-0. ml-[-4px] flex flex-col ">
								<span
									class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
									>Game</span
								>

								<span
									class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
									style="font-size: 0.7rem;"
								>
									{date(post.createdAt)}
								</span>
							</div>
						</div>

						<div class=" mt-[-5px]   flex justify-center">
							<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
						</div>

						<!-- Six emojis in a row -->
						<div class="mt-0.5 flex justify-between opacity-80">
							<span class="text-1xl">👑</span>
							<span class="text-1xl">🍀</span>
							<span class="text-1xl">🧙🏼‍♂️</span>
							<span class="text-1xl">✨</span>
							<span class="text-1xl">🌈 </span>
							<span class="text-1xl">⚡️</span>
						</div>
						<div class="relative" />
					</div>
					<div class="flex justify-center">
						<img
							class=" h-15 top-0 z-0 mb-0 w-40  "
							src="/CardAura_Demon_1.gif"
							alt="  spellcard"
						/>
					</div>
				</div>
			</div>
		{/each}
		

		<!-- #4Spellcard -->
		{#each data.posts as post, i}
			<div
				class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
			>
				<div class=" overflow-y-auto p-4">
					<div
						style="background-image: url('SpellCard_Test_BG4.png');"
						class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
					>
						<!-- Your post content here -->

						<div
							class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
						>
							<button class="mr-1 h-4 w-4 rounded"
								><img
									src="./Button_Favorite.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Share.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Save.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 p h-4 w-4  rounded"
								><img
									src="./Button_Delete.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4 rounded"
							><img
								src="./Button_Games.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Crypto.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Tavern.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 p h-4 w-4  rounded"
							><img
								src="./Button_Settings.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
							
						>						<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Trinket.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
						</div>
						<div class="mt-1   mb-  ">
							<div class=" flex justify-center ">
								<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
									<button class="h-6 w-9 rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/FlamingCrest.png"
											alt="Trinket Icon"
											class=""
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/RedCrest.png"
											alt="Save Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Player_Ranks/BlackTriangle.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>

								<div class="ml-0. mb-1">
									<img
										src="./Avatar_A_DoomBoard.gif"
										alt="Favicon"
										style="width: 103px; height: 100x;"
									/>
								</div>

								<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
									<button class="h-6 w-9  rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/OrangeCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9  rounded"
										><img
											src="./Card_Ranks/GreenCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/PinkDiamond.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>
							</div>
						</div>

						<div class="mt-  flex">
							<img
								class="ml-[-5px] brightness-100 opacity-95"
								src="/Crest_DemonFlame_1.gif"
								alt="Favicon"
								style="width: 33px; height: 27px;"
							/>
							<div class="flex">
								<a
									class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
									href="/blog/{post.slug}"
								>
									Doom Board
								</a>
							</div>
							<div class="ml-auto">
								<img
									class=" mt-1.5  "
									src="/Set_Alpha_Gold.png"
									alt="Favicon"
									style="width: 16px; height: 16px;"
								/>
							</div>
						</div>

						<div
							class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
						>
							<div
								class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
							>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Magic</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Woof</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Doge</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">NWO</span
								>
							</div>
						</div>

						<div class=" mt-2 mb-2 ml-4 flex justify-between">
							<p
								class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
								style="line-height: 0.9;"
							>
								{post.description}
							</p>

							<div class="mt-2 ml-0 flex-shrink-0">
								<img
									src="/DescAvatar_Demon_1.png"
									alt="cheems"
									class="h-20 w-11 object-cover"
								/>
							</div>
						</div>

						<!-- Public/Private signafier, image, members online -->
						<div
							class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
						>
							<div class="mt-0. ml-3   flex flex-col  ">
								<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
									Private
								</span>

								<span
									class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
									>HIDDEN</span
								>
							</div>
							<div class="mt-1  ml-0.5 flex justify-center brightness-110">
								<img
									src="/Crest_DemonFlame_1.gif"
									alt="Favicon"
									style="width: 42px; height: 42px;"
								/>
							</div>

							<div class="mt-0. ml-[-4px] flex flex-col ">
								<span
									class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
									>Canvas</span
								>

								<span
									class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
									style="font-size: 0.7rem;"
								>
									{date(post.createdAt)}
								</span>
							</div>
						</div>

						<div class=" mt-[-5px]   flex justify-center">
							<img src="/expBAR_Yellow_1.png" alt="Favicon" style="" />
						</div>

						<!-- Six emojis in a row -->
						<div class="mt-0.5 flex justify-between opacity-80">
							<span class="text-1xl">👑</span>
							<span class="text-1xl">🍀</span>
							<span class="text-1xl">🧙🏼‍♂️</span>
							<span class="text-1xl">✨</span>
							<span class="text-1xl">🌈 </span>
							<span class="text-1xl">⚡️</span>
						</div>
						<div class="relative" />
					</div>
					<div class="flex justify-center">
						<img
							class=" h-15 top-0 z-0 mb-0 w-40  "
							src="/CardAura_DoomBoard.gif"
							alt="  spellcard"
						/>
					</div>
				</div>
			</div>
		{/each}
				<!-- #5Spellcard -->
				{#each data.posts as post, i}
				<div
					class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
				>
					<div class=" overflow-y-auto p-4">
						<div
							style="background-image: url('SpellCard_Test_BG5.png');"
							class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
						>
							<!-- Your post content here -->
	
							<div
								class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
							>
								<button class="mr-1 h-4 w-4 rounded"
									><img
										src="./Button_Favorite.png"
										alt="Edit Card"
										class="h-full w-full"
									/></button
								>
								<button class="mr-1 h-4 w-4  rounded"
									><img
										src="./Button_Share.png"
										alt="Edit Card"
										class="h-full w-full"
									/></button
								>
								<button class="mr-1 h-4 w-4  rounded"
									><img
										src="./Button_Save.png"
										alt="Edit Card"
										class="h-full w-full"
									/></button
								>
								<button class="mr-1 p h-4 w-4  rounded"
									><img
										src="./Button_Delete.png"
										alt="Edit Card"
										class="h-full w-full"
									/></button
								>
								<button class="mr-1 h-4 w-4 rounded"
								><img
									src="./Button_Games.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Crypto.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Tavern.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 p h-4 w-4  rounded"
								><img
									src="./Button_Settings.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
								
							>						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Trinket.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
							</div>
							<div class="mt-1   mb-  ">
								<div class=" flex justify-center ">
									<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
										<button class="h-6 w-9 rounded opacity-95 brightness-95"
											><img
												src="./Card_Ranks/FlamingCrest.png"
												alt="Trinket Icon"
												class=""
												style="width: 40px; height: 40px;"
											/></button
										>
										<button class="h-6 w-9 rounded"
											><img
												src="./Card_Ranks/RedCrest.png"
												alt="Save Card"
												class="h-full w-full"
												style="width: 40px; height: 40px;"
											/></button
										>
										<button class="h-6 w-9 rounded"
											><img
												src="./Player_Ranks/BlackTriangle.png"
												alt="Edit Card"
												class="h-full w-full"
												style="width: 40px; height: 40px;"
											/></button
										>
									</div>
	
									<div class="ml-0. mb-1">
										<img
											src="./Avatar_Frame.png"
											alt="Favicon"
											style="width: 103px; height: 100x;"
										/>
									</div>
	
									<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
										<button class="h-6 w-9  rounded opacity-95 brightness-95"
											><img
												src="./Card_Ranks/OrangeCrest.png"
												alt="Edit Card"
												class="h-full w-full"
												style="width: 40px; height: 40px;"
											/></button
										>
										<button class="h-6 w-9  rounded"
											><img
												src="./Card_Ranks/GreenCrest.png"
												alt="Edit Card"
												class="h-full w-full"
												style="width: 40px; height: 40px;"
											/></button
										>
										<button class="h-6 w-9 rounded"
											><img
												src="./Card_Ranks/PinkDiamond.png"
												alt="Edit Card"
												class="h-full w-full"
												style="width: 40px; height: 40px;"
											/></button
										>
									</div>
								</div>
							</div>
	
							<div class="mt-  flex">
								<img
									class="ml-[-5px] brightness-100 opacity-95"
									src="/Crest_A_CrystalBall.gif"
									alt="Favicon"
									style="width: 33px; height: 27px;"
								/>
								<div class="flex">
									<a
										class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
										href="/blog/{post.slug}"
									>
										Demo Card
									</a>
								</div>
								<div class="ml-auto">
									<img
										class=" mt-1.5  "
										src="/Set_Alpha_Gold.png"
										alt="Favicon"
										style="width: 16px; height: 16px;"
									/>
								</div>
							</div>
	
							<div
								class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
							>
								<div
									class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
								>
									<span class="text-ice-blue">#</span><span
										class="px-1 text-electric-yellow">Magic</span
									>
									<span class="text-ice-blue">#</span><span
										class="px-1 text-electric-yellow">Woof</span
									>
									<span class="text-ice-blue">#</span><span
										class="px-1 text-electric-yellow">Doge</span
									>
									<span class="text-ice-blue">#</span><span
										class="px-1 text-electric-yellow">NWO</span
									>
								</div>
							</div>
	
							<div class=" mt-2 mb-2 ml-4 flex justify-between">
								<p
									class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
									style="line-height: 0.9;"
								>
									{post.description}
								</p>
	
								<div class="mt-2 ml-0 flex-shrink-0">
									<img
										src="/DescAvatar_CheemsFloat.png"
										alt="cheems"
										class="h-20 w-11 object-cover"
									/>
								</div>
							</div>
	
							<!-- Public/Private signafier, image, members online -->
							<div
								class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
							>
								<div class="mt-0. ml-3   flex flex-col  ">
									<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
										Private
									</span>
	
									<span
										class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
										>HIDDEN</span
									>
								</div>
								<div class="mt-1  ml-0.5 flex justify-center brightness-110">
									<img
										src="/Crest_A_CrystalBall.gif"
										alt="Favicon"
										style="width: 42px; height: 42px;"
									/>
								</div>
	
								<div class="mt-0. ml-[-4px] flex flex-col ">
									<span
										class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
										>Canvas</span
									>
	
									<span
										class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
										style="font-size: 0.7rem;"
									>
										{date(post.createdAt)}
									</span>
								</div>
							</div>
	
							<div class=" mt-[-5px]   flex justify-center">
								<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
							</div>
	
							<!-- Six emojis in a row -->
							<div class="mt-0.5 flex justify-between opacity-80">
								<span class="text-1xl">👑</span>
								<span class="text-1xl">🍀</span>
								<span class="text-1xl">🧙🏼‍♂️</span>
								<span class="text-1xl">✨</span>
								<span class="text-1xl">🌈 </span>
								<span class="text-1xl">⚡️</span>
							</div>
							<div class="relative" />
						</div>
						<div class="flex justify-center">
							<img
								class=" h-15 top-0 z-0 mb-0 w-40  "
								src="/CardAura_Fire_1.gif"
								alt="  spellcard"
							/>
						</div>
					</div>
				</div>
			{/each}
			<!-- #6Spellcard -->
			{#each data.posts as post, i}
			<div
				class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
			>
				<div class=" overflow-y-auto p-4">
					<div
						style="background-image: url('SpellCard_Test_BG6.png');"
						class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
					>
						<!-- Your post content here -->

						<div
							class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
						>
							<button class="mr-1 h-4 w-4 rounded"
								><img
									src="./Button_Favorite.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Share.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4  rounded"
								><img
									src="./Button_Save.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 p h-4 w-4  rounded"
								><img
									src="./Button_Delete.png"
									alt="Edit Card"
									class="h-full w-full"
								/></button
							>
							<button class="mr-1 h-4 w-4 rounded"
							><img
								src="./Button_Games.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Crypto.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Tavern.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 p h-4 w-4  rounded"
							><img
								src="./Button_Settings.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
							
						>						<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Trinket.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
						</div>
						<div class="mt-1   mb-  ">
							<div class=" flex justify-center ">
								<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
									<button class="h-6 w-9 rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/FlamingCrest.png"
											alt="Trinket Icon"
											class=""
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/RedCrest.png"
											alt="Save Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Player_Ranks/BlackTriangle.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>

								<div class="ml-0. mb-1">
									<img
										src="./Avatar_Frame.png"
										alt="Favicon"
										style="width: 103px; height: 100x;"
									/>
								</div>

								<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
									<button class="h-6 w-9  rounded opacity-95 brightness-95"
										><img
											src="./Card_Ranks/OrangeCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9  rounded"
										><img
											src="./Card_Ranks/GreenCrest.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
									<button class="h-6 w-9 rounded"
										><img
											src="./Card_Ranks/PinkDiamond.png"
											alt="Edit Card"
											class="h-full w-full"
											style="width: 40px; height: 40px;"
										/></button
									>
								</div>
							</div>
						</div>

						<div class="mt-  flex">
							<img
								class="ml-[-5px] brightness-100 opacity-95"
								src="/Crest_A_CrystalBall.gif"
								alt="Favicon"
								style="width: 33px; height: 27px;"
							/>
							<div class="flex">
								<a
									class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
									href="/blog/{post.slug}"
								>
									Demo Card
								</a>
							</div>
							<div class="ml-auto">
								<img
									class=" mt-1.5  "
									src="/Set_Alpha_Gold.png"
									alt="Favicon"
									style="width: 16px; height: 16px;"
								/>
							</div>
						</div>

						<div
							class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
						>
							<div
								class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
							>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Magic</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Woof</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">Doge</span
								>
								<span class="text-ice-blue">#</span><span
									class="px-1 text-electric-yellow">NWO</span
								>
							</div>
						</div>

						<div class=" mt-2 mb-2 ml-4 flex justify-between">
							<p
								class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
								style="line-height: 0.9;"
							>
								{post.description}
							</p>

							<div class="mt-2 ml-0 flex-shrink-0">
								<img
									src="/DescAvatar_CheemsFloat.png"
									alt="cheems"
									class="h-20 w-11 object-cover"
								/>
							</div>
						</div>

						<!-- Public/Private signafier, image, members online -->
						<div
							class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
						>
							<div class="mt-0. ml-3   flex flex-col  ">
								<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
									Private
								</span>

								<span
									class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
									>HIDDEN</span
								>
							</div>
							<div class="mt-1  ml-0.5 flex justify-center brightness-110">
								<img
									src="/Crest_A_CrystalBall.gif"
									alt="Favicon"
									style="width: 42px; height: 42px;"
								/>
							</div>

							<div class="mt-0. ml-[-4px] flex flex-col ">
								<span
									class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
									>Canvas</span
								>

								<span
									class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
									style="font-size: 0.7rem;"
								>
									{date(post.createdAt)}
								</span>
							</div>
						</div>

						<div class=" mt-[-5px]   flex justify-center">
							<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
						</div>

						<!-- Six emojis in a row -->
						<div class="mt-0.5 flex justify-between opacity-80">
							<span class="text-1xl">👑</span>
							<span class="text-1xl">🍀</span>
							<span class="text-1xl">🧙🏼‍♂️</span>
							<span class="text-1xl">✨</span>
							<span class="text-1xl">🌈 </span>
							<span class="text-1xl">⚡️</span>
						</div>
						<div class="relative" />
					</div>
					<div class="flex justify-center">
						<img
							class=" h-15 top-0 z-0 mb-0 w-40  "
							src="/CardAura_Fire_1.gif"
							alt="  spellcard"
						/>
					</div>
				</div>
			</div>
		{/each}
		<!-- #8Spellcard -->
		{#each data.posts as post, i}
		<div
			class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
		>
			<div class=" overflow-y-auto p-4">
				<div
					style="background-image: url('SpellCard_Test_BG8.png');"
					class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
				>
					<!-- Your post content here -->

					<div
						class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
					>
						<button class="mr-1 h-4 w-4 rounded"
							><img
								src="./Button_Favorite.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Share.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4  rounded"
							><img
								src="./Button_Save.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 p h-4 w-4  rounded"
							><img
								src="./Button_Delete.png"
								alt="Edit Card"
								class="h-full w-full"
							/></button
						>
						<button class="mr-1 h-4 w-4 rounded"
						><img
							src="./Button_Games.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Crypto.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Tavern.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 p h-4 w-4  rounded"
						><img
							src="./Button_Settings.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
						
					>						<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Trinket.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
					</div>
					<div class="mt-1   mb-  ">
						<div class=" flex justify-center ">
							<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
								<button class="h-6 w-9 rounded opacity-95 brightness-95"
									><img
										src="./Card_Ranks/FlamingCrest.png"
										alt="Trinket Icon"
										class=""
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9 rounded"
									><img
										src="./Card_Ranks/RedCrest.png"
										alt="Save Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9 rounded"
									><img
										src="./Player_Ranks/BlackTriangle.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
							</div>

							<div class="ml-0. mb-1">
								<img
									src="./Avatar_Frame.png"
									alt="Favicon"
									style="width: 103px; height: 100x;"
								/>
							</div>

							<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
								<button class="h-6 w-9  rounded opacity-95 brightness-95"
									><img
										src="./Card_Ranks/OrangeCrest.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9  rounded"
									><img
										src="./Card_Ranks/GreenCrest.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
								<button class="h-6 w-9 rounded"
									><img
										src="./Card_Ranks/PinkDiamond.png"
										alt="Edit Card"
										class="h-full w-full"
										style="width: 40px; height: 40px;"
									/></button
								>
							</div>
						</div>
					</div>

					<div class="mt-  flex">
						<img
							class="ml-[-5px] brightness-100 opacity-95"
							src="/Crest_A_CrystalBall.gif"
							alt="Favicon"
							style="width: 33px; height: 27px;"
						/>
						<div class="flex">
							<a
								class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
								href="/blog/{post.slug}"
							>
								Demo Card
							</a>
						</div>
						<div class="ml-auto">
							<img
								class=" mt-1.5  "
								src="/Set_Alpha_Gold.png"
								alt="Favicon"
								style="width: 16px; height: 16px;"
							/>
						</div>
					</div>

					<div
						class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
					>
						<div
							class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
						>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">Magic</span
							>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">Woof</span
							>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">Doge</span
							>
							<span class="text-ice-blue">#</span><span
								class="px-1 text-electric-yellow">NWO</span
							>
						</div>
					</div>

					<div class=" mt-2 mb-2 ml-4 flex justify-between">
						<p
							class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
							style="line-height: 0.9;"
						>
							{post.description}
						</p>

						<div class="mt-2 ml-0 flex-shrink-0">
							<img
								src="/DescAvatar_CheemsFloat.png"
								alt="cheems"
								class="h-20 w-11 object-cover"
							/>
						</div>
					</div>

					<!-- Public/Private signafier, image, members online -->
					<div
						class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
					>
						<div class="mt-0. ml-3   flex flex-col  ">
							<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
								Private
							</span>

							<span
								class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
								>HIDDEN</span
							>
						</div>
						<div class="mt-1  ml-0.5 flex justify-center brightness-110">
							<img
								src="/Crest_A_CrystalBall.gif"
								alt="Favicon"
								style="width: 42px; height: 42px;"
							/>
						</div>

						<div class="mt-0. ml-[-4px] flex flex-col ">
							<span
								class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
								>Canvas</span
							>

							<span
								class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
								style="font-size: 0.7rem;"
							>
								{date(post.createdAt)}
							</span>
						</div>
					</div>

					<div class=" mt-[-5px]   flex justify-center">
						<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
					</div>

					<!-- Six emojis in a row -->
					<div class="mt-0.5 flex justify-between opacity-80">
						<span class="text-1xl">👑</span>
						<span class="text-1xl">🍀</span>
						<span class="text-1xl">🧙🏼‍♂️</span>
						<span class="text-1xl">✨</span>
						<span class="text-1xl">🌈 </span>
						<span class="text-1xl">⚡️</span>
					</div>
					<div class="relative" />
				</div>
				<div class="flex justify-center">
					<img
						class=" h-15 top-0 z-0 mb-0 w-40  "
						src="/CardAura_Fire_1.gif"
						alt="  spellcard"
					/>
				</div>
			</div>
		</div>
	{/each}
	<!-- #9Spellcard -->
	{#each data.posts as post, i}
	<div
		class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
	>
		<div class=" overflow-y-auto p-4">
			<div
				style="background-image: url('SpellCard_Test_BG9.png');"
				class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
			>
				<!-- Your post content here -->

				<div
					class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
				>
					<button class="mr-1 h-4 w-4 rounded"
						><img
							src="./Button_Favorite.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Share.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 h-4 w-4  rounded"
						><img
							src="./Button_Save.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 p h-4 w-4  rounded"
						><img
							src="./Button_Delete.png"
							alt="Edit Card"
							class="h-full w-full"
						/></button
					>
					<button class="mr-1 h-4 w-4 rounded"
					><img
						src="./Button_Games.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Crypto.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Tavern.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 p h-4 w-4  rounded"
					><img
						src="./Button_Settings.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
					
				>						<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Trinket.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
				</div>
				<div class="mt-1   mb-  ">
					<div class=" flex justify-center ">
						<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
							<button class="h-6 w-9 rounded opacity-95 brightness-95"
								><img
									src="./Card_Ranks/FlamingCrest.png"
									alt="Trinket Icon"
									class=""
									style="width: 40px; height: 40px;"
								/></button
							>
							<button class="h-6 w-9 rounded"
								><img
									src="./Card_Ranks/RedCrest.png"
									alt="Save Card"
									class="h-full w-full"
									style="width: 40px; height: 40px;"
								/></button
							>
							<button class="h-6 w-9 rounded"
								><img
									src="./Player_Ranks/BlackTriangle.png"
									alt="Edit Card"
									class="h-full w-full"
									style="width: 40px; height: 40px;"
								/></button
							>
						</div>

						<div class="ml-0. mb-1">
							<img
								src="./Avatar_Frame.png"
								alt="Favicon"
								style="width: 103px; height: 100x;"
							/>
						</div>

						<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
							<button class="h-6 w-9  rounded opacity-95 brightness-95"
								><img
									src="./Card_Ranks/OrangeCrest.png"
									alt="Edit Card"
									class="h-full w-full"
									style="width: 40px; height: 40px;"
								/></button
							>
							<button class="h-6 w-9  rounded"
								><img
									src="./Card_Ranks/GreenCrest.png"
									alt="Edit Card"
									class="h-full w-full"
									style="width: 40px; height: 40px;"
								/></button
							>
							<button class="h-6 w-9 rounded"
								><img
									src="./Card_Ranks/PinkDiamond.png"
									alt="Edit Card"
									class="h-full w-full"
									style="width: 40px; height: 40px;"
								/></button
							>
						</div>
					</div>
				</div>

				<div class="mt-  flex">
					<img
						class="ml-[-5px] brightness-100 opacity-95"
						src="/Crest_A_CrystalBall.gif"
						alt="Favicon"
						style="width: 33px; height: 27px;"
					/>
					<div class="flex">
						<a
							class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
							href="/blog/{post.slug}"
						>
							Demo Card
						</a>
					</div>
					<div class="ml-auto">
						<img
							class=" mt-1.5  "
							src="/Set_Alpha_Gold.png"
							alt="Favicon"
							style="width: 16px; height: 16px;"
						/>
					</div>
				</div>

				<div
					class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
				>
					<div
						class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
					>
						<span class="text-ice-blue">#</span><span
							class="px-1 text-electric-yellow">Magic</span
						>
						<span class="text-ice-blue">#</span><span
							class="px-1 text-electric-yellow">Woof</span
						>
						<span class="text-ice-blue">#</span><span
							class="px-1 text-electric-yellow">Doge</span
						>
						<span class="text-ice-blue">#</span><span
							class="px-1 text-electric-yellow">NWO</span
						>
					</div>
				</div>

				<div class=" mt-2 mb-2 ml-4 flex justify-between">
					<p
						class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
						style="line-height: 0.9;"
					>
						{post.description}
					</p>

					<div class="mt-2 ml-0 flex-shrink-0">
						<img
							src="/DescAvatar_CheemsFloat.png"
							alt="cheems"
							class="h-20 w-11 object-cover"
						/>
					</div>
				</div>

				<!-- Public/Private signafier, image, members online -->
				<div
					class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
				>
					<div class="mt-0. ml-3   flex flex-col  ">
						<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
							Private
						</span>

						<span
							class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
							>HIDDEN</span
						>
					</div>
					<div class="mt-1  ml-0.5 flex justify-center brightness-110">
						<img
							src="/Crest_A_CrystalBall.gif"
							alt="Favicon"
							style="width: 42px; height: 42px;"
						/>
					</div>

					<div class="mt-0. ml-[-4px] flex flex-col ">
						<span
							class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
							>Canvas</span
						>

						<span
							class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
							style="font-size: 0.7rem;"
						>
							{date(post.createdAt)}
						</span>
					</div>
				</div>

				<div class=" mt-[-5px]   flex justify-center">
					<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
				</div>

				<!-- Six emojis in a row -->
				<div class="mt-0.5 flex justify-between opacity-80">
					<span class="text-1xl">👑</span>
					<span class="text-1xl">🍀</span>
					<span class="text-1xl">🧙🏼‍♂️</span>
					<span class="text-1xl">✨</span>
					<span class="text-1xl">🌈 </span>
					<span class="text-1xl">⚡️</span>
				</div>
				<div class="relative" />
			</div>
			<div class="flex justify-center">
				<img
					class=" h-15 top-0 z-0 mb-0 w-40  "
					src="/CardAura_Fire_1.gif"
					alt="  spellcard"
				/>
			</div>
		</div>
	</div>
{/each}
<!-- #7Spellcard -->
{#each data.posts as post, i}
<div
	class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
>
	<div class=" overflow-y-auto p-4">
		<div
			style="background-image: url('SpellCard_Test_BG7.png');"
			class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
		>
			<!-- Your post content here -->

			<div
				class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
			>
				<button class="mr-1 h-4 w-4 rounded"
					><img
						src="./Button_Favorite.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Share.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Save.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 p h-4 w-4  rounded"
					><img
						src="./Button_Delete.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4 rounded"
				><img
					src="./Button_Games.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Crypto.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Tavern.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 p h-4 w-4  rounded"
				><img
					src="./Button_Settings.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
				
			>						<button class="mr-1 h-4 w-4  rounded"
			><img
				src="./Button_Trinket.png"
				alt="Edit Card"
				class="h-full w-full"
			/></button
		>
			</div>
			<div class="mt-1   mb-  ">
				<div class=" flex justify-center ">
					<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
						<button class="h-6 w-9 rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/FlamingCrest.png"
								alt="Trinket Icon"
								class=""
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/RedCrest.png"
								alt="Save Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Player_Ranks/BlackTriangle.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>

					<div class="ml-0. mb-1">
						<img
							src="./Avatar_Frame.png"
							alt="Favicon"
							style="width: 103px; height: 100x;"
						/>
					</div>

					<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
						<button class="h-6 w-9  rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/OrangeCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9  rounded"
							><img
								src="./Card_Ranks/GreenCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/PinkDiamond.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>
				</div>
			</div>

			<div class="mt-  flex">
				<img
					class="ml-[-5px] brightness-100 opacity-95"
					src="/Crest_A_CrystalBall.gif"
					alt="Favicon"
					style="width: 33px; height: 27px;"
				/>
				<div class="flex">
					<a
						class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
						href="/blog/{post.slug}"
					>
						Demo Card
					</a>
				</div>
				<div class="ml-auto">
					<img
						class=" mt-1.5  "
						src="/Set_Alpha_Gold.png"
						alt="Favicon"
						style="width: 16px; height: 16px;"
					/>
				</div>
			</div>

			<div
				class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
			>
				<div
					class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
				>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Magic</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Woof</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Doge</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">NWO</span
					>
				</div>
			</div>

			<div class=" mt-2 mb-2 ml-4 flex justify-between">
				<p
					class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
					style="line-height: 0.9;"
				>
					{post.description}
				</p>

				<div class="mt-2 ml-0 flex-shrink-0">
					<img
						src="/DescAvatar_CheemsFloat.png"
						alt="cheems"
						class="h-20 w-11 object-cover"
					/>
				</div>
			</div>

			<!-- Public/Private signafier, image, members online -->
			<div
				class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
			>
				<div class="mt-0. ml-3   flex flex-col  ">
					<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
						Private
					</span>

					<span
						class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
						>HIDDEN</span
					>
				</div>
				<div class="mt-1  ml-0.5 flex justify-center brightness-110">
					<img
						src="/Crest_A_CrystalBall.gif"
						alt="Favicon"
						style="width: 42px; height: 42px;"
					/>
				</div>

				<div class="mt-0. ml-[-4px] flex flex-col ">
					<span
						class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
						>Canvas</span
					>

					<span
						class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
						style="font-size: 0.7rem;"
					>
						{date(post.createdAt)}
					</span>
				</div>
			</div>

			<div class=" mt-[-5px]   flex justify-center">
				<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
			</div>

			<!-- Six emojis in a row -->
			<div class="mt-0.5 flex justify-between opacity-80">
				<span class="text-1xl">👑</span>
				<span class="text-1xl">🍀</span>
				<span class="text-1xl">🧙🏼‍♂️</span>
				<span class="text-1xl">✨</span>
				<span class="text-1xl">🌈 </span>
				<span class="text-1xl">⚡️</span>
			</div>
			<div class="relative" />
		</div>
		<div class="flex justify-center">
			<img
				class=" h-15 top-0 z-0 mb-0 w-40  "
				src="/CardAura_Fire_1.gif"
				alt="  spellcard"
			/>
		</div>
	</div>
</div>
{/each}
<!-- #9Spellcard -->
{#each data.posts as post, i}
<div
	class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
>
	<div class=" overflow-y-auto p-4">
		<div
			style="background-image: url('SpellCard_Test_BG10.png');"
			class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
		>
			<!-- Your post content here -->

			<div
				class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
			>
				<button class="mr-1 h-4 w-4 rounded"
					><img
						src="./Button_Favorite.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Share.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Save.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 p h-4 w-4  rounded"
					><img
						src="./Button_Delete.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4 rounded"
				><img
					src="./Button_Games.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Crypto.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Tavern.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 p h-4 w-4  rounded"
				><img
					src="./Button_Settings.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
				
			>						<button class="mr-1 h-4 w-4  rounded"
			><img
				src="./Button_Trinket.png"
				alt="Edit Card"
				class="h-full w-full"
			/></button
		>
			</div>
			<div class="mt-1   mb-  ">
				<div class=" flex justify-center ">
					<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
						<button class="h-6 w-9 rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/FlamingCrest.png"
								alt="Trinket Icon"
								class=""
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/RedCrest.png"
								alt="Save Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Player_Ranks/BlackTriangle.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>

					<div class="ml-0. mb-1">
						<img
							src="./Avatar_Frame.png"
							alt="Favicon"
							style="width: 103px; height: 100x;"
						/>
					</div>

					<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
						<button class="h-6 w-9  rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/OrangeCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9  rounded"
							><img
								src="./Card_Ranks/GreenCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/PinkDiamond.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>
				</div>
			</div>

			<div class="mt-  flex">
				<img
					class="ml-[-5px] brightness-100 opacity-95"
					src="/Crest_A_CrystalBall.gif"
					alt="Favicon"
					style="width: 33px; height: 27px;"
				/>
				<div class="flex">
					<a
						class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
						href="/blog/{post.slug}"
					>
						Demo Card
					</a>
				</div>
				<div class="ml-auto">
					<img
						class=" mt-1.5  "
						src="/Set_Alpha_Gold.png"
						alt="Favicon"
						style="width: 16px; height: 16px;"
					/>
				</div>
			</div>

			<div
				class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
			>
				<div
					class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
				>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Magic</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Woof</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Doge</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">NWO</span
					>
				</div>
			</div>

			<div class=" mt-2 mb-2 ml-4 flex justify-between">
				<p
					class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
					style="line-height: 0.9;"
				>
					{post.description}
				</p>

				<div class="mt-2 ml-0 flex-shrink-0">
					<img
						src="/DescAvatar_CheemsFloat.png"
						alt="cheems"
						class="h-20 w-11 object-cover"
					/>
				</div>
			</div>

			<!-- Public/Private signafier, image, members online -->
			<div
				class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
			>
				<div class="mt-0. ml-3   flex flex-col  ">
					<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
						Private
					</span>

					<span
						class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
						>HIDDEN</span
					>
				</div>
				<div class="mt-1  ml-0.5 flex justify-center brightness-110">
					<img
						src="/Crest_A_CrystalBall.gif"
						alt="Favicon"
						style="width: 42px; height: 42px;"
					/>
				</div>

				<div class="mt-0. ml-[-4px] flex flex-col ">
					<span
						class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
						>Canvas</span
					>

					<span
						class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
						style="font-size: 0.7rem;"
					>
						{date(post.createdAt)}
					</span>
				</div>
			</div>

			<div class=" mt-[-5px]   flex justify-center">
				<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
			</div>

			<!-- Six emojis in a row -->
			<div class="mt-0.5 flex justify-between opacity-80">
				<span class="text-1xl">👑</span>
				<span class="text-1xl">🍀</span>
				<span class="text-1xl">🧙🏼‍♂️</span>
				<span class="text-1xl">✨</span>
				<span class="text-1xl">🌈 </span>
				<span class="text-1xl">⚡️</span>
			</div>
			<div class="relative" />
		</div>
		<div class="flex justify-center">
			<img
				class=" h-15 top-0 z-0 mb-0 w-40  "
				src="/CardAura_Fire_1.gif"
				alt="  spellcard"
			/>
		</div>
	</div>
</div>
{/each}
<!-- #11Spellcard -->
{#each data.posts as post, i}
<div
	class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
>
	<div class=" overflow-y-auto p-4">
		<div
			style="background-image: url('SpellCard_Test_BG11.png');"
			class="spellcard  eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
		>
			<!-- Your post content here -->

			<div
				class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
			>
				<button class="mr-1 h-4 w-4 rounded"
					><img
						src="./Button_Favorite.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Share.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Save.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 p h-4 w-4  rounded"
					><img
						src="./Button_Delete.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4 rounded"
				><img
					src="./Button_Games.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Crypto.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Tavern.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 p h-4 w-4  rounded"
				><img
					src="./Button_Settings.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
				
			>						<button class="mr-1 h-4 w-4  rounded"
			><img
				src="./Button_Trinket.png"
				alt="Edit Card"
				class="h-full w-full"
			/></button
		>
			</div>
			<div class="mt-1   mb-  ">
				<div class=" flex justify-center ">
					<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
						<button class="h-6 w-9 rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/FlamingCrest.png"
								alt="Trinket Icon"
								class=""
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/RedCrest.png"
								alt="Save Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Player_Ranks/BlackTriangle.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>

					<div class="ml-0. mb-1">
						<img
							src="./Avatar_Frame.png"
							alt="Favicon"
							style="width: 103px; height: 100x;"
						/>
					</div>

					<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
						<button class="h-6 w-9  rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/OrangeCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9  rounded"
							><img
								src="./Card_Ranks/GreenCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/PinkDiamond.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>
				</div>
			</div>

			<div class="mt-  flex">
				<img
					class="ml-[-5px] brightness-100 opacity-95"
					src="/Crest_A_CrystalBall.gif"
					alt="Favicon"
					style="width: 33px; height: 27px;"
				/>
				<div class="flex">
					<a
						class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
						href="/blog/{post.slug}"
					>
						Demo Card
					</a>
				</div>
				<div class="ml-auto">
					<img
						class=" mt-1.5  "
						src="/Set_Alpha_Gold.png"
						alt="Favicon"
						style="width: 16px; height: 16px;"
					/>
				</div>
			</div>

			<div
				class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
			>
				<div
					class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
				>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Magic</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Woof</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Doge</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">NWO</span
					>
				</div>
			</div>

			<div class=" mt-2 mb-2 ml-4 flex justify-between">
				<p
					class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
					style="line-height: 0.9;"
				>
					{post.description}
				</p>

				<div class="mt-2 ml-0 flex-shrink-0">
					<img
						src="/DescAvatar_CheemsFloat.png"
						alt="cheems"
						class="h-20 w-11 object-cover"
					/>
				</div>
			</div>

			<!-- Public/Private signafier, image, members online -->
			<div
				class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
			>
				<div class="mt-0. ml-3   flex flex-col  ">
					<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
						Private
					</span>

					<span
						class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
						>HIDDEN</span
					>
				</div>
				<div class="mt-1  ml-0.5 flex justify-center brightness-110">
					<img
						src="/Crest_A_CrystalBall.gif"
						alt="Favicon"
						style="width: 42px; height: 42px;"
					/>
				</div>

				<div class="mt-0. ml-[-4px] flex flex-col ">
					<span
						class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
						>Canvas</span
					>

					<span
						class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
						style="font-size: 0.7rem;"
					>
						{date(post.createdAt)}
					</span>
				</div>
			</div>

			<div class=" mt-[-5px]   flex justify-center">
				<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
			</div>

			<!-- Six emojis in a row -->
			<div class="mt-0.5 flex justify-between opacity-80">
				<span class="text-1xl">👑</span>
				<span class="text-1xl">🍀</span>
				<span class="text-1xl">🧙🏼‍♂️</span>
				<span class="text-1xl">✨</span>
				<span class="text-1xl">🌈 </span>
				<span class="text-1xl">⚡️</span>
			</div>
			<div class="relative" />
		</div>
		<div class="flex justify-center">
			<img
				class=" h-15 top-0 z-0 mb-0 w-40  "
				src="/CardAura_Fire_1.gif"
				alt="  spellcard"
			/>
		</div>
	</div>
</div>
{/each}
<!-- #12Spellcard -->
{#each data.posts as post, i}
<div
	class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
>
	<div class=" overflow-y-auto p-4">
		<div
			style="background-image: url('SpellCard_Test_BG12.png');"
			class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
		>
			<!-- Your post content here -->

			<div
				class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
			>
				<button class="mr-1 h-4 w-4 rounded"
					><img
						src="./Button_Favorite.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Share.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Save.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 p h-4 w-4  rounded"
					><img
						src="./Button_Delete.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4 rounded"
				><img
					src="./Button_Games.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Crypto.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Tavern.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 p h-4 w-4  rounded"
				><img
					src="./Button_Settings.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
				
			>						<button class="mr-1 h-4 w-4  rounded"
			><img
				src="./Button_Trinket.png"
				alt="Edit Card"
				class="h-full w-full"
			/></button
		>
			</div>
			<div class="mt-1   mb-  ">
				<div class=" flex justify-center ">
					<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
						<button class="h-6 w-9 rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/FlamingCrest.png"
								alt="Trinket Icon"
								class=""
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/RedCrest.png"
								alt="Save Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Player_Ranks/BlackTriangle.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>

					<div class="ml-0. mb-1">
						<img
							src="./Avatar_Frame.png"
							alt="Favicon"
							style="width: 103px; height: 100x;"
						/>
					</div>

					<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
						<button class="h-6 w-9  rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/OrangeCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9  rounded"
							><img
								src="./Card_Ranks/GreenCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/PinkDiamond.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>
				</div>
			</div>

			<div class="mt-  flex">
				<img
					class="ml-[-5px] brightness-100 opacity-95"
					src="/Crest_A_CrystalBall.gif"
					alt="Favicon"
					style="width: 33px; height: 27px;"
				/>
				<div class="flex">
					<a
						class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
						href="/blog/{post.slug}"
					>
						Demo Card
					</a>
				</div>
				<div class="ml-auto">
					<img
						class=" mt-1.5  "
						src="/Set_Alpha_Gold.png"
						alt="Favicon"
						style="width: 16px; height: 16px;"
					/>
				</div>
			</div>

			<div
				class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
			>
				<div
					class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
				>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Magic</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Woof</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Doge</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">NWO</span
					>
				</div>
			</div>

			<div class=" mt-2 mb-2 ml-4 flex justify-between">
				<p
					class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
					style="line-height: 0.9;"
				>
					{post.description}
				</p>

				<div class="mt-2 ml-0 flex-shrink-0">
					<img
						src="/DescAvatar_CheemsFloat.png"
						alt="cheems"
						class="h-20 w-11 object-cover"
					/>
				</div>
			</div>

			<!-- Public/Private signafier, image, members online -->
			<div
				class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
			>
				<div class="mt-0. ml-3   flex flex-col  ">
					<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
						Private
					</span>

					<span
						class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
						>HIDDEN</span
					>
				</div>
				<div class="mt-1  ml-0.5 flex justify-center brightness-110">
					<img
						src="/Crest_A_CrystalBall.gif"
						alt="Favicon"
						style="width: 42px; height: 42px;"
					/>
				</div>

				<div class="mt-0. ml-[-4px] flex flex-col ">
					<span
						class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
						>Canvas</span
					>

					<span
						class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
						style="font-size: 0.7rem;"
					>
						{date(post.createdAt)}
					</span>
				</div>
			</div>

			<div class=" mt-[-5px]   flex justify-center">
				<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
			</div>

			<!-- Six emojis in a row -->
			<div class="mt-0.5 flex justify-between opacity-80">
				<span class="text-1xl">👑</span>
				<span class="text-1xl">🍀</span>
				<span class="text-1xl">🧙🏼‍♂️</span>
				<span class="text-1xl">✨</span>
				<span class="text-1xl">🌈 </span>
				<span class="text-1xl">⚡️</span>
			</div>
			<div class="relative" />
		</div>
		<div class="flex justify-center">
			<img
				class=" h-15 top-0 z-0 mb-0 w-40  "
				src="/CardAura_Fire_1.gif"
				alt="  spellcard"
			/>
		</div>
	</div>
</div>
{/each}
<!-- #13Spellcard -->
{#each data.posts as post, i}
<div
	class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
>
	<div class=" overflow-y-auto p-4">
		<div
			style="background-image: url('SpellCard_Test_BG13.png');"
			class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
		>
			<!-- Your post content here -->

			<div
				class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
			>
				<button class="mr-1 h-4 w-4 rounded"
					><img
						src="./Button_Favorite.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Share.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Save.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 p h-4 w-4  rounded"
					><img
						src="./Button_Delete.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4 rounded"
				><img
					src="./Button_Games.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Crypto.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Tavern.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 p h-4 w-4  rounded"
				><img
					src="./Button_Settings.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
				
			>						<button class="mr-1 h-4 w-4  rounded"
			><img
				src="./Button_Trinket.png"
				alt="Edit Card"
				class="h-full w-full"
			/></button
		>
			</div>
			<div class="mt-1   mb-  ">
				<div class=" flex justify-center ">
					<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
						<button class="h-6 w-9 rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/FlamingCrest.png"
								alt="Trinket Icon"
								class=""
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/RedCrest.png"
								alt="Save Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Player_Ranks/BlackTriangle.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>

					<div class="ml-0. mb-1">
						<img
							src="./Avatar_Frame.png"
							alt="Favicon"
							style="width: 103px; height: 100x;"
						/>
					</div>

					<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
						<button class="h-6 w-9  rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/OrangeCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9  rounded"
							><img
								src="./Card_Ranks/GreenCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/PinkDiamond.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>
				</div>
			</div>

			<div class="mt-  flex">
				<img
					class="ml-[-5px] brightness-100 opacity-95"
					src="/Crest_A_CrystalBall.gif"
					alt="Favicon"
					style="width: 33px; height: 27px;"
				/>
				<div class="flex">
					<a
						class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
						href="/blog/{post.slug}"
					>
						Demo Card
					</a>
				</div>
				<div class="ml-auto">
					<img
						class=" mt-1.5  "
						src="/Set_Alpha_Gold.png"
						alt="Favicon"
						style="width: 16px; height: 16px;"
					/>
				</div>
			</div>

			<div
				class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
			>
				<div
					class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
				>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Magic</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Woof</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Doge</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">NWO</span
					>
				</div>
			</div>

			<div class=" mt-2 mb-2 ml-4 flex justify-between">
				<p
					class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
					style="line-height: 0.9;"
				>
					{post.description}
				</p>

				<div class="mt-2 ml-0 flex-shrink-0">
					<img
						src="/DescAvatar_CheemsFloat.png"
						alt="cheems"
						class="h-20 w-11 object-cover"
					/>
				</div>
			</div>

			<!-- Public/Private signafier, image, members online -->
			<div
				class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
			>
				<div class="mt-0. ml-3   flex flex-col  ">
					<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
						Private
					</span>

					<span
						class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
						>HIDDEN</span
					>
				</div>
				<div class="mt-1  ml-0.5 flex justify-center brightness-110">
					<img
						src="/Crest_A_CrystalBall.gif"
						alt="Favicon"
						style="width: 42px; height: 42px;"
					/>
				</div>

				<div class="mt-0. ml-[-4px] flex flex-col ">
					<span
						class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
						>Canvas</span
					>

					<span
						class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
						style="font-size: 0.7rem;"
					>
						{date(post.createdAt)}
					</span>
				</div>
			</div>

			<div class=" mt-[-5px]   flex justify-center">
				<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
			</div>

			<!-- Six emojis in a row -->
			<div class="mt-0.5 flex justify-between opacity-80">
				<span class="text-1xl">👑</span>
				<span class="text-1xl">🍀</span>
				<span class="text-1xl">🧙🏼‍♂️</span>
				<span class="text-1xl">✨</span>
				<span class="text-1xl">🌈 </span>
				<span class="text-1xl">⚡️</span>
			</div>
			<div class="relative" />
		</div>
		<div class="flex justify-center">
			<img
				class=" h-15 top-0 z-0 mb-0 w-40  "
				src="/CardAura_Fire_1.gif"
				alt="  spellcard"
			/>
		</div>
	</div>
</div>
{/each}
<!-- #14Spellcard -->
{#each data.posts as post, i}
<div
	class="max-w-8x1  flex justify-center overflow-x-auto bg-transparent  p-0.5 "
>
	<div class=" overflow-y-auto p-4">
		<div
			style="background-image: url('SpellCard_Test_BG14.png');"
			class="spellcard eevee card  rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
		>
			<!-- Your post content here -->

			<div
				class="brightness-60 mx-  mt-3.5 mb-2     flex justify-end pl-0 opacity-75 "
			>
				<button class="mr-1 h-4 w-4 rounded"
					><img
						src="./Button_Favorite.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Share.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4  rounded"
					><img
						src="./Button_Save.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 p h-4 w-4  rounded"
					><img
						src="./Button_Delete.png"
						alt="Edit Card"
						class="h-full w-full"
					/></button
				>
				<button class="mr-1 h-4 w-4 rounded"
				><img
					src="./Button_Games.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Crypto.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 h-4 w-4  rounded"
				><img
					src="./Button_Tavern.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
			>
			<button class="mr-1 p h-4 w-4  rounded"
				><img
					src="./Button_Settings.png"
					alt="Edit Card"
					class="h-full w-full"
				/></button
				
			>						<button class="mr-1 h-4 w-4  rounded"
			><img
				src="./Button_Trinket.png"
				alt="Edit Card"
				class="h-full w-full"
			/></button
		>
			</div>
			<div class="mt-1   mb-  ">
				<div class=" flex justify-center ">
					<div class="ml- mb-3.5  flex flex-col justify-between pb-1 ">
						<button class="h-6 w-9 rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/FlamingCrest.png"
								alt="Trinket Icon"
								class=""
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/RedCrest.png"
								alt="Save Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Player_Ranks/BlackTriangle.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>

					<div class="ml-0. mb-1">
						<img
							src="./Avatar_Frame.png"
							alt="Favicon"
							style="width: 103px; height: 100x;"
						/>
					</div>

					<div class="mb-3.5 flex  flex-col justify-between pb-1 ">
						<button class="h-6 w-9  rounded opacity-95 brightness-95"
							><img
								src="./Card_Ranks/OrangeCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9  rounded"
							><img
								src="./Card_Ranks/GreenCrest.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
						<button class="h-6 w-9 rounded"
							><img
								src="./Card_Ranks/PinkDiamond.png"
								alt="Edit Card"
								class="h-full w-full"
								style="width: 40px; height: 40px;"
							/></button
						>
					</div>
				</div>
			</div>

			<div class="mt-  flex">
				<img
					class="ml-[-5px] brightness-100 opacity-95"
					src="/Crest_A_CrystalBall.gif"
					alt="Favicon"
					style="width: 33px; height: 27px;"
				/>
				<div class="flex">
					<a
						class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
						href="/blog/{post.slug}"
					>
						Demo Card
					</a>
				</div>
				<div class="ml-auto">
					<img
						class=" mt-1.5  "
						src="/Set_Alpha_Gold.png"
						alt="Favicon"
						style="width: 16px; height: 16px;"
					/>
				</div>
			</div>

			<div
				class="relative ml-1.5 mt-3.5 mr-1 m flex overflow-x-hidden opacity-90 w-75"
			>
				<div
					class="font-bruno-ace text- animate-marquee whitespace-nowrap text-xs"
				>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Magic</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Woof</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">Doge</span
					>
					<span class="text-ice-blue">#</span><span
						class="px-1 text-electric-yellow">NWO</span
					>
				</div>
			</div>

			<div class=" mt-2 mb-2 ml-4 flex justify-between">
				<p
					class="tracking- font-caveat-cursve mt-2 ml-  mr-0.5 flex-grow content-center overflow-hidden overflow-ellipsis whitespace-normal text-center text-xs text-slate-900"
					style="line-height: 0.9;"
				>
					{post.description}
				</p>

				<div class="mt-2 ml-0 flex-shrink-0">
					<img
						src="/DescAvatar_CheemsFloat.png"
						alt="cheems"
						class="h-20 w-11 object-cover"
					/>
				</div>
			</div>

			<!-- Public/Private signafier, image, members online -->
			<div
				class="pt-0.5 grid grid-cols-3 items-start  opacity-90 brightness-90"
			>
				<div class="mt-0. ml-3   flex flex-col  ">
					<span class=" mb-1 ml-1 pl-1.5 text-xs text-amber-300">
						Private
					</span>

					<span
						class="font-creepster  mt-1 ml-0.5 text-center text-xs font-medium italic text-red-600"
						>HIDDEN</span
					>
				</div>
				<div class="mt-1  ml-0.5 flex justify-center brightness-110">
					<img
						src="/Crest_A_CrystalBall.gif"
						alt="Favicon"
						style="width: 42px; height: 42px;"
					/>
				</div>

				<div class="mt-0. ml-[-4px] flex flex-col ">
					<span
						class="mr-1  inline-block whitespace-nowrap pr-0.5  text-center text-xs text-amber-300"
						>Canvas</span
					>

					<span
						class="font-allerta-stencil mt-2 ml-3 mr-4 flex   justify-center whitespace-nowrap text-xs text-slate-900"
						style="font-size: 0.7rem;"
					>
						{date(post.createdAt)}
					</span>
				</div>
			</div>

			<div class=" mt-[-5px]   flex justify-center">
				<img src="/expBAR_Teal_1.png" alt="Favicon" style="" />
			</div>

			<!-- Six emojis in a row -->
			<div class="mt-0.5 flex justify-between opacity-80">
				<span class="text-1xl">👑</span>
				<span class="text-1xl">🍀</span>
				<span class="text-1xl">🧙🏼‍♂️</span>
				<span class="text-1xl">✨</span>
				<span class="text-1xl">🌈 </span>
				<span class="text-1xl">⚡️</span>
			</div>
			<div class="relative" />
		</div>
		<div class="flex justify-center">
			<img
				class=" h-15 top-0 z-0 mb-0 w-40  "
				src="/CardAura_Fire_1.gif"
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


	.card:hover {
  box-shadow: 
    -20px -20px 30px -25px var(--color1), 
    20px 20px 30px -25px var(--color2), 
    -7px -7px 10px -5px var(--color1), 
    7px 7px 10px -5px var(--color2), 
    0 0 13px 4px rgba(255,255,255,0.3),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);
}

.card.charizard {
  --color1: var(--charizard1);
  --color2: var(--charizard2);
  --front: var(--charizardfront);
}
.card.pika {
  --color1: var(--pika1);
  --color2: var(--pika2);
  --front: var(--pikafront);
}
.card.mewtwo {
  --color1: var(--mewtwo1);
  --color2: var(--mewtwo2);
  --front: var(--mewtwofront);
}
.card.eevee {
  --color1: #ec9bb6;
  --color2: #ccac6f;
  --color3: #69e4a5;
  --color4: #8ec5d6;
  --color5: #b98cce;
  --front: var(--eeveefront);
}

.card:before,
.card:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-repeat: no-repeat;
  opacity: .5;
  mix-blend-mode: color-dodge;
  transition: all .33s ease;
}

.card:before {
  background-position: 50% 50%;
  background-size: 300% 300%;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    var(--color1) 25%,
    transparent 47%,
    transparent 53%,
    var(--color2) 75%,
    transparent 100%
  );
  opacity: .5;
  filter: brightness(.5) contrast(1);
  z-index: 1;
}

.card:after {
  opacity: 1;
  background-image: url("https://assets.codepen.io/13471/sparkles.gif"), 
    url(https://assets.codepen.io/13471/holo.png), 
    linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
  background-position: 50% 50%;
  background-size: 160%;
  background-blend-mode: overlay;
  z-index: 2;
  filter: brightness(1) contrast(1);
  transition: all 2s ease;
  mix-blend-mode: color-dodge;
  opacity: .75;
}

.card.active:after,
.card:hover:after {
  filter: brightness(1) contrast(1);;
  opacity: 1;
}

.card.active,
.card:hover {
  animation: none;
  transition: box-shadow 6s ease-out;
}

.card.active:before,
.card:hover:before {
  animation: none;
  background-image: linear-gradient(
    110deg,
    transparent 25%,
    var(--color1) 48%,
    var(--color2) 52%,
    transparent 75%
  );
  background-position: 50% 50%;
  background-size: 250% 250%;
  opacity: .88;
  filter: brightness(.66) contrast(1.33);
  transition: none;
}

.card.active:before,
.card:hover:before,
.card.active:after,
.card:hover:after {
  animation: none;
  transition: none;
}

.card.animated {
  transition: none;
  animation: holoCard 12s ease 0s 1;
  &:before { 
    transition: none;
    animation: holoGradient 12s ease 0s 1;
  }
  &:after {
    transition: none;
    animation: holoSparkle 12s ease 0s 1;
  }
}




@keyframes holoSparkle {
  0%, 100% {
    opacity: .75; background-position: 50% 50%; filter: brightness(1.2) contrast(1.25);
  }
  5%, 8% {
    opacity: 1; background-position: 40% 40%; filter: brightness(.8) contrast(1.2);
  }
  13%, 16% {
    opacity: .5; background-position: 50% 50%; filter: brightness(1.2) contrast(.8);
  }
  35%, 38% {
    opacity: 1; background-position: 60% 60%; filter: brightness(1) contrast(1);
  }
  55% {
    opacity: .33; background-position: 45% 45%; filter: brightness(1.2) contrast(1.25);
  }
}

@keyframes holoGradient {
  0%, 100% {
    opacity: 0.5;
    background-position: 50% 50%;
    filter: brightness(.5) contrast(1);
  }
  5%, 9% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(.75) contrast(1.25);
  }
  13%, 17% {
    background-position: 0% 0%;
    opacity: .88;
  }
  35%, 39% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(.5) contrast(1);
  }
  55% {
    background-position: 0% 0%;
    opacity: 1;
    filter: brightness(.75) contrast(1.25);
  }
}

@keyframes holoCard {
  0%, 100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  5%, 8% {
    transform: rotateZ(0deg) rotateX(1deg) rotateY(-20deg);
  }
  13%, 16% {
    transform: rotateZ(0deg) rotateX(-1deg) rotateY(32deg);
  }
  35%, 38% {
    transform: rotateZ(3deg) rotateX(11deg) rotateY(20deg);
  }
  55% {
    transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
  }
}



.card.eevee:hover {
  box-shadow: 
    0 0 30px -5px rgba(11, 138, 222, 0.486),
    0 0 10px -2px rgb(11, 10, 10) 
	0 55px 35px -20px rgba(0, 0, 0, 0.5);
}
.card.eevee:hover:before,
.card.eevee.active:before {
  background-image: linear-gradient(
	var(--color2) 20%,
 
    var(--color2) 36%,
	transparent 30%,

    var(--color2) 20%,
 
    transparent 50%
	
  );
}




.demo .card {
  background-image: var(--back);

}


.demo .card:nth-of-type(1),
.demo .card:nth-of-type(2),
.demo .card:nth-of-type(3) {
 
 
  box-shadow: inset 0 0 0 1px rgba(white,0.4), 0 25px 15px -10px rgba(0, 0, 0, 0.5);
  animation: none;
}

.demo .card:nth-of-type(1),
.demo .card:nth-of-type(2),
.demo .card:nth-of-type(3) {
  &:before, &:after {
    animation: none;
     opacity: 1;
  } 
}
.demo .card:nth-of-type(1) {
  &:before, &:after { display: none; }
}
.demo .card:nth-of-type(2) {
  background: none;
  &:before { display: none; }
}
.demo .card:nth-of-type(3) {
  background: none;
  &:after { display: none; }
}

.operator {
  display: inline-block;
  vertical-align: middle;
  font-size: 6vh;
}






html, body {
 
  transform: translate3d(0,0,0.1px);
}
 

 
 
.demo {
  flex-direction: row;
  justify-content: center;
}

@media screen and (min-width: 600px) {
  .cards {
    flex-direction: row;
  }
}






.cards .card {
  &:nth-child(2) {
    &, &:before, &:after {
      animation-delay: 0.25s;
    }
  }
  &:nth-child(3) {
    &, &:before, &:after {
      animation-delay: 0.5s;
    }
  }
  &:nth-child(4) {
    &, &:before, &:after {
      animation-delay: 0.75s;
    }
  }
}


 
.promo {
  margin-top: 50px;
}
.promo img {
  margin-top: 10px;
  max-width: 80%;
}
p a {
  color: cyan;
}

html,body,main {
  min-height: 100%;
}



@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>
