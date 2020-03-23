import Layout from '../components/Layout'
import { fetcher, url } from '../utils/util'
import MainContent from '../components/MainContent'
import ProjectCard from '../components/ProjectCard'

const WorkPage = props => {
  const {
    data: { stories }
  } = props

  return (
    <Layout>
      <MainContent>
        {stories.map(project => {
          return <ProjectCard key={project.id} blok={project} />
        })}
      </MainContent>
    </Layout>
  )
}
export const getServerSideProps = async () => {
  const data = await fetcher(`${url}/api/page/work`)
  return { props: { data } }
}

export default WorkPage
