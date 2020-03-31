import style from './style/MainContent.module.scss'

const MainContent = ({ children }) => {
  return (
    <div className={style.root}>
      <div>{children}</div>
    </div>
  )
}

export default MainContent
