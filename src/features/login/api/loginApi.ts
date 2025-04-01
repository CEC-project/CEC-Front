import api from "../../../shared/api/api";

interface LoginResponse {
  data: {
    data: {
      accessToken: string;
    };
    message: string;
    status: number;
  };
}

export default class LoginApi {
  // 로그인
  static async login(
    data: Record<string, unknown>,
    headers: { authorization: string }
  ): Promise<LoginResponse> {
    return await api.post(`api/auth/login`, data, headers);
  }
}
