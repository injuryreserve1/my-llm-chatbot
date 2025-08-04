import { ChatOllama } from '@langchain/ollama'

export async function generateAnswer(question) {
  const llm = new ChatOllama({
    model: 'deepseek-r1:1.5b',
    temperature: 0,
  })

  const result = await llm.invoke([{ role: 'user', content: question }])
  // console.log(result)
  return result
}
