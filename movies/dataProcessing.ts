import oscar from './oscar.json'

export const data = {
  //   labels,
  datasets: [
    {
      label: 'Votos',
      data: [10, 9, 8, 7, 6, 5, 5, 4, 3, 2],
      backgroundColor: '#F45B5B'
    }
  ]
}

const labels = []

for (let i = 0; i <= oscar.length - 1; i++) {
  labels.push({
    categoryName: oscar[i].categoryName,
    movies: oscar[i].movies.map((movie) => {
      return movie.titlePT
    })
  })
}

export { labels }
