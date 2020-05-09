import Layout from '../components/Layout'
import { fetcher, url } from '../utils/util'
import style from './style/work.module.scss'

import ProjectCard from '../components/ProjectCard'

import Swiper from 'react-id-swiper'
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import MainContent from '../components/MainContent'

const WorkPage = (props) => {
  const [filters, setFilters] = useState([
    { text: 'All', isActive: true },
    { text: 'Development' },
    { text: 'Multimedia' },
  ])

  const {
    data: { stories },
  } = props

  const [projects, setProjects] = useState(stories)
  // const swiperParams = {
  //   slidesPerView: 'auto',
  //   centeredSlides: true,
  //   loop: true,
  // }

  const setActiveFilters = (text) => {
    Router.push({ pathname: '/work', query: { filter: text } })

    setFilters(
      filters.map((filter) => {
        return {
          text: filter.text,
          isActive: filter.text === text ? true : false,
        }
      })
    )
  }

  useEffect(() => {
    Router.events.on('routeChangeComplete', (url) => {
      setProjects(
        stories.filter((item) => {
          // for (var key in Router.router.query) {
          //   if (
          //     item.content.body[2].type[key] === undefined ||
          //     item.content.body[2].type[key] != Router.router.query[key]
          //   )
          //     return false
          // }
          // return true
          return item.content.body[2].filter.includes(
            Router.router.query.filter
          )
        })
      )
    })
  }, [])

  return (
    <Layout>
      <div className={style.root}>
        <div className={style.filter}>
          {filters.map((filter, i) => {
            return (
              <h2
                onClick={() => {
                  setActiveFilters(filter.text)
                }}
                key={i}
                style={
                  filter.isActive
                    ? { color: ' #ff4438' }
                    : { color: 'transparent' }
                }
                className={style.alternative}
              >
                {filter.text}
              </h2>
            )
          })}
        </div>

        <MainContent>
          <div className={style.projects}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  blok={project.content.body[2]}
                  url={project.full_slug}
                />
              )
            })}
          </div>
        </MainContent>
      </div>
    </Layout>
  )
}
export const getServerSideProps = async () => {
  const data = await fetcher(`${url}/api/page/work`)
  return { props: { data } }
}

export default WorkPage

/*
 var swiper = new Swiper('.swiper-container', {
      
    });*/
