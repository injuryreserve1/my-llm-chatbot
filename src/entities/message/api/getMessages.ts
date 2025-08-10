import { apiClient } from '@/shared/api/base'

export const getMessages = async () => {
  const res = await apiClient.get()
  return res
}
