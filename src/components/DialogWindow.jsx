import Message from './Message.jsx'
import useData from './CustomHooks/useData.jsx'

export default function DialogWindow() {
  const {
    states: { messages },
  } = useData()

  return (
    <div className='dialog'>
      {messages.length > 0 &&
        messages.map(({ author, contents }, index) => (
          <Message key={index} author={author} contents={contents} />
        ))}
    </div>
  )
}
