<script>
  import getComponent from './index'
  export let blok
</script>

<div>
  {#each blok.body as blok}
    <svelte:component
      blok={blok}
      this={getComponent(blok.component)}
    />
  {/each}
</div>