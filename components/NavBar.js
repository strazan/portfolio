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
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <div className={style.projects}>
              <Link href="/about">
                <a>the last christmas</a>
              </Link>{' '}
              <Link href="/about">
                <a>smooth design</a>
              </Link>{' '}
              <Link href="/about">
                <a>hyper defence</a>
              </Link>{' '}
              <Link href="/about">
                <a>cliber</a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
