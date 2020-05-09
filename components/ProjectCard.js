import style from './style/ProjectCard.module.scss'
import Link from 'next/link'

const ProjectCard = ({ blok, url }) => {
  console.log(blok)
  return (
    <div className={style.root}>
      <Link href={`/${url}`}>
        <a>
          <h1>{blok.title}</h1>
          <img src={blok.image} alt="" />
        </a>
      </Link>
      <h3 className={style.deliverable}>{blok.role}</h3>
    </div>
  )
}

export default ProjectCard
