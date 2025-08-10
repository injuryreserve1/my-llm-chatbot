export class ApiClient {
  private _baseUrl: string;

  constructor(url: string) {
    this._baseUrl = url;
  }

  async handleResponse(res: Response) {
    if (!res.ok) throw new Error(`handle response error blin! ${res.status}`);
    try {
      return await res.json();
    } catch (error) {
      throw new Error(`error blin while handle response! ${error}`);
    }
  }

  async get() {
    const res = await fetch(`${this._baseUrl}/messages`, {
      method: "GET",
    });

    return this.handleResponse(res);
  }

  async post<TMessage = Record<string, string>>(message: TMessage) {
    const res = await fetch(`${this._baseUrl}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    return this.handleResponse(res);
  }
}

export const apiClient = new ApiClient(import.meta.env.VITE_BACKEND_URL);
