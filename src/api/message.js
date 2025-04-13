export const getMessages = async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/messages`, {
    method: 'GET',
  })

  return await res.json()
}

export const createMessage = async (message) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })

  return await res.json()
}
