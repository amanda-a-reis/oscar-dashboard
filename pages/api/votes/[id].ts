import type { NextApiRequest, NextApiResponse } from 'next'
import MongoDB from '../../../mongodb/config'
import { UserVote, type IUserVote } from '../../../mongodb/vote'

MongoDB.instance.connect()

async function getVoteByCategory (category: string): Promise<IUserVote[]> {
  return await UserVote.find({ category })
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req

  const { id } = req.query

  if (id === process.env.API_KEY) {
    switch (method) {
      case 'POST': {
        const { category }: { category: string } = req.body
        const moviesData = await getVoteByCategory(category)
        res.status(200).json({ moviesData })
        break
      }
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } else {
    res.status(401).end('Sorry, you do not have access.')
  }
}
