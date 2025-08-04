import Loader from '@/shared/ui/Loader/Loader'
import { usePostMessage } from '../../api/usePostMessage'
import { useState } from 'react'
import './SendMessageForm.css'

export default function SendMessageForm() {
  const [question, setQuestion] = useState('')
  const { mutateAsync, isPending } = usePostMessage()

  const reset = () => {
    setQuestion('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutateAsync({ author: 'пользователь', contents: question })

    reset()
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      {isPending && <Loader />}

      <div className='action'>
        <input
          className='input-textarea'
          name=''
          value={question}
          type='text'
          onChange={(e) => setQuestion(e.target.value)}
          placeholder='Напишите интересующий вас вопрос'
          disabled={isPending ? true : false}
        ></input>
        <button disabled={question.length == 0 ? true : false}>&#11157;</button>
      </div>
    </form>
  )
}
