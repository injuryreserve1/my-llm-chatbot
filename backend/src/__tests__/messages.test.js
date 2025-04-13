import mongoose from 'mongoose'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { app } from './../app.js'
import request from 'supertest'

import {
  createMessage,
  deleteMessage,
  listMessage,
} from '../services/message.js'
import { Message } from '../db/models/message.js'

import { generateAnswer } from '../utils/langchain.js'

const time = 80000 // across this time llm must give an answer.

describe('creating answer', () => {
  test(
    'llm should text something',
    async () => {
      const question = 'напиши что-нибудь'
      const answer = await generateAnswer(question)

      expect(answer.content).toContain('<think>') //deepseek returns answer inside <think></think> tag
    },
    time,
  )

  test(
    'llm should text smth and then its answer has to save to db',
    async () => {
      const question = 'напиши что-нибудь'
      const answer = await generateAnswer(question)
      const createdAnswer = await createMessage('from test', answer)
      //console.log(createdAnswer)
      expect(createdAnswer._id).toBeInstanceOf(mongoose.Types.ObjectId)
    },
    time,
  )
})

const sampleMessages = [
  { author: 'bot', content: 'its answer' },
  { author: 'user1', content: 'his question' },
  { author: 'user2', content: 'her question' },
]

let createdSampleMessages = []

beforeEach(async () => {
  await Message.deleteMany({})
  createdSampleMessages = []

  for (const message of sampleMessages) {
    const createdMessage = new Message(message)
    createdSampleMessages.push(await createdMessage.save())
  }
})

describe('listing messages', () => {
  test('should return all messages from db', async () => {
    const messages = await listMessage()
    expect(messages.length).toEqual(createdSampleMessages.length)
  })
})

describe('delete message', () => {
  test('should delete message from db', async () => {
    const result = await deleteMessage(createdSampleMessages[0]._id)
    expect(result.deletedCount).toEqual(1)

    const deletedMessage = await Message.findById(createdSampleMessages[0]._id)
    expect(deletedMessage).toEqual(null)
  })
})

describe('api endpoints', () => {
  test('should list messages', async () => {
    const messages = await listMessage()
    const res = await request(app).get('/api/v1/messages')
    expect(messages.length).toEqual(res.body.length)
    expect(res.statusCode).toEqual(200)
  })
})
