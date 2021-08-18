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
