import style from './style/Layout.module.scss'

import Head from './head'

const Layout = ({ settings, children }) => {
  return (
    <div>
      <Head title="siggeme" />
      <div className={style.Layout}>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
