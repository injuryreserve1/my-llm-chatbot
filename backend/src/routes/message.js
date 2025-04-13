import {
  listMessage,
  deleteMessage,
  createMessage,
} from './../services/message.js'

import { generateAnswer } from './../utils/langchain.js'

export function messagesRoutes(app) {
  app.get('/api/v1/messages', async (req, res) => {
    try {
      return res.json(await listMessage())
    } catch (error) {
      console.error(error)
      return res.status(500).end()
    }
  })

  app.post('/api/v1/messages', async (req, res) => {
    try {
      //console.log(req.body)
      const { content } = await generateAnswer(req.body.contents)
      const message = await createMessage(req.body)
      const botMessage = await createMessage({
        author: 'bot',
        contents: content,
      })

      return res.json({ message, botMessage })
    } catch (error) {
      console.error(`error blin! ${error}`)
      return res.status(500).end()
    }
  })

  app.delete('/api/v1/messages/:id', async (req, res) => {
    try {
      const { deletedCount } = await deleteMessage(req.params.id)
      if (deletedCount === 0) return res.sendStatus(404)
      return res.status(204).end()
    } catch (error) {
      console.log(`delete error ${error}`)
      return res.status(500).end()
    }
  })
}
