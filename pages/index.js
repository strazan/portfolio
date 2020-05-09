import style from './style/home.module.scss'
import { fetcher, url } from '../utils/util'

import Layout from '../components/Layout'
import MeHero from '../components/MeHero'
import FeaturedProject from '../components/FeaturedProject'
import MainContent from '../components/MainContent'
import Link from 'next/link'

import VanillaTilt from 'vanilla-tilt'
import { useEffect, useRef } from 'react'

const IndexPage = (props) => {
  const projects = useRef()

  const {
    data: {
      content: { block },
    },
  } = props

  useEffect(() => {
    VanillaTilt.init('', {
      max: 5,
      speed: 400,
    })
  }, [props])
  return (
    <Layout settings={{ hiddenNav: true }}>
      <MeHero />
      <MainContent>
        <div
          ref={projects}
          id="projjectss"
          className={style.FeaturedProjectsGrid}
        >
          <div className={style.column} style={{ paddingTop: '4rem' }}>
            {block[0].columnOne.map((feat) => {
              return <FeaturedProject key={feat._uid} blok={feat} />
            })}
          </div>
          <div className={style.column}>
            {block[0].columnTwo.map((feat) => {
              return <FeaturedProject key={feat._uid} blok={feat} />
            })}
          </div>
        </div>
        <div className={style.moreProjects}>
          <Link href="/work">
            <a>
              All projects <span className={style.arrow}>⭢</span>
            </a>
          </Link>
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
