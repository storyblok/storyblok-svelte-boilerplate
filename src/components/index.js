import Grid from './Grid.svelte'
import Teaser from './Teaser.svelte'
import Feature from './Feature.svelte'
import Page from './Page.svelte'
import NotFound from './404.svelte'

const Components = {
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  page: Page
}

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return NotFound
}