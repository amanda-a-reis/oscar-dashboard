import oscar from './oscar.json'

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
