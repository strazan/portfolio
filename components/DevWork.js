import style from './style/DevWork.module.scss'

import ProjectPageHero from './ProjectPageHero'
import ProjectShowcase from './ProjectShowcase'

const DevWork = ({ content }) => {
  return (
    <div className={style.DevWork}>
      <ProjectPageHero content={content.body[0]} />
      <ProjectShowcase content={content.body[1]} />

      {/* <div className={style.hero}> */}
      {/* <div className={style.heroImageWrapper}> */}
      {/* <img className={style.heroImage} src={projectHero.image} alt="" /> */}
      {/* </div> */}
      {/* <h1>{projectHero.name}</h1> */}
      {/* <h4>{projectHero.role}</h4> */}
      {/* </div> */}
    </div>
  )
}

export default DevWork
