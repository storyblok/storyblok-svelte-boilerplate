import StoryblokClient from 'storyblok-js-client'

const client = new StoryblokClient({
  accessToken: '<YOUR_TOKEN>' // replace with your accessToken
})

export const defaultRequestConfig = {
  version: 'draft'
}

export default client