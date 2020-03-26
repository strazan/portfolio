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
      <h1 className={style.flowingText}>
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.{' '}
      </h1>
      <h1 className={style.flowingTextR}>
        i do design, development, photography, filmmaking. i do design,
        development, photography, filmmaking. i do design, development,
        photography, filmmaking. i do design, development, photography,
        filmmaking. i do design, development, photography, filmmaking. i do
        design, development, photography, filmmaking. i do design, development,
        photography, filmmaking.
      </h1>

      <div ref={scroll} className={style.scrolldown}>
        <div className={style.scrolldownText}>
          <p>scroll down</p>
        </div>

        <div className={style.scrolldownLine}>
          <div className={style.line}></div>
        </div>
      </div>

      {/* <div className="projects"><ProjectCardVertical /></div> */}
    </div>
  )
}

export default MeHero
