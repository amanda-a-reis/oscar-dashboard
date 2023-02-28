import { type ReactElement } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import style from '../../styles/chart/pie.module.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart'
    }
  }
}

interface MoviesData {
  labels: string[]
  votesResult: number[]
}

export function BarChart ({ labels, votesResult }: MoviesData): ReactElement {
  console.log(votesResult)
  const data = {
    labels,
    datasets: [
      {
        label: 'Votos',
        data: votesResult,
        backgroundColor: '#F45B5B'
      }
    ]
  }

  return (
    <div className={style.container}>
      <Bar options={options} data={data} />
    </div>
  )
}
