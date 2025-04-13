import { Message } from '../db/models/message.js'

export async function createMessage({ author, contents }) {
  const message = new Message({ author, contents })
  return await message.save()
}

export async function listMessage(query = {}) {
  return await Message.find(query)
}

export async function deleteMessage(messageId) {
  return await Message.deleteOne({ _id: messageId })
}
