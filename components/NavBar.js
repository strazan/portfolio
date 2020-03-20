import style from './style/Navbar.module.scss'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={style.root}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>work</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
