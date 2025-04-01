import axios from "axios";
import { route } from "../../router/route";
import errorHandler from "../util/errorHandler";

export const url = import.meta.env.VITE_API_URL;
export const fileUrl = import.meta.env.VITE_FILE_URL;

const baseURL = `${url}/`;

export const _axios = axios.create({
  baseURL,
  withCredentials: true,
});

let alertFlag = true;

_axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response, config } = error;

    // 액세스 토큰 만료
    if (response.data.code === 40101) {
      try {
        const response = await axios.post(`${url}/api/auth/reset/access`);
        const newToken = response.data.data.accessToken;

        // new 액세스 토큰 변수 저장
        sessionStorage.setItem("sg_token", newToken);

        // new 액세스 토큰 헤더 설정
        config.headers["authorization"] = `Bearer ${newToken}`;
        return await _axios(config);
      } catch (error) {
        errorHandler(error);
        sessionStorage.clear();
        window.location.href = `/${route.login}` + "?refresh=true";
        if (alertFlag) {
          alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
          alertFlag = false;
        }
      }
    }

    // 리프레쉬 토큰 만료
    else if (response.data.code === 40102) {
      sessionStorage.clear();
      window.location.href = "/login" + "?refresh=true";

      if (alertFlag) {
        alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
        alertFlag = false;
      }
    }

    // 리프레쉬 토큰 만료
    else if (response.status === 406) {
      return;
    }

    return Promise.reject(error);
  }
);

interface SendParams {
  method: string;
  url: string;
  data?: Record<string, unknown> | FormData;
  params?: Record<string, unknown>;
  headers?: Record<string, unknown>;
}

export default class api {
  static async getAuthorizeHeader() {
    const token = sessionStorage.getItem("sg_token");

    return token ? { Authorization: `Bearer ${token.replace(/"/g, "")}` } : {};
  }

  static async send({ method, url, data, params, headers }: SendParams) {
    const res = await _axios.request({
      url,
      method,
      params,
      data,
      headers: {
        "Access-Control-Allow-Origin": "*",
        ...(await api.getAuthorizeHeader()),
        ...headers,
      },
    });

    return { data: res.data, status: res.status };
  }

  static async get(
    url: string,
    params?: Record<string, unknown>,
    headers?: Record<string, unknown>
  ) {
    return await api.send({ method: "GET", url, params, headers });
  }

  static async post(
    url: string,
    data?: Record<string, unknown>,
    headers?: Record<string, unknown>
  ) {
    return await api.send({ method: "POST", url, data, headers });
  }

  static async put(
    url: string,
    data?: Record<string, unknown>,
    headers?: Record<string, unknown>
  ) {
    return await api.send({ method: "PUT", url, data, headers });
  }

  static async patch(
    url: string,
    data?: Record<string, unknown>,
    headers?: Record<string, unknown>
  ) {
    return await api.send({ method: "PATCH", url, data, headers });
  }

  static async del(
    url: string,
    data?: Record<string, unknown>,
    headers?: Record<string, unknown>
  ) {
    return await api.send({ method: "DELETE", url, data, headers });
  }

  static async fileForm(
    url: string,
    file: File,
    method: string,
    path: string,
    params?: Record<string, unknown>
  ) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("path", `sangsego/dev/${path}`);

    return await api.send({
      url,
      method: method || "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      params: params,
    });
  }
}
