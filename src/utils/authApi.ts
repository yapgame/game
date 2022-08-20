interface IOption {
  baseUrl: string,
  headers: Record<string, string>,
}

const Methods = {
  POST: 'POST',
};

export class Auth {
  private options: IOption;

  constructor(options: IOption) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка ${res.status}`);
  }

  async signUp(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/auth/signup`, {
      method: Methods.POST,
      headers: this.options.headers,
      body: JSON.stringify(data),
    });
    return this.checkResponse(res);
  }

  async signIn(data: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/auth/signin`, {
      method: Methods.POST,
      headers: this.options.headers,
      body: JSON.stringify(data),
    });
    return this.checkResponse(res);
  }
}

const auth = new Auth({
  baseUrl: 'https://ya-praktikum.tech/api/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default auth;
