import style from './style/ProjectCard.module.scss'
import Link from 'next/link'

const ProjectCard = ({ blok }) => {
  console.log(blok)
  const { content } = blok
  return (
    <div className={style.root}>
      <Link href={`/${blok.full_slug}`}>
        <a>
          <h1>{content.projectName}</h1>
          <h4>{content.projectSubTitle}</h4>
        </a>
      </Link>
    </div>
  )
}

export default ProjectCard
