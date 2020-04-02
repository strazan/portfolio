import style from './style/home.module.scss'
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
    <Layout settings={{ hiddenNav: true }}>
      <MeHero />
      <MainContent>
        <div className={style.featuredIntro}>
          <p>Here are some of my recent projects.</p>
        </div>
        <div className={style.FeaturedProjectsGrid}>
          <div className={style.column} style={{ paddingTop: '4rem' }}>
            {block[0].columnOne.map(feat => {
              return <FeaturedProject key={feat._uid} blok={feat} />
            })}
          </div>
          <div className={style.column}>
            {block[0].columnTwo.map(feat => {
              return <FeaturedProject key={feat._uid} blok={feat} />
            })}
          </div>
        </div>
        <div className={style.moreProjects}>
          <p>All projects --> </p>
        </div>
      </MainContent>
    </Layout>
  )
}
export const getServerSideProps = async () => {
  const data = await fetcher(`${url}/api/page/home`)
  return { props: { data } }
}
export default IndexPage
