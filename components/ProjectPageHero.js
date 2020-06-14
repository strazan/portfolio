import style from './style/ProjectPageHero.module.scss'

import Link from 'next/link'
import MainContent from './MainContent'
const DevWork = ({ content }) => {
  //   const {
  //     body: { projectHero }
  //   } = content
  return (
    <div className={style.root}>
      <img className={style.image} src={content.image} alt="" />
      <h1 className={style.name}>{content.name}</h1>
      <h4 className={style.role}>{content.role}</h4>
    </div>
  )
}

export default DevWork
