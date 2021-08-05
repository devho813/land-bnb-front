import apiClient from ".";
import { UserType } from "../../types/user";

interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

// 회원가입 api
export const signupAPI = (body: SignUpAPIBody) => {
  return apiClient.post<UserType>("/api/auth/signup", body);
};
