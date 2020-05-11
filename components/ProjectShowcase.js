import style from './style/ProjectShowcase.module.scss'

import Link from 'next/link'

const ProjectShowcase = ({ content }) => {
  return (
    <div className={style.root}>
      <img className={style.mockup} src={content.mockup} alt="" />
      <div className={style.info}>
        <div className={style.description}>
          {content.description.split('BREAK').map((p, i) => {
            return <p key={i}>{p}</p>
          })}
        </div>

        {content.info.map((section, i) => {
          return (
            <div key={i} className={style.infoSection}>
              <h6 className={style.title}>{section.title}</h6>
              {section.title.toLowerCase() === 'stack' ? (
                section.copy.split('#').map((stack, i) => {
                  return (
                    <p key={i} className={style.copy}>
                      {stack}
                    </p>
                  )
                })
              ) : (
                <p className={style.copy}>{section.copy}</p>
              )}
            </div>
          )
        })}
        <a className={style.link} href={content.url ? content.url.url : ''}>
          {content.url ? 'Visit site' : ''}
        </a>
      </div>
    </div>
  )
}

export default ProjectShowcase
