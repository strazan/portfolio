import style from './style/ProjectCard.module.scss'
import Link from 'next/link'

const ProjectCard = ({ blok, url }) => {
  return (
    <div className={style.root}>
      <Link href={`/${url}`}>
        <a>
          <h1>{blok.title}</h1>
          <img src={blok.image} alt="" />
        </a>
      </Link>
    </div>
  )
}

export default ProjectCard
