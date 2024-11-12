import { GET, POST, PUT, DELETE } from "./api";

export const ReadMe = async () => {
    return await GET(`/v1/me`, true);
}

export const UpdateMe = async (params) => {
    return await PUT(`/v1/me`, params, true);
}

export const RemoveMe = async () => {
    return await DELETE(`/v1/me`, true);
}

export const UpdateMePassword = async (params) => {
    return await PUT(`/v1/me/password`, params, true);
}