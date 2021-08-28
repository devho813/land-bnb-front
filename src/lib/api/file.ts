import apiClient from ".";

export const uploadFileAPI = (file: FormData) => {
  return apiClient.post("/files/upload", file);
};
