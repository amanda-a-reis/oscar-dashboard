import type { ReactElement } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import style from '../styles/home/home.module.scss'
import axios from 'axios'

import { labels } from '../movies/dataProcessing'
import titles from '../movies/titles_2024.json'

export default function Home ({ data }): ReactElement {
  return (
    <div className={style.container}>
      <Dashboard data={data}/>
    </div>
  )
}

export async function getServerSideProps (): Promise<any> {
  const url = process.env.URL

  const resultsJSON = await axios.get(`${url}/api/oscar/votes`)

  const resultsByCategory = resultsJSON.data.results
  const numOfVotes = resultsJSON.data.numOfVotes
  const totals = resultsJSON.data.total

  const results = Array.from(
    { length: resultsByCategory.length },
    () => []
  )

  for (let i = 0; i <= resultsByCategory.length - 1; i++) {
    resultsByCategory[i].votes.map((vote) => {
      results[i].push(vote.votes)
      return true
    })
  }

  const totalVotes = totals.map(total => {
    return total.votes
  })

  const allVotes = {
    categoryName: 'Resultado Geral dos Filmes',
    movies: titles
  }

  labels.push(allVotes)
  results.push(totalVotes)

  const data = {
    dataMovies: {
      labels,
      results,
      numOfVotes
    }
  }

  return {
    props: {
      data
    }
  }
}
