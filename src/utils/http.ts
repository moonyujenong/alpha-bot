import qs from "qs";

import axios, {
  AxiosError,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
// import {SESSION_COOKIE_NAME} from "../features/user/data/session.ts";
// import {getCookie} from "./cookies.ts";

const accessToken = sessionStorage.getItem("accessToken");
// const refreshToken = getCookie(SESSION_COOKIE_NAME)

const contentTypes = [
  "application/json",
  "application/x-www-form-urlencoded",
  "text/plain",
  "multipart/form-data",
] as const;

export interface IApiResponse {
  code: string;
  message: string;
  data?: any;
}

const getBody = (
  body: object | string | FormData,
  contentType: (typeof contentTypes)[number],
) => {
  if (
    contentType === "application/x-www-form-urlencoded" &&
    typeof body === "object"
  ) {
    return qs.stringify(body);
  }

  return body;
};

const getInstance = <ResponseType extends IApiResponse>(
  isAuth: boolean,
  contentType?: (typeof contentTypes)[number],
  extraHeaders?: { [key: string]: string },
) => {
  const options = {} as AxiosRequestConfig;

  options.headers = {
    ...extraHeaders,
  } as AxiosRequestHeaders;

  if (isAuth) {
    options.headers["authorization"] = `Bearer ${accessToken}`;
  }

  if (contentType) {
    options.headers["content-type"] = contentType;
  }

  const instance = axios.create(options);
  (
    instance.interceptors.response as AxiosInterceptorManager<
      AxiosResponse<ResponseType, any>
    >
  ).use(
    (response) => {
      return response;
    },
    (error: Error | AxiosError) => {
      console.log(error);
    },
  );

  return instance;
};

const http = {
  get: async <ResponseType extends IApiResponse>(
    url: string,
    isAuth = true,
  ) => {
    const response = await getInstance(isAuth).get<ResponseType>(url);
    return response ? response.data : null;
  },
  post: async <ResponseType extends IApiResponse>(
    url: string,
    body: object | string | FormData = {},
    isAuth = true,
    contentType: (typeof contentTypes)[number] = "application/x-www-form-urlencoded",
    extraHeaders?: { [key: string]: string },
  ) => {
    const instance = getInstance<ResponseType>(
      isAuth,
      contentType,
      extraHeaders,
    );
    const response = await instance.post<ResponseType>(
      url,
      getBody(body, contentType),
    );
    return response ? response.data : null;
  },
  put: async <ResponseType extends IApiResponse>(
    url: string,
    body: object | string | FormData = {},
    isAuth = true,
    contentType: (typeof contentTypes)[number] = "application/x-www-form-urlencoded",
  ) => {
    const instance = getInstance<ResponseType>(isAuth, contentType);
    const response = await instance.put<ResponseType>(
      url,
      getBody(body, contentType),
    );
    return response ? response.data : null;
  },
  delete: async <ResponseType extends IApiResponse>(
    url: string,
    isAuth = true,
  ) => {
    const response = await getInstance(isAuth).delete<ResponseType>(url);
    return response ? response.data : null;
  },
};

export default http;
