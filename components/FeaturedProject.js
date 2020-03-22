import style from './style/FeaturedProject.module.scss'

const FeaturedProject = ({ blok }) => {
  return (
    <div className={style.root}>
      <div className={style.imageWrapper}>
        <img src={blok.image} alt="" />
      </div>
      <h2 className={style.projectName}>{blok.projectName}</h2>
      <h3 className={style.projectRole}>{blok.projectRole}</h3>
    </div>
  )
}

export default FeaturedProject
