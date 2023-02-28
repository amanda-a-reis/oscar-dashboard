import { type ReactElement } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import style from '../../styles/chart/pie.module.scss'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: [
    'Top Gun: Maverick',
    'Entre Mulheres',
    'Tudo em Todo o Lugar Ao Mesmo Tempo',
    'Os Banshees de Inisherin',
    'Triângulo da Tristeza',
    'Os Fabelmans',
    'Nada de Novo no Front',
    'Avatar: O Caminho da Água',
    'Elvis',
    'Tár'
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 9, 8, 7, 6, 5, 4, 4, 3, 2],
      backgroundColor: [
        'rgba(58, 29, 133, 1)',
        'rgba(58, 29, 133, 0.9)',
        'rgba(58, 29, 133, 0.8)',
        'rgba(58, 29, 133, 0.7)',
        'rgba(58, 29, 133, 0.6)',
        'rgba(58, 29, 133, 0.5)',
        'rgba(58, 29, 133, 0.4)',
        'rgba(58, 29, 133, 0.3)',
        'rgba(58, 29, 133, 0.2)',
        'rgba(58, 29, 133, 0.1)'
      ],
      borderColor: [
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)',
        'rgb(196, 195, 195)'
      ],
      borderWidth: 1
    }
  ]
}

export default function PieChart (): ReactElement {
  return (
    <div className={style.container}>
        <Pie data={data}/>
    </div>
  )
}
