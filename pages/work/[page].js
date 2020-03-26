import style from './page.module.scss'
import { fetcher, url } from '../../utils/util'

import Layout from '../../components/Layout'
import MainContent from '../../components/MainContent'

const ProjectPage = ({ data }) => {
  const { content } = data
  return (
    <Layout>
      <MainContent>
        <div className={style.intro}>
          <h1 className={style.name}>{content.projectName}</h1>
          <h2 className={style.subTitle}>{content.projectSubTitle}</h2>
        </div>
      </MainContent>
      <div
        className={style.moneyshot}
        style={{ backgroundColor: content.moneyshotColor }}
      ></div>
    </Layout>
  )
}

ProjectPage.getInitialProps = async ({ query }) => {
  const { page } = query
  const data = await fetcher(`${url}/api/page/work/${page}`)
  return { data }
}

export default ProjectPage
