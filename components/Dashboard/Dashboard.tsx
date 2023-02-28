import { useState, type ReactElement } from 'react'
import style from '../../styles/dashboard/dashboard.module.scss'
import { BarChart } from '../Chart/Bar'

export default function Dashboard ({ data }): ReactElement {
  const [id, setId] = useState(0)

  const labels = data.dataMovies.labels
  const results = data.dataMovies.results

  const lastCategory = labels.length - 1

  function next (): void {
    if (id === lastCategory) {
      setId(lastCategory)
    } else {
      setId(id + 1)
    }
  }

  function previous (): void {
    if (id === 0) {
      setId(0)
    } else {
      setId(id - 1)
    }
  }

  return (
    <div className={style.container}>
      <h1 className={style.movieTitle}>{labels[id].categoryName}</h1>
      <BarChart labels={labels[id].movies} votesResult={results[id]} />
      <div className={style.buttonContainer}>
        <button
          className={style.categoryButton}
          onClick={() => {
            previous()
          }}
        >
          {id === 0 ? '' : '< Anterior'}
        </button>
        <p className={style.categoryText}>Categoria</p>
        <button
          className={style.categoryButton}
          onClick={() => {
            next()
          }}
        >
          {id === lastCategory ? '' : 'Próximo >'}
        </button>
      </div>
    </div>
  )
}
