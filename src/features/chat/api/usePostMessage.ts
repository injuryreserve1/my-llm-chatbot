import { useMutation } from "@tanstack/react-query";
import { messageApi } from "@/entities/message";
import { queryClient } from "@/shared/api/query-client";
import { type TMessage } from "@/entities/message/";

export const usePostMessage = () => {
  return useMutation({
    mutationFn: (msg: TMessage) => messageApi.postMessage(msg),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });
};
