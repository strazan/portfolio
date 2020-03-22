import style from './style/Layout.module.scss'

import Head from './head'
import Navbar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head title="siggeme" />
      <Navbar />
      <div className={style.Layout}>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
