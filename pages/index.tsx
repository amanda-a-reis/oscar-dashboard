import type { ReactElement } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import style from '../styles/home/home.module.scss'

export default function Home ({ data }): ReactElement {
  return (
    <div className={style.container}>
      <Dashboard data={data}/>
    </div>
  )
}

export async function getStaticProps (): Promise<any> {
  const apiKey = process.env.API_KEY
  const url = process.env.URL

  const labels = [
    {
      categoryName: 'Movies  1',
      movies: ['Movies 1', 'Movies 2']
    },
    {
      categoryName: 'Movies 2',
      movies: ['Movies 1', 'Movies 2']
    }
  ]
  const results = [
    [5, 2],
    [2, 5]
  ]

  const data = {
    environment: {
      apiKey,
      url
    },
    dataMovies: {
      labels,
      results
    }
  }

  return {
    props: {
      data
    }
  }
}
