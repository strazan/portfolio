import style from './style/MeHero.module.scss'

const MeHero = props => {
  return (
    <div className={style.root}>
      <h1 className={style.flowingText}>
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.
        my name is sigge. my name is sigge. my name is sigge. my name is sigge.{' '}
      </h1>
      <h1 className={style.flowingTextR}>
        i do design, development, photography, filmmaking. i do design,
        development, photography, filmmaking. i do design, development,
        photography, filmmaking. i do design, development, photography,
        filmmaking. i do design, development, photography, filmmaking. i do
        design, development, photography, filmmaking. i do design, development,
        photography, filmmaking.
      </h1>

      <div className={style.scrolldown}>
        <div className={style.scrolldownText}>
          <p>scroll down</p>
        </div>

        <div className={style.scrolldownLine}>
          <div className={style.line}></div>
        </div>
      </div>

      {/* <div className="projects"><ProjectCardVertical /></div> */}
    </div>
  )
}

export default MeHero
