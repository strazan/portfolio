import Layout from '../components/Layout'
import MainContent from '../components/MainContent'
import Navigation from '../components/Navigation'

import Link from 'next/link'

import style from './style/menu.module.scss'

import { useRef, useState } from 'react'

const Menu = () => {
  const navigationMenu = useRef()
  //   const [isMenuShowing, setIsMenuShowing] = useState()

  const setIsMenuShowing = (bool) => {
    navigationMenu.current.style.opacity = 0
  }
  return (
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
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div
        onClick={() => setIsMenuShowing(false)}
        className={style.closeButton}
      >
        <span />
        <span />
      </div> */}
    </div>
  )
}

export default Menu
