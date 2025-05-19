import { api } from "../config/http";
import { ISignInDtoResponse } from "../interface/ISignInDroResponse";
import { ISignInDtoRequest } from "../interface/ISignInDtoRequest";

export class AccountService {
  static accountUrl = "/accounts";
  static async getToken(request: ISignInDtoRequest) {
    return api.post<ISignInDtoResponse>(
      `${AccountService.accountUrl}/token/`,
      request
    );
  }
}
