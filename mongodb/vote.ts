import mongoose from 'mongoose'

interface IUserVote {
  _id: mongoose.Types.ObjectId
  movie: string
  category: string
  savedAt: Date
}

const userVoteSchema = new mongoose.Schema<IUserVote>({
  movie: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  savedAt: {
    type: Date,
    required: true
  }
})

const UserVote =
  (mongoose.models.UserVote as mongoose.Model<IUserVote>) ||
  mongoose.model('UserVote', userVoteSchema)

export { UserVote }
export type { IUserVote }
