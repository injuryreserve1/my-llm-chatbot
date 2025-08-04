import { useMutation } from '@tanstack/react-query'
import { messageApi } from '@/entities/message'
import { queryClient } from '@/shared/api/query-client'

export const usePostMessage = () => {
  return useMutation({
    mutationFn: (msg) => messageApi.postMessage(msg),
    onSuccess: () => {
      queryClient.invalidateQueries(['message'])
    },
  })
}
