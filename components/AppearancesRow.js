import style from './style/AppearancesRow.module.scss'

const AppearancesRow = ({ block }) => {
  return (
    <div className={style.root}>
      <p>{`${block.date}. ${block.copy}`}</p>
    </div>
  )
}

export default AppearancesRow
