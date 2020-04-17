import Layout from '../components/Layout'
// import MainContent from '../components/MainContent'
import style from './style/contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <div className={style.contact}>
        {/* <p className={style.intro}>Here is my contact details. :)</p> */}
        <h4 className={style.mail}>sigge@labor.cool</h4>
        <h4 className={style.phone}>+46724494740</h4>
        <div className={style.social}>
          <a target="_blank" href="https://github.com/strazan">
            GitHub
          </a>
          <a target="_blank" href="https://www.instagram.com/s1gge/">
            Instagram
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/siggelabor/">
            LinkedIn
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
