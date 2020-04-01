import style from './style/MeHero.module.scss'

import React, { useEffect, useRef } from 'react'

const MeHero = props => {
  const scroll = useRef()
  useEffect(() => {
    window.addEventListener('wheel', e => {
      let scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop
      if (scrollTop > 60 && scroll.current) {
        scroll.current.style.opacity = '0'
      } else if (scroll.current) {
        scroll.current.style.opacity = '1'
      }
    })
  }, [])
  return (
    <div className={style.root}>
      <div className={style.heroTextWrapper}>
        <div className={style.heroText}>
          <h1 className={style.title}>MY NAME IS SIGGE</h1>
          <h1 className={style.titleFilled}>I AM HACKER</h1>
          <h1 className={style.title}>ALSO AM PHOTOGRAPHER</h1>
        </div>
      </div>
      <div ref={scroll} className={style.scrolldown}>
        <div className={style.scrolldownText}>
          <p>scroll down</p>
        </div>

        <div className={style.scrolldownLine}>
          <div className={style.line}></div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="projects"><ProjectCardVertical /></div> */}
    </div>
  )
}

export default MeHero
