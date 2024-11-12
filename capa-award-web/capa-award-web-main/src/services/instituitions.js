import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/instituitions`, params, true);
}

export const Read = async () => {
    return await GET(`/instituitions`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/instituitions/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/instituitions/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/instituitions/${ id }`, true);
}