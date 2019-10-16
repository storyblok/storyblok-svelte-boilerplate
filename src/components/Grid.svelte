<script>
  import getComponent from './index'

  export let blok
</script>

<div class="grid">
  {#each blok.columns as blok}
    <svelte:component blok={blok} this={getComponent(blok.component)} />
  {/each}
</div>