import Layout from '../components/Layout'
import { fetcher, url } from '../utils/util'
import style from './style/work.module.scss'

import ProjectCard from '../components/ProjectCard'

import Swiper from 'react-id-swiper'
import React, { useEffect, useState } from 'react'

const WorkPage = props => {
  const [filters, setFilters] = useState([
    { text: 'All', isActive: true },
    { text: 'Websites', isActive: false },
    { text: 'Multimedia', isActive: false }
  ])

  const {
    data: { stories }
  } = props

  const swiperParams = {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true
  }

  const setActiveFilters = text => {
    setFilters(
      filters.map(filter => {
        return {
          text: filter.text,
          isActive: filter.text === text ? true : false
        }
      })
    )
  }

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
        <Swiper {...swiperParams} className={style.projects}>
          {stories.map(project => {
            const active = filters.filter(f => f.isActive)[0].text
            // console.log(active)
            console.log(project.content.body[2].type)
            // .type.indexOf(active))

            return project.content.body[2].type.indexOf(active) > -1 ? (
              <div
                key={project.id}
                style={{ flexShrink: '1 !important' }}
                className={style.swiperSlide}
              >
                <ProjectCard
                  blok={project.content.body[2]}
                  url={project.full_slug}
                />
              </div>
            ) : (
              <div style={{ display: 'none' }}></div>
            )
          })}
        </Swiper>
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
