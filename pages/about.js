import { fetcher, url } from '../utils/util'
import AppearancesRow from '../components/AppearancesRow'
import Layout from '../components/Layout'
import MainContent from '../components/MainContent'

const AboutPage = props => {
  const {
    data: {
      content: { block }
    }
  } = props

  return (
    <Layout>
      <MainContent>
        <h1 className="title">this is about me</h1>
        <br />
        <h3>appearances</h3>
        {block.map(appearances => {
          return <AppearancesRow key={appearances._uid} block={appearances} />
        })}
        <style jsx>{`
          h1,
          h3 {
            color: #ff4438;
          }
          h3 {
            font-size: 1.5rem;
            padding-bottom: 1rem;
          }
        `}</style>
      </MainContent>
    </Layout>
  )
}
export const getServerSideProps = async () => {
  const data = await fetcher(`${url}/api/page/about`)
  return { props: { data } }
}

export default AboutPage
