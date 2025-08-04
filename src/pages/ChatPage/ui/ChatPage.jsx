import { SendMessageForm } from '@/features/chat/'
import ChatWindow from './ChatWindow/ChatWindow'
export default function ChatPage() {
  return (
    <main className='wrapper'>
      <ChatWindow />
      <SendMessageForm />
    </main>
  )
}
