import style from './style/home.module.scss'
import { fetcher, url } from '../utils/util'

import Layout from '../components/Layout'
import MeHero from '../components/MeHero'
import FeaturedProject from '../components/FeaturedProject'
import MainContent from '../components/MainContent'
import Link from 'next/link'

import VanillaTilt from 'vanilla-tilt'
import { useEffect, useRef } from 'react'
import About from '../components/About'

const IndexPage = (props) => {
  const projects = useRef()
  // console.log(props)
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
      <About about={props.about} />
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
        </div>
      </MainContent>
    </Layout>
  )
}
export const getServerSideProps = async () => {
  const data = await fetcher(`${url}/api/page/home`)
  const about = await fetcher(`${url}/api/page/about`)

  return { props: { data, about } }
}
export default IndexPage
