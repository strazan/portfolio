import style from './style/ProjectShowcase.module.scss'

const ProjectShowcase = ({ content }) => {
  console.log(content)

  return (
    <div className={style.root}>
      <img className={style.mockup} src={content.mockup} alt="" />
      <div className={style.info}>
        <p className={style.description}>{content.description}</p>
        {content.info.map((section) => {
          return (
            <div className={style.infoSection}>
              <h6 className={style.title}>{section.title}</h6>
              {section.title.toLowerCase() === 'stack' ? (
                section.copy.split('#').map((stack) => {
                  return <p className={style.copy}>{stack}</p>
                })
              ) : (
                <p className={style.copy}>{section.copy}</p>
              )}
            </div>
          )
        })}
        <a className={style.link} href={content ? content.url : ''}>
          {content.url ? 'Visit site' : ''}
        </a>
      </div>
    </div>
  )
}

export default ProjectShowcase
