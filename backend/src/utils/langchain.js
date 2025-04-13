import { ChatOllama } from '@langchain/ollama'
import dotenv from 'dotenv'
dotenv.config()

export async function generateAnswer(question) {
  const llm = new ChatOllama({
    model: process.env.MODEL_NAME,
    temperature: 0,
  })

  const result = await llm.invoke([{ role: 'user', content: question }])
  // console.log(result)
  return result
}
