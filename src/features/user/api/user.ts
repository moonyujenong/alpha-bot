import http, { IApiResponse } from "../../../utils/http.ts";

interface IUpdateEmailRequest {
  user_id: string;
  email: string;
}

interface ISignUpRequest {
  user_id: string;
}

interface ISignInRequest {
  wallet_address: string;
}

interface ISignOutRequest {
  user_id: string;
  wallet_address: string;
}

interface IUserResponse extends IApiResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    email: string;
    email_cert_code: string;
    email_cert_yn: string;
    otp_cert_key: string;
    otp_cert_yn: string;
    user_id: string;
  };
}

interface ICheckUser extends IApiResponse {
  data: {
    existRegisterId: boolean;
  };
}

export default {
  checkUserId: () =>
    http.get<ICheckUser>(
      `${import.meta.env.VITE_API_BASE_URL}/user/existRegisterId`,
      false,
    ),
  updateEmail: (params: IUpdateEmailRequest) =>
    http.put(
      `${import.meta.env.VITE_API_BASE_URL}/user/email/register`,
      params,
      false,
    ),
  signUp: ({ user_id }: ISignUpRequest) =>
    http.post(
      `${import.meta.env.VITE_API_BASE_URL}/user/register`,
      {
        user_id,
      },
      false,
    ),
  signIn: ({ wallet_address }: ISignInRequest) =>
    http.post<IUserResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/user/login`,
      {
        user_id: wallet_address,
        refreshToken: "",
      },
      false,
    ),
  signOut: ({ user_id }: ISignOutRequest) =>
    http.post<IUserResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/user/logout`,
      {
        user_id: user_id,
      },
      true,
    ),
};
