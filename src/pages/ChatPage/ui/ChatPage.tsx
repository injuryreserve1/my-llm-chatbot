import { SendMessageForm } from "@/features/chat/";
import ChatWindow from "./ChatWindow/ChatWindow.tsx";

export function ChatPage() {
  return (
    <main className="wrapper">
      <ChatWindow />
      <SendMessageForm />
    </main>
  );
}
