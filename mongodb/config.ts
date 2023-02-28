import mongoose from 'mongoose'

class MongoDB {
  private static _instance: MongoDB | null = null

  static get instance (): MongoDB {
    if (MongoDB._instance === null) {
      MongoDB._instance = new MongoDB()
    }

    return MongoDB._instance
  }

  connect (): void {
    mongoose.set('strictQuery', true)
    void mongoose.connect(process.env.MONGODB_URI)
  }

  async close (): Promise<void> {
    await mongoose.connection.close(true)
  }
}

export default MongoDB
