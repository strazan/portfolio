import style from './style/DevWork.module.scss'

import ProjectPageHero from './ProjectPageHero'
import ProjectShowcase from './ProjectShowcase'

const DevWork = ({ content }) => {
  return (
    <div className={style.DevWork}>
      <ProjectPageHero content={content.body[0]} />
      <ProjectShowcase content={content.body[1]} />
    </div>
  )
}

export default DevWork
