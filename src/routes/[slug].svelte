<script context="module">
  import client, { defaultRequestConfig as reqConfig } from '../storyblokClient'
  import getComponent from '../components'

	export async function preload(page, session) {
    const { slug } = page.params

    const response = await client.get('cdn/stories/' + slug, reqConfig)

		return { story: response.data.story || {} }
  }
</script>

<script>
  export let story = {}
</script>

<svelte:head>
  <title>{story.name}</title>
</svelte:head>

{#if story.content.component}
  <svelte:component
    blok={story.content}
    this={getComponent(story.content.component)}
  />
{/if}