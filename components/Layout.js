import style from './style/Layout.module.scss'

import Head from './head'
import Navbar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div className={style.Layout}>
      <Head title="siggeme" />
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
