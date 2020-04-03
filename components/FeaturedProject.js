import style from './style/FeaturedProject.module.scss'
import { useEffect } from 'react'

const FeaturedProject = ({ blok }) => {
  return (
    <div
      data-tilt
      data-tilt-max="10"
      data-tilt-speed="300"
      data-tilt-reverse="true"
      className={style.root}
    >
      <div className={style.imageWrapper}>
        <img src={blok.image} alt="" />
      </div>
      <h2 className={style.projectName}>{blok.projectName}</h2>
      <h3 className={style.projectRole}>{blok.projectRole}</h3>
    </div>
  )
}

export default FeaturedProject
