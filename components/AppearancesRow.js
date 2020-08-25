import style from './style/AppearancesRow.module.scss'

const AppearancesRow = ({ block }) => {
  return (
    <div className={style.root}>
      <p>
        {`${block.date} `}
        <span className={style.copy}>{`${block.copy}`}</span>
      </p>
    </div>
  )
}

export default AppearancesRow
