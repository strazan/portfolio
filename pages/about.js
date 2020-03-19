import { fetcher, url } from '../utils/util'
import AppearancesRow from '../components/AppearancesRow'
import Layout from '../components/Layout'

const AboutPage = props => {
  const {
    data: {
      content: { block }
    }
  } = props

  return (
    <Layout>
      <h1 className="title">this is about me</h1>
      <br />
      <h3>appearances</h3>
      {block.map(appearances => {
        return <AppearancesRow key={appearances._uid} block={appearances} />
      })}
      <style jsx>{`
        h1,
        h3 {
          color: #fe1;
        }
        h3 {
          font-size: 1.5rem;
          padding-bottom: 1rem;
        }
      `}</style>
    </Layout>
  )
}
AboutPage.getInitialProps = async () => {
  const data = await fetcher(`${url}/api/page/about`)
  return { data }
}

export default AboutPage
