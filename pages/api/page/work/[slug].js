import { Storyblok } from '../../../../utils/StoryblokClient'

export default async (req, res) => {
  const {
    query: { slug }
  } = req
  Storyblok.get(`cdn/stories/work/${slug}`, {})
    .then(response => {
      const {
        data: {
          story: { content }
        }
      } = response
      const data = { content }
      res.status(200).json(data)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(`${error.name}: ${error.message}`)
    })
}
