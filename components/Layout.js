import style from './style/Layout.module.scss'

import Head from './head'
import Navigation from './Navigation'

const Layout = ({ settings, children }) => {
  return (
    <div>
      <Head title="siggeme" />
      <Navigation
        isHiddenOnStart={settings && settings.hiddenNav ? true : false}
      />
      <div className={style.Layout}>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
