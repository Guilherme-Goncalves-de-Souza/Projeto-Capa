import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/users`, params, true);
}

export const Read = async (filter = "") => {
    return await GET(`/users${filter}`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/users/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/users/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/users/${ id }`, true);
}