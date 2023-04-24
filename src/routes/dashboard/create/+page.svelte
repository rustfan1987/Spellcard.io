<script lang="ts">
	import Form from '$lib/components/forms/post.svelte'

	export let data
</script>

<div class="container ">
	<h1 class="capitalize">.</h1>
	<Form data={data.form} />
</div>
