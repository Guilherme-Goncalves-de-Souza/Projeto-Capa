import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/blogs`, params, true);
}

export const Read = async (query = "") => {
    return await GET(`/blogs${query}`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/blogs/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/blogs/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/blogs/${ id }`, true);
}