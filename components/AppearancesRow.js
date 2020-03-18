const AppearancesRow = ({ block }) => {
  return (
    <div className="AppearancesRow">
      <p>{`${block.date}. ${block.copy}`}</p>
      <style jsx>{`
        .AppearancesRow {
          background-color: #ddd;
        }
      `}</style>
    </div>
  )
}

export default AppearancesRow
