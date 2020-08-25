import AppearancesRow from './AppearancesRow'
import Layout from './Layout'
import MainContent from './MainContent'

import style from './style/about.module.scss'

const AboutPage = ({ about }) => {
  const {
    content: { block },
  } = about

  return (
    <div className={style.about}>
      <Layout>
        <MainContent>
          {/* <h1 className={style.title}>this is about me</h1> */}
          {/* <br /> */}
          {/* <div className={style.intro}>
            <h2 className={style.text}>
             
            </h2> */}
          {/* <div className={style.imageWrapper}>
              <img className={style.image} src="/me1-1.jpg" alt="" />
            </div> */}
          {/* </div> */}

          {/* <h3 className={style.subTitle}>me</h3>
          <p className={style.copy}>
            I like to design and develop stuff for the web.
            <br />
            Photography has been a big part of my life for many years and I
            think my ability to see shape and color gives me an edge in web
            design.
          </p> */}
          <br />
          <p className={style.copy}>
            {' '}
            <a href="mailto:sigge@labor.cool">sigge@labor.cool</a>
          </p>
          <p className={style.copy}>+46724494740</p>
          <h3 className={style.subTitle}>hacks</h3>
          <Hack
            title="Is it open?"
            href=""
            desc="Google Chrome extension check if a store is open without having to leave your tabs!"
          />
          <Hack
            title="Pulsing Nebula"
            href="https://pulsing-nebula.netlify.com/"
            desc="A contribution to the KTH CI hackathon, the first ever continuous integration art hackathon."
          />
          <Hack
            title="Hyper Defence"
            href="https://hyper-defence.netlify.com"
            desc="Tower defence game inspired by the Hyper Island philosophy."
          />
          <Hack
            title="Spangrid"
            href="https://github.com/strazan/spangrid"
            desc="JavaScript library which allows you to span grid items randomly within an interval."
          />
          <Hack
            title="Zenit"
            href="https://github.com/strazan/zenit"
            desc="The new best IDE for Java-coding."
          />
          <h3 className={style.subTitle}>appearances</h3>
          <div className={style.appearancesRows}>
            {block.map((appearances) => {
              return (
                <AppearancesRow key={appearances._uid} block={appearances} />
              )
            })}
          </div>

          <h3 className={style.subTitle}>projects</h3>
        </MainContent>
      </Layout>
    </div>
  )
}

export const Hack = ({ year, title, href, desc }) => {
  return (
    <div className={style.hack}>
      <a
        className={style.title}
        style={{ color: '#01f', paddingRight: '10px' }}
        href={href}
      >
        {title}
      </a>
      <p className={style.hackCopy}>
        <span className={style.hyphen}>- </span>
        {`${desc}`}
      </p>
    </div>
  )
}

export default AboutPage
