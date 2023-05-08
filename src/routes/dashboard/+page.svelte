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




 
</script>


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


<div class="flex just flex-wrap pt-44 text-white">
	<div class="ml-20 w-full md:w-1/3 px-4">
		<h2 class="text-lg font-medium mb-2 text-center">Selection Fields</h2>
		  <!-- Left -->
		  <div class="mb-4">
			<label for="username" class="block text-white font-bold mb-2">Card Name:</label>
			<input type="text" id="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Card Name">
			  </div>


			  <div class="mb-4">
				<label for="description" class="block text-white font-bold mb-2">Description:</label>
				<textarea id="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter description for Spellcard"></textarea>
			  </div>
<br>
			  <div class="grid grid-cols-3 gap-2">
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag1" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag2" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag3" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag4" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag5" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag6" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag7" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag8" />
				<input type="text" class="p-2 border border-gray-300 rounded-md" placeholder="#hashtag9" />
			  </div>
<br>
<br>
			  <div class="grid grid-cols-6 gap-4">
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>😀</option>
					<option>😁</option>
					<option>😂</option>
					<option>😃</option>
					<option>😄</option>
					<option>😅</option>
					<option>😆</option>
					<option>😉</option>
					<option>😊</option>
					<option>😋</option>
					<option>😎</option>
				  </select>
				</div>
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>😍</option>
					<option>😘</option>
					<option>😜</option>
					<option>😝</option>
					<option>😞</option>
					<option>😠</option>
					<option>😡</option>
					<option>😢</option>
					<option>😤</option>
					<option>😨</option>
					<option>😩</option>
				  </select>
				</div>
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>😪</option>
					<option>😫</option>
					<option>😭</option>
					<option>😰</option>
					<option>😱</option>
					<option>😲</option>
					<option>😳</option>
					<option>😴</option>
					<option>😵</option>
					<option>😷</option>
					<option>🙁</option>
				  </select>
				</div>
				<div>
				  <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					<option>🙂</option>
					<option>🙃</option>
					<option>🙄</option>
					<option>🤔</option>
					<option>🤗</option>
					<option>🤠</option>
					<option>🤡</option>
					<option>🤢</option>
					<option>🤤</option>
					<option>🤥</option>
					<option>🤩</option>
				  </select>
				  
				</div>
				<div>
					<select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					  <option>🙂</option>
					  <option>🙃</option>
					  <option>🙄</option>
					  <option>🤔</option>
					  <option>🤗</option>
					  <option>🤠</option>
					  <option>🤡</option>
					  <option>🤢</option>
					  <option>🤤</option>
					  <option>🤥</option>
					  <option>🤩</option>
					</select>
					
				  </div>
				  <div>
					<select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
					  <option>🙂</option>
					  <option>🙃</option>
					  <option>🙄</option>
					  <option>🤔</option>
					  <option>🤗</option>
					  <option>🤠</option>
					  <option>🤡</option>
					  <option>🤢</option>
					  <option>🤤</option>
					  <option>🤥</option>
					  <option>🤩</option>
					</select>
					
				  </div>
			</div>

			<br>


			<div class="flex justify-evenly text-black">
				<!-- Public/Private selection box -->
				<div class="flex flex-col">
				  <label for="privacy" class="mb-1 font-medium text-white">Privacy:</label>
				  <select id="privacy" name="privacy" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option value="public">Public</option>
					<option value="private">Private</option>
				  </select>
				</div>
				
				<!-- Link/Canvas/Game/Ad selection box -->
				<div class="flex flex-col">
				  <label for="type" class="mb-1 font-medium text-white">Type:</label>
				  <select id="type" name="type" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option value="link">Link</option>
					<option value="canvas">Canvas</option>
					<option value="game">Game</option>
					<option value="ad">Ad</option>
				  </select>
				</div>
			  </div>
	</div>




	<!-- Center Column -->
	<div class="flex justify-center w-full md:w-1/4 px-4">
		<div class=" Gridbox flex justify-center pt-0">

				{#each data.posts as post, i}
					<div
						class="max-w-1x1  flex justify-center overflow-x-auto bg-transparent mt-20  p-0.5 "
					>
						<div class=" overflow-y-auto">
							<div
								style="background-image: url('SpellCard_Test_BG2.png');"
								class="spellcard rounded-lg border-4 border-slate-900 opacity-95 bg-gradient-to-r  from-slate-200 to-slate-300 bg-cover bg-center p-2 shadow-md brightness-95"
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
											class="mb0.5 unstyled font-langar ml-3.5 mt-1.5   flex text-xs tracking-normal  text-slate-200 antialiased opacity-90"
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
				</div>
				</div>
	  








	
  
<!-- Right Column -->
<div class="w-full md:w-1/3 px-4">
	<h2 class="text-lg font-medium mb-2 text-center">Selection Fields</h2>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="avatar">
			Avatar:
		</label>
		<input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="avatar" type="file" accept="image/*">
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="namePlateImage">
			Name Plate Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-blackblack leading-tight focus:outline-none focus:shadow-outline" id="namePlateImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="descriptionImage">
			Description Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="descriptionImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="statsImage">
			Stats Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="statsImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>

	<div class="mb-4">
		<label class="block text-white font-bold mb-2" for="bottomAuraImage">
			Bottom Aura Image:
		</label>
		<select class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="bottomAuraImage">
			<option value="">Select an image</option>
			<option value="image1.png">Image 1</option>
			<option value="image2.png">Image 2</option>
			<option value="image3.png">Image 3</option>
		</select>
	</div>
</div>


	  
	  <!-- more fields for selection fields -->
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