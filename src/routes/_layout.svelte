<script context="module">
  import client, { defaultRequestConfig as reqConfig } from '../storyblokClient'

	export async function preload(page, session) {
    const response = await client.getAll('cdn/stories', reqConfig)

		return { stories: response || [] }
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';

	export let stories = []
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment} {stories} />

<main>
	<slot></slot>
</main>