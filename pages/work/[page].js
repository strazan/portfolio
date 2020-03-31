import style from './page.module.scss'
import { fetcher, url } from '../../utils/util'

import Layout from '../../components/Layout'
import MainContent from '../../components/MainContent'
import DevWork from '../../components/DevWork'

const ProjectPage = ({ data }) => {
  const { content } = data
  console.log(content)

  return (
    <Layout>
      <DevWork content={content} />
    </Layout>
  )
}

ProjectPage.getInitialProps = async ({ query }) => {
  const { page } = query
  const data = await fetcher(`${url}/api/page/work/${page}`)
  return { data }
}

export default ProjectPage
