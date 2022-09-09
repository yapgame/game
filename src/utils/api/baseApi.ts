/* eslint-disable class-methods-use-this */
import { IOption } from 'Interfaces/IOption';

export class BaseApi {
  public options: IOption;

  constructor(options: IOption) {
    this.options = options;
  }

  checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка ${res.status}`);
  }
}
