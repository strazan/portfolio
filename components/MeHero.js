import style from './style/MeHero.module.scss'

import React, { useEffect, useRef } from 'react'

const MeHero = props => {
  const scroll = useRef()
  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()
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

      if (textOne.current && textTwo.current && textThree.current) {
        textOne.current.style.marginLeft = `-${scrollTop / 12}vw`
        textTwo.current.style.marginLeft = `calc(-40vw + ${scrollTop / 8}vw)`
        textThree.current.style.marginLeft = `calc(10vw - ${scrollTop / 5}vw)`
      }
    })
  }, [])
  return (
    <div className={style.root}>
      <div className={style.heroTextWrapper}>
        <div className={style.heroText}>
          <h1 ref={textOne} className={style.title}>
            MY NAME IS SIGGE
          </h1>
          <h1
            ref={textTwo}
            className={style.titleFilled}
            style={{ marginLeft: '-40vw' }}
          >
            I AM PHOTOGRAPHER
          </h1>
          <h1
            ref={textThree}
            className={style.title}
            style={{ marginLeft: '10vw' }}
          >
            ALSO AM PROFESSIONAL HACKER
          </h1>
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
