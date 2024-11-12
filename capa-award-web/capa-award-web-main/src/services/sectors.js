import { GET, POST, PUT, DELETE } from './api'

export const Create = async (params) => {
    return await POST(`/sectors`, params, true);
}

export const Read = async () => {
    return await GET(`/sectors`, true);
}

export const ReadOne = async (id) => {
    return await GET(`/sectors/${id}`, true);
}

export const Update = async (params, id) => {
    return await PUT(`/sectors/${id}`, params, true);
}

export const Delete = async (id) => {
    return await DELETE(`/sectors/${ id }`, true);
}