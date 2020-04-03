import style from './style/Navigation.module.scss'

import React, { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

const Navigation = ({ isHiddenOnStart }) => {
  const footerNav = useRef()
  const navigationMenu = useRef()
  const [isMenuShowing, setIsMenuShowing] = useState()

  useEffect(() => {
    if (isHiddenOnStart) {
      footerNav.current.style.transform = 'translateY(62px)'
      window.addEventListener('wheel', e => {
        let scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop
        if (scrollTop > 60 && footerNav && footerNav.current) {
          footerNav.current.style.transform = 'translateY(0)'
        } else if (footerNav && footerNav.current) {
          footerNav.current.style.transform = 'translateY(62px)'
        }
      })
    }
  }, [isHiddenOnStart])

  return (
    <div className={style.root}>
      <nav ref={footerNav} className={style.footerNav}>
        <ul>
          <li className={style.menuButton}>
            <button onClick={() => setIsMenuShowing(true)}>Menu</button>
          </li>
          <li>
            <button>Contact me now</button>
          </li>
        </ul>
      </nav>
      {isMenuShowing ? (
        <div ref={navigationMenu} className={style.navigationMenuWrapper}>
          <nav className={style.navigationMenu}>
            <ul>
              <li onClick={() => setIsMenuShowing(false)}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li onClick={() => setIsMenuShowing(false)}>
                <Link href="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li onClick={() => setIsMenuShowing(false)}>
                <Link href="/about">
                  <a>Blog</a>
                </Link>
              </li>
              <li onClick={() => setIsMenuShowing(false)}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li onClick={() => setIsMenuShowing(false)}>
                <Link href="/about">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div
            onClick={() => setIsMenuShowing(false)}
            className={style.closeButton}
          >
            <span />
            <span />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Navigation
