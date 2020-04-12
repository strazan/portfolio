import Layout from '../components/Layout'
// import MainContent from '../components/MainContent'
import style from './style/contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <div className={style.contact}>
        <p className={style.intro}>Hello, here is my contact details. :)</p>
        <h4 className={style.mail}>sigge@labor.cool</h4>
        <h4 className={style.phone}>+46724494740</h4>
        <div className={style.social}>
          <a href="">GitHub</a>
          <a href="">Instagram</a>
          <a href="">LinkedIn</a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
