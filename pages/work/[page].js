import { fetcher, url } from '../../utils/util'

import Layout from '../../components/Layout'
import MainContent from '../../components/MainContent'

const ProjectPage = ({ data }) => {
  const { content } = data
  return (
    <Layout>
      <MainContent>
        <h1>{content.projectName}</h1>
        <h2>{content.projectSubTitle}</h2>
      </MainContent>
    </Layout>
  )
}

// export const getServerSideProps = async () => {
//   const data = await fetcher(`${url}/api/page/work/the-last-christmas`)
//   return { props: { data } }
// }
ProjectPage.getInitialProps = async ({ query }) => {
  const { page } = query
  const data = await fetcher(`${url}/api/page/work/${page}`)
  return { data }
}

export default ProjectPage
