import useData from './CustomHooks/useData.jsx'
import Loader from './Loader.jsx'

import { memo } from 'react'

export default memo(function DialogForm() {
  const {
    states: { question, isLoading },
    actions: { setQuestion, setLoading, createMessageMutation },
  } = useData()

  return (
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault()
        setLoading(true)
        createMessageMutation.mutate()
      }}
    >
      {isLoading && <Loader />}

      <div className='action'>
        <input
          className='input-textarea'
          name=''
          value={question}
          type='text'
          onChange={(e) => setQuestion(e.target.value)}
          placeholder='Напишите интересующий вас вопрос'
          disabled={isLoading ? true : false}
        ></input>
        <button>&#11157;</button>
      </div>
    </form>
  )
})
