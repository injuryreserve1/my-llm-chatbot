import { useMessagesQuery } from "@/features/chat/";
import { Message } from "@/entities/message/index";
import "./ChatWindow.css";

interface MessageType {
  author: string;
  contents: string;
}

export default function ChatWindow() {
  const { data } = useMessagesQuery();
  const messages: MessageType[] = data ?? [];
  return (
    <div className="dialog">
      {messages.length > 0 &&
        messages.map(({ author, contents }, index: number) => (
          <Message key={index} author={author} contents={contents} />
        ))}
    </div>
  );
}
