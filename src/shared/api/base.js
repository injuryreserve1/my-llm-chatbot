export class ApiClient {
  constructor(url) {
    this._baseUrl = url
  }

  async get() {
    const res = await fetch(`${this._baseUrl}/messages`, {
      method: 'GET',
    })

    return await res.json()
  }

  async post(message) {
    const res = await fetch(`${this._baseUrl}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    })

    return await res.json()
  }
}

export const apiClient = new ApiClient(import.meta.env.VITE_BACKEND_URL)
