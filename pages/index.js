import { fetcher, url } from '../utils/util'

import Layout from '../components/Layout'
import MeHero from '../components/MeHero'
import FeaturedProject from '../components/FeaturedProject'
import MainContent from '../components/MainContent'

const IndexPage = props => {
  const {
    data: {
      content: { block }
    }
  } = props

  return (
    <Layout>
      <MeHero />
      <MainContent>
        <div className="featuredIntro">
          <p>Here are some of my recent projects.</p>
        </div>
        <div className="FeaturedProjectsGrid">
          <div className="column" style={{ paddingTop: '4rem' }}>
            {block[0].columnOne.map(feat => {
              return <FeaturedProject key={feat._uid} blok={feat} />
            })}
          </div>
          <div className="column">
            {block[0].columnTwo.map(feat => {
              return <FeaturedProject key={feat._uid} blok={feat} />
            })}
          </div>
        </div>
        <div className="moreProjects">
          <p>All projects --> </p>
        </div>
      </MainContent>

      <style jsx>{`
        .featuredIntro,
        .moreProjects {
          width: 100%;
          padding: 10vh 20vw 10vh 40vw;
        }
        .featuredIntro p {
          width: 10rem;
        }
        .FeaturedProjectsGrid {
          display: flex;
        }
        .column {
          width: 50%;
        }
      `}</style>
    </Layout>
  )
}
export const getServerSideProps = async () => {
  const data = await fetcher(`${url}/api/page/home`)
  return { props: { data } }
}
export default IndexPage
