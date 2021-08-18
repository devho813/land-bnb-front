import apiClient from ".";
import { UserType } from "../../types/user";

interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

interface LoginAPIBody {
  email: string;
  password: string;
}

// 회원가입 api
export const signupAPI = (body: SignUpAPIBody) => {
  return apiClient.post<UserType>("/api/auth/signup", body);
};

// 로그인 api
export const loginAPI = (body: LoginAPIBody) => {
  return apiClient.post<UserType>("/api/auth/signin", body);
};

// 사용자 정보 api
export const meAPI = () => {
  return apiClient.get<UserType>("/api/auth/me");
};

// 로그아웃 api
export const logoutAPI = () => {
  return apiClient.delete("/api/auth/logout");
};
