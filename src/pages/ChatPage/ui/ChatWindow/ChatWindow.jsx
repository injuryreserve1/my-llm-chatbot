import { useMessagesQuery } from '@/features/chat/'
import { Message } from '@/entities/message'
import './ChatWindow.css'

export default function ChatWindow() {
  const { data } = useMessagesQuery()
  const messages = data ?? []
  return (
    <div className='dialog'>
      {messages.length > 0 &&
        messages.map(({ author, contents }, index) => (
          <Message key={index} author={author} contents={contents} />
        ))}
    </div>
  )
}
