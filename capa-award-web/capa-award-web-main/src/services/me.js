import { GET, POST, PUT, DELETE } from "./api";

export const ReadMe = async () => {
  return await GET(`/user/me`, true);
};

export const UpdateMe = async (params) => {
  return await PUT(`/user/update`, params, true);
};

export const RemoveMe = async (id) => {
  return await DELETE(`/users/${id}`, true);
};

export const UpdateMePassword = async (params) => {
  return await PUT(`/user/me/update-password`, params, true);
};
