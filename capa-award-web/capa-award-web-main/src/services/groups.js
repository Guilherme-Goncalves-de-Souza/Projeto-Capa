import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/groups`, params, true);
}

export const Read = async (filter = "") => {
    return await GET(`/groups${filter}`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/groups/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/groups/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/groups/${ id }`, true);
}