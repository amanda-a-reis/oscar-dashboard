export const a = 'a'

// import { useState, type ReactElement } from 'react'
// import style from '../../styles/dashboard/dashboard.module.scss'
// import { BarChart } from '../Chart/Bar'

// export default function Dashboard ({ data }): ReactElement {
//   const [id, setId] = useState(0)

//   const labels = data.dataMovies.labels
//   const results = data.dataMovies.results
//   const total = data.dataMovies.numOfVotes

//   function sumCategoryVotes (data): number {
//     return data.reduce((acumulador: number, valorAtual: number) => {
//       return acumulador + valorAtual
//     })
//   }

//   const votesOfCategory = sumCategoryVotes(results[id])

//   type Movies = [name: string, votes: number]

//   function sortVotes (): any {
//     const moviesData: Movies[] = Array.from(
//       { length: labels[id].movies.length },
//       (movie, index) => {
//         return [labels[id].movies[index], results[id][index]]
//       }
//     )

//     const moviesMap = new Map(moviesData)
//     const moviesSorted = new Map(
//       [...moviesMap.entries()].sort((a, b) => b[1] - a[1])
//     )

//     const sortedArray = [...moviesSorted]

//     const movies = sortedArray.map(movie => {
//       return movie[0]
//     })

//     const votes = sortedArray.map(vote => {
//       return vote[1]
//     })

//     return [movies, votes]
//   }

//   const [movies, votes] = sortVotes()

//   type Percents = [name: string, percent: number]

//   function calculatePercent (): any {
//     const percents: Percents[] = Array.from(
//       { length: results[id].length },
//       (movie, index) => {
//         return [labels[id].movies[index], 0]
//       }
//     )

//     results[id].map((result, index) => {
//       const percent = Math.round((result / votesOfCategory) * 100)
//       percents[index][1] = percent
//       return true
//     })

//     const percentsMap = new Map(percents)
//     const percentsSorted = new Map(
//       [...percentsMap.entries()].sort((a, b) => b[1] - a[1])
//     )

//     return [...percentsSorted]
//   }

//   const percents = calculatePercent()

//   const lastCategory = labels.length - 1

//   function next (): void {
//     if (id === lastCategory) {
//       setId(lastCategory)
//     } else {
//       setId(id + 1)
//     }
//   }

//   function previous (): void {
//     if (id === 0) {
//       setId(0)
//     } else {
//       setId(id - 1)
//     }
//   }

//   return (
//     <div className={style.container}>
//       <h1 className={style.movieTitle}>{labels[id].categoryName}</h1>
//       <div className={style.dataContainer}>
//         <div className={style.bar}>
//           <BarChart labels={movies} votesResult={votes} />
//         </div>
//         <div className={style.percentsContainer}>
//           <div className={style.totalContainer}>
//             <p className={style.totalTitle}>Votos da categoria:</p>
//             <p className={style.total}>{votesOfCategory}</p>
//           </div>
//           {percents.map((percent, index) => (
//             <div key={index} className={style.percentContainer}>
//               <p className={style.percentMovie}>{percent[0]}</p>
//               <p className={style.percentValue}>{percent[1]}%</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={style.votesContainer}>
//         <div className={style.totalContainer}>
//           <p className={style.totalTitle}>Votos totais:</p>
//           <p className={style.total}>{total}</p>
//         </div>
//       </div>
//       <div className={style.buttonContainer}>
//         <button
//           className={style.categoryButton}
//           onClick={() => {
//             previous()
//           }}
//         >
//           {id === 0 ? '' : '< Anterior'}
//         </button>
//         <p className={style.categoryText}>Categoria</p>
//         <button
//           className={style.categoryButton}
//           onClick={() => {
//             next()
//           }}
//         >
//           {id === lastCategory ? '' : 'Próximo >'}
//         </button>
//       </div>
//     </div>
//   )
// }
