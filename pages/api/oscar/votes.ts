import type { NextApiRequest, NextApiResponse } from 'next'
import MongoDB from '../../../mongodb/config'
import { UserVote, type IUserVote } from '../../../mongodb/vote'
import { labels } from '../../../movies/dataProcessing'
import titles from '../../../movies/titles.json'

MongoDB.instance.connect()

async function getAllVotes (): Promise<IUserVote[]> {
  return await UserVote.find()
}

function countAllVotes (data): any {
  const resultsByMovie = Array.from(
    { length: titles.length },
    (movie, index) => {
      const results = {
        movieName: titles[index],
        votes: 0
      }
      return results
    }
  )

  for (const element of data) {
    titles.map((movie, index) => {
      if (element.movie === movie) {
        const sum = resultsByMovie[index].votes + 1
        resultsByMovie[index].votes = sum
      }
      return true
    })
  }

  return resultsByMovie
}

const categories = labels.map((label) => {
  return label.categoryName
})

function countVotesByMovie (data, id): any {
  const movies = labels[id].movies.map((label) => {
    return label
  })

  const resultsByMovie = Array.from(
    { length: movies.length },
    (movie, index) => {
      const results = {
        movieName: movies[index],
        votes: 0
      }
      return results
    }
  )

  for (const element of data) {
    movies.map((movie, index) => {
      if (element.movie === movie) {
        const sum = resultsByMovie[index].votes + 1
        resultsByMovie[index].votes = sum
      }
      return true
    })
  }

  return resultsByMovie
}

function filterByCategory (data): any {
  const resultsByCategory = Array.from(
    { length: categories.length },
    (category, index) => {
      const results = {
        category: categories[index],
        movies: []
      }
      return results
    }
  )

  for (const element of data) {
    categories.map((category, index) => {
      if (element.category === category) {
        resultsByCategory[index].movies.push(element)
      }
      return true
    })
  }

  return resultsByCategory
}

function countVotes (data): any {
  const results = Array.from({ length: categories.length }, (movie, index) => {
    const results = {
      category: categories[index],
      votes: []
    }
    return results
  })

  for (let i = 0; i <= categories.length - 1; i++) {
    const votes = countVotesByMovie(data[i].movies, i)
    results[i].votes = votes
  }

  return results
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req

  switch (method) {
    case 'GET': {
      const all = await getAllVotes()
      const resultsByCategory = filterByCategory(all)
      const results = countVotes(resultsByCategory)
      const numOfVotes = all.length
      const total = countAllVotes(all)
      res.status(200).json({ total, results, numOfVotes })
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
