<script lang="ts">
	import { date } from '$lib/utils'

	export let data
</script>

<main class="container mt-10">
	<h1 class="mb-10 flex justify-center capitalize">New Spells</h1>

	<div
		class=" spellcard rounded-lg border-4 border-slate-900 bg-gradient-to-r from-slate-200 to-slate-300 bg-cover bg-center p-1 pt-5 shadow-md"
	>
		{#each data.posts as post, i}
			<div class="mx-0 mb-1 flex justify-around ">
				<button
					class="h-6 w-6 rounded bg-blue-500 font-medium text-white hover:bg-blue-600"
					>1</button
				>
				<button
					class="h-6 w-6 rounded bg-blue-200 font-medium text-white hover:bg-blue-600"
					>2</button
				>
				<button
					class="h-6 w-6 rounded bg-blue-300 font-medium text-white hover:bg-blue-600"
					>3</button
				>
				<button
					class="h-6 w-6 rounded bg-blue-700 font-medium text-white hover:bg-blue-600"
					>4</button
				>
				<button
					class="h-6 w-6 rounded bg-blue-800 font-medium text-white hover:bg-blue-600"
					>5</button
				>
			</div>
			<div class=" flex justify-center ">
				<div class="flex flex-col justify-between pr-2 ">
					<button
						class="h-6 w-6 rounded bg-blue-500 font-medium text-white hover:bg-blue-600"
						>A</button
					>
					<button
						class="h-6 w-6 rounded bg-blue-600 font-medium text-white hover:bg-blue-600"
						>B</button
					>
					<button
						class="h-6 w-6 rounded bg-blue-700 font-medium text-white hover:bg-blue-600"
						>C</button
					>
				</div>

				<div class="pr-1.5 pl-1.5">
					<img
						src="./cheems.fw.png"
						alt="Favicon"
						style="width: 80px; height: 80px;"
					/>
				</div>

				<div class="flex flex-col justify-between pl-2.5">
					<button
						class="h-6 w-6 rounded bg-blue-700 font-medium text-white hover:bg-blue-600"
						>$</button
					>
					<button
						class="h-6 w-6 rounded bg-blue-800 font-medium text-white hover:bg-blue-600"
						>!</button
					>
					<button
						class="h-6 w-6 rounded bg-blue-900 font-medium text-white hover:bg-blue-600"
						>?</button
					>
				</div>
			</div>

			<a
				class="unstyled font-semibold capitalize text-primary-500"
				href="/blog/{post.slug}"
			>
				{post.title}
			</a>

			<div class="relative flex overflow-x-hidden">
				<div class=" text-bold animate-marquee whitespace-nowrap text-red-900">
					<span class="px-1">#Cheems</span>
					<span class="px-1">#Nice</span>
				</div>
			</div>

			<div class="mt-1 mb-1 flex justify-between">
				<p class="mt-1.5 pr-0.5 text-center text-xs text-slate-900">
					{post.description}
				</p>
				<img
					src="/cheems.fw.png"
					alt="Favicon"
					style="width: 45px; height: 100px;"
				/>
			</div>

			<!-- Public/Private signafier, image, members online -->
			<div class="row-gap: 1px; mb-1 flex items-center justify-between">
				<span
					class="font-sm rounded-full bg-green-500 py-1 px-1 text-white"
					style="border-radius: 15px;"
				>
					Public
				</span>

				<img
					src="/cheems.fw.png"
					alt="Favicon"
					style="width: 35px; height: 35px;"
				/>
				<span class="text-center text-sm text-green-500 ">5 online</span>
			</div>

			<div class="mb-1 h-3 rounded-full bg-gray-300">
				<div
					class="h-full rounded-full bg-gradient-to-r from-black to-blue-700"
				/>
			</div>

			<!-- Six emojis in a row -->
			<div class="flex justify-between">
				<span class="text-1xl">😀</span>
				<span class="text-1xl">😂</span>
				<span class="text-1xl">😍</span>
				<span class="text-1xl">🤔</span>
				<span class="text-1xl">🤢</span>
				<span class="text-1xl">😡</span>
			</div>

			<p />
			<p class="mt-4 text-gray-600 dark:text-gray-400">
				{date(post.createdAt)}
			</p>

			{#if data.posts.length > 1 && data.posts.length !== i + 1}
				<hr />
			{/if}
		{/each}
	</div>
</main>
