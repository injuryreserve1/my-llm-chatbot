import { apiClient } from '@/shared/api/base'

export const postMessage = async (msg) => {
  const res = await apiClient.post(msg)
  return res
}
