import { Storyblok } from '../../../utils/StoryblokClient'

export default async (req, res) => {
  Storyblok.get(`cdn/stories`, { starts_with: `work` })
    .then(response => {
      const {
        data: { stories }
      } = response
      const data = { stories }
      res.status(200).json(data)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(`${error.name}: ${error.message}`)
    })
}
