<script>
	export let segment;
	export let stories = [];
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li class={segment === undefined ? 'selected' : ''}>
			<a href='.'> Index </a>
		</li>
		{#each stories as story}
			<li class={story.full_slug === segment ? 'selected' : ''}>
				<a href={story.full_slug}> {story.name} </a>
			</li>
		{/each}
	</ul>
</nav>