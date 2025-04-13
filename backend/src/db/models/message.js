import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema(
  {
    author: String,
    contents: String,
  },
  { timestamps: true },
)

export const Message = mongoose.model('message', messageSchema)
