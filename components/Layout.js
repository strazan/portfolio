import style from './style/Layout.module.scss'

import Navbar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div className={style.Layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
