import { useQuery } from "@tanstack/react-query";
import { messageApi } from "@/entities/message";

export const useMessagesQuery = () =>
  useQuery({
    queryKey: ["messages"],
    queryFn: () => messageApi.getMessages(),
  });
